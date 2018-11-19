from BarBeerDrinker import config

from sqlalchemy import create_engine
from sqlalchemy import sql

from datetime import datetime

engine = create_engine(config.database_uri)


def get_bars():
    """
    Connect to the database and retrieve a list of all the bars and their information
    """
    with engine.connect() as con:
        rs = con.execute("SELECT name, city, state, weekdayOpen, weekdayClose, weekendOpen, weekendClose FROM bars")
        results = [dict(row) for row in rs]

        for r in results:
            r['weekdayOpen'] = str(r['weekdayOpen'])
            r['weekdayClose'] = str(r['weekdayClose'])
            r['weekendOpen'] = str(r['weekendOpen'])
            r['weekendClose'] = str(r['weekendClose'])

            '''
            r['weekdayOpen'] = datetime.strftime((r['weekdayOpen']), "%H:%M:%S")
            r['weekdayClose'] = datetime.strftime((r['weekdayClose']), "%H:%M:%S")
            r['weekendOpen'] = datetime.strftime((r['weekendOpen']), "%H:%M:%S")
            r['weekendClose'] = datetime.strftime((r['weekendClose']), "%H:%M:%S")
            '''
        return results;

def get_beers():
    """
    Connect to the database and retrieve a list of all the bars and their information
    """
    with engine.connect() as con:
        rs = con.execute("SELECT name, manufacturer from items WHERE itemType = 'beer';")
        results = [dict(row) for row in rs]
        return results;

