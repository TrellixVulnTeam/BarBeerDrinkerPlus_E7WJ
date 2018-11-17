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
