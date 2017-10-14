# crypto-tools

git clone https://github.com/jgabios/crypto-tools.git
npm install
after that modify move.js with polo key.
then add your ordernumber, new price and volume and run it like this:

node move.js

To get the ordernumber, just open chrome devtools, and check the Network TAB.
you will see a request like this:
https://poloniex.com/private?command=returnPrivateInfoJSON&currencyPair=BTC_REP
in the response you will see the ordernumber.

