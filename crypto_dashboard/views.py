from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
import requests
from datetime import datetime
# Create your views here.

API_collections = [
    {
        'name': 'Coin Gecko',
        'URL': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=',
        'headers': None,
    },
    {
        'name': 'Coinpaprika',
        'URL': 'https://coinpaprika1.p.rapidapi.com/tickers',
        'headers': {
            'x-rapidapi-host': "coinpaprika1.p.rapidapi.com",
            'x-rapidapi-key': "b5c5007125msh15a890b33ee4acap1002c9jsnddb282d9042b"
        },
    }
]

API_Coin_Details_Prefix = "https://api.coingecko.com/api/v3/coins/"
API_Coin_details_Postfix = "?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false"


def index(request):
    return render(request, 'index.html')


def api_data(request):
    coins = ['bitcoin', 'ethereum']
    formatted_data = {'api_response': {
        'data': [],
        'updated_time': '',
    }}
    timestamp = datetime.now().strftime('%H:%M:%S')
    formatted_data['api_response']['updated_time'] = timestamp

    # GET COIN DATA
    for coin in coins:
        url_string = API_Coin_Details_Prefix + coin + API_Coin_details_Postfix
        response = requests.get(url_string)
        response_data = response.json()
        reqd = {
            'code': response_data['symbol'],
            'name': response_data['name'],
            'prices': [],
            'change_percents': [],
            'description': response_data['description']['en'],
            'link': response_data['links']['homepage'][0],
        }
        formatted_data['api_response']['data'].append(reqd)

    # GET MARKET DATA
    # COIN GECKO CALL
    url_string = API_collections[0]['URL'] + "%2C%20".join(coins)
    response = requests.get(url_string)
    response_data = response.json()
    index = 0
    for data in response_data:
        formatted_data['api_response']['data'][index]['prices'].append(
            '{:.2f}'.format(data['current_price']))
        formatted_data['api_response']['data'][index]['change_percents'].append(
            '{:.2f}'.format(data['price_change_percentage_24h']))
        index += 1

    # COIN PAPRIKA CALL
    response = requests.request(
        "GET", API_collections[1]['URL'], headers=API_collections[1]['headers'])
    response_data = response.json()
    for i in range(0, len(coins)):
        for data in response_data:
            if data['name'].lower() == coins[i]:
                quotes = data['quotes']
                market_data = quotes.get('USD')
                formatted_data['api_response']['data'][i]['prices'].append(
                    '{:.2f}'.format(market_data.get('price')))
                formatted_data['api_response']['data'][i]['change_percents'].append(
                    '{:.2f}'.format(market_data.get('percent_change_24h')))

    return JsonResponse(formatted_data)
