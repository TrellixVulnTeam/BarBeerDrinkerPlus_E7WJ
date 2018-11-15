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
        query = sql.text('SELECT a.bar, a.item, a.price, b.manufacturer b.itemType as likes FROM sells as a JOIN items AS b ON a.item = b.name WHERE a.bar = :bar;')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results