def find_beer(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, manufacturer from items WHERE name=:name;")
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        result = dict(result)
        return result

def get_drinkers():
    """
    Connect to the database and retrieve a list of all the bars and their information
    """
    with engine.connect() as con:
        rs = con.execute("SELECT name,phone,city,state,addr FROM drinkers")
        results = [dict(row) for row in rs]
        return results;

def find_bar(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, city, state, weekdayOpen, weekdayClose, weekendOpen, weekendClose FROM bars WHERE name = :name;")

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        result = dict(result)
        result['weekdayOpen'] = str(result['weekdayOpen'])
        result['weekdayClose'] = str(result['weekdayClose'])
        result['weekendOpen'] = str(result['weekendOpen'])
        result['weekendClose'] = str(result['weekendClose'])
        return result

def find_drinker(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, phone, city, state, addr FROM drinkers WHERE name = :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        result = dict(result)
        return result

def get_drinker_most_beers(name):
        with engine.connect() as con:
            query = sql.text("select c.item as beer, sum(c.quantity) as quantity from contains c,(select t.bar,t.transactionID from transactions t left join makes m on t.bar = m.bar and t.transactionID = m.transactionID where m.drinker = :name) s where s.transactionID = c.transactionID and s.bar = c.bar group by beer;");
            rs = con.execute("SELECT name,itemType FROM items")
            items = [dict(row) for row in rs]
            rs = con.execute(query, name=name)
            results = [dict(row) for row in rs]
            results2 = [];
            for r in results:
                r['quantity'] = float(r['quantity'])
                for i in items:
                    if(i['name']  == r['beer']):
                        if(i['itemType'] == "Beer"):
                            results2.append(r);

            return results2
def get_drinker_transactions(name):
        with engine.connect() as con:
            query = sql.text("select t.bar as bar,t.transactionID as transactionID,t.time as time,t.total as total,t.tip as tip from transactions t left join makes m on t.bar = m.bar and t.transactionID = m.transactionID where m.drinker = :name order by bar,time;")
            rs = con.execute(query, name=name)
            results = [dict(row) for row in rs]
            for r in results:
                r['time'] = str(r['time'])
                r['tip'] = float(r['tip'])
                r['tip'] = float('%.3f'%(r['tip']))
                r['total'] = float('%.3f'%(r['total']))
            return results
def get_drinker_time(name,start,end):
    with engine.connect() as con:
        query = sql.text("select t.time as time,t.total as total from transactions t left join makes m on t.bar = m.bar and t.transactionID = m.transactionID where m.drinker = :name and time between :start and :end order by time");
        rs = con.execute(query, name=name,start=start,end=end)
        results = [dict(row) for row in rs]
        for r in results:
            r['time'] = str(r['time'])
            r['total'] = float(r['total'])
            r['total'] = float('%.3f'%(r['total']))
        return results
def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM sells WHERE price < :max_price;"
        )
    rs = con.execute(query, max_price=max_price)
    results = [dict(row) for row in rs]
    for r in results:
        r['price'] = float(r['price'])
    return results

def beers_time_distribution(name):
        with engine.connect() as con:
            query = sql.text("select avg(transactionsPerHour) as avgT,hour(time) as hour from (select c.item,c.quantity,t.bar,count(t.transactionID) as transactionsPerHour,t.time from transactions t left join contains c on t.bar = c.bar and t.transactionID = c.transactionID where c.item = :name group by hour(time),time) t group by hour(time) ;")
            rs = con.execute(query, name=name)
            results = [dict(row) for row in rs]
            for r in results:
                r['avgT'] = float(r['avgT'])
                r['hour'] = int(r['hour'])
            return results
def bar_time_distribution_day(name):
        with engine.connect() as con:
            query = sql.text("select avg(transactionsPerHour) as avgT,hour(time) as hour from(select count(*) as transactionsPerHour,time from transactions where bar = :name group by hour(time),time)t group by hour(time) order by hour(time);");
            rs = con.execute(query, name=name)
            results = [dict(row) for row in rs]
            for r in results:
                r['avgT'] = float(r['avgT'])
                r['hour'] = int(r['hour'])
            return results
def bar_time_distribution_week(name):
        with engine.connect() as con:
            query = sql.text("select avg(transactionsPerHour) as avgT,dayofweek(time) as hour from(select count(*) as transactionsPerHour,time from transactions where bar = :name group by hour(time),time)t group by dayofweek(time) order by dayofweek(time);");
            rs = con.execute(query, name=name)
            results = [dict(row) for row in rs]
            for r in results:
                r['avgT'] = float(r['avgT'])
                r['hour'] = int(r['hour'])
            return results
def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text('SELECT DISTINCT a.bar, a.item, a.price, b.manufacturer, b.itemType FROM sells as a JOIN items AS b ON a.item = b.name WHERE a.bar = :bar;')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT bar, count(*) as frequentCount FROM frequents GROUP BY bar;')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results

def get_largest_spenders(bar_name):
    with engine.connect() as con:
        query = sql.text("select m.drinker as drinker, t.total as spendingAmount from transactions t left join makes m on t.bar = m.bar and t.transactionID = m.transactionID where t.bar = :bar;")
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['spendingAmount'] = float(r['spendingAmount'])
        return results

def get_popular_beers(bar_name):
    with engine.connect() as con:
        query = sql.text("select c.item as beers, sum(c.quantity) as AmountSold from items i, transactions t left join contains c ON t.bar = c.bar and t.transactionID = c.transactionID where t.bar =:bar AND i.name = c.item and i.itemType = 'beer' group by c.item;")
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['AmountSold'] = int(r['AmountSold'])
        return results

def get__sells_most_beers(bar_name):
    with engine.connect() as con:
        query = sql.text("select i.manufacturer AS Manufacturer, SUM(s.quantity) AS BeersSold from items i,(select c.item,c.quantity,t.bar,t.transactionID,t.time,t.total,t.tip from transactions t left join contains c on t.bar = c.bar and t.transactionID = c.transactionID where t.bar =:bar) s where i.name = s.item group by manufacturer;")
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['BeersSold'] = int(r['BeersSold'])
        return results

def get__best_selling_locations(beer_name):
    with engine.connect() as con:
        query = sql.text("select t.bar as Bar, SUM(c.quantity) as NumberSold from transactions t left join contains c on t.bar = c.bar and t.transactionID = c.transactionID where c.item =:beer group by Bar;")
        rs = con.execute(query, beer=beer_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['NumberSold'] = int(r['NumberSold'])
        return results

def get__top_consumers(beer_name):
    with engine.connect() as con:
        query = sql.text("select m.drinker as Drinker, SUM(s.quantity) as AmountConsumed from makes m,(select c.item,c.quantity,t.bar,t.transactionID from transactions t left join contains c on t.bar = c.bar and t.transactionID = c.transactionID where c.item = :beer) s where m.bar = s.bar and m.transactionID = s.transactionID group by Drinker;")
        rs = con.execute(query, beer=beer_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['AmountConsumed'] = int(r['AmountConsumed'])
        return results

def modification_query(query):
    with engine.connect() as con:
        result = {"first": "error"}
        try:
            rs = con.execute(query)
            result["first"] = "Table has been updated"
            return result
        except Exception as e:
            result["first"] = str(e)
            return result
        except ValueError as e:
            return result

def verify_assertion(query):
    with engine.connect() as con:
        result = {"first": "True: Assertion is held."}
        try:
            rs = con.execute(query)
            for r in rs:
                if(r['verify'] == 0):
                    result["first"] = "FALSE: Assertion not held"
                    break
            return result
        except Exception as e:
            result["first"] = str(e)
            return result
        except ValueError as e:
            return result
