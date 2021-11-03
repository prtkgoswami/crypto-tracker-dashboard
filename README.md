# crypto-tracker-dashboard
[Visit Live Website](https://crypto-tracker-dashboard.herokuapp.com/)
## Description:
A Dashboard Created to keep track of Popular Crypto-Currencies. Currently the application only supports Bitcoin & Etherium. Addition of more Coins will be coming soon.
All Data is being obtained from [CoinGecko](https://www.coingecko.com/en) & [CoinPaprika](https://coinpaprika.com/).

## Tech Stack
1. React.js
2. Tailwind CSS
3. Django

## Answers to Questions:
#### Q1: Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
#### Answer: No. I have not taken any known sub-optimal choices in my implementation.

#### Q2: Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
#### Answer: I have over-designed the frontend. 
1. I have included a Loading CSS Animation which occurs while the app is fetching data.
2. I have included a Modal to contain a description of the Crypto currency.
3. The Frontend is also designed to be responsive.

#### Q3: If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
#### Answer: Heavy traffic on the website can be handled in two ways:
1. Using Caching:
The API data can be temporarily cached. This cached data can then be periodically updated by the backend every 30 minutues or an hour. This method may not be recommended for this application as the recommendation to the user must be obtained from the current prices of the crypto-currencies.
2. Using Load Balancers:
Using Load Balancers to distribute the traffic to more than 1 servers can help decrease the load. The application can be deployed to multiple servers and a Load balancer can be used to redirect the user to the server with the lesser load.

#### Q4: What are some other enhancements you would have made, if you had more time to do this implementation
#### Answer:
1. Recommendations based on the trend of a coin as compared to current price & change percent.
2. Addition of more popular crypto-currencies.
3. A way to  visually see the trend of the currency when clicked on.
4. Since this is intended as a dashboard, I would want to cache the user's preferred crypto-currencies in a cookie and use this data to fetch the data from the backend when visiting the website.
5. I would also like to add a way to add new currencies & remove currencies.

## To-Do
- [x] Front-End using React JS
- [x] Fetch Data using API Call in Django
- [x] Integrate Django & React
- [x] Show Current Prices fo Coins from the 2 sources
- [x] Recommend buying/selling depending upon the current prices
- [x] Show information on the Coins
- [ ] Show Trends - 24H, 7D, 30D
- [ ] Improve Recommendation to be based on the trend of the Coin
- [ ] Addition of more popular coins
- [ ] Deletion of Coins which the user is not interested in
- [ ] Support of Cookies to store User data to show preferred coins for next visits
