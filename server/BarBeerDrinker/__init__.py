from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/drinkers', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinkers/<name>', methods=["GET"])
def find_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker_transactions/<name>', methods=["GET"])
def get_drinker_transactions(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker_transactions(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker_most_beers/<name>', methods=["GET"])
def get_drinker_most_beers(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker_most_beers(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers_cheaper_than', methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['query']
    return jsonify(database.filter_beers(max_price))


@app.route('/api/send-query/<query>', methods=["GET"])
def modification_query(query):
        result = database.modification_query(query)
        return jsonify(dict(result))

@app.route('/api/verify-assertion/<query>', methods=["GET"])
def verify_assertion(query):
        result = database.verify_assertion(query)
        return jsonify(dict(result))


@app.route('/api/menu/<name>', methods=['GET'])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/frequents-data', methods=['GET'])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/large-spenders/<name>', methods=['GET'])
def get_largest_spenders(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_largest_spenders(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/popular-beers/<name>', methods=['GET'])
def get_popular_beers(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_popular_beers(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/manufacturer-sells/<name>', methods=['GET'])
def get__sells_most_beers(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get__sells_most_beers(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer/<name>', methods=["GET"])
def find_beer(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers_time_distribution/<name>', methods=["GET"])
def beers_time_distribution(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.beers_time_distribution(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar_time_distribution_day/<name>', methods=["GET"])
def bar_time_distribution_day(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.bar_time_distribution_day(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar_time_distribution_week/<name>', methods=["GET"])
def bar_time_distribution_week(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.bar_time_distribution_week(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/beer', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())


@app.route('/api/best-selling-locations/<name>', methods=['GET'])
def get__best_selling_locations(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get__best_selling_locations(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/top_consumers/<name>', methods=['GET'])
def get__top_consumers(name):
    try:
        if name is None:
            raise ValueError('Beer is not specified.')
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(database.get__top_consumers(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
