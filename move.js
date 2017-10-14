
var Poloniex = require('poloniex.js');
//the poloniex key and secret
var poloniex = new Poloniex('XXXXXXXXX','XXXXXXXXXXXXXXXXXXXXXXXXXXXX');

// first argument is the order number
// second argument is the new price
// third argument is the sum of ALTCOINS
poloniex.moveOrder('128842610592', '0.01452300', '20', function(err, data){
    if(err) {
        console.log('err in moveorder');
        console.log(err);
    } else {
        console.log(data);
    }
});
