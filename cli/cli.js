var WebSocket = require('ws');

var ws = new WebSocket('ws://ws.zaif.jp/stream?currency_pair=btc_jpy');

ws.on('open', function open() {
    console.log('connected.');
});

ws.on('message', function incoming(data) {
    var json = JSON.parse(data);
    if (json.last_price && json.last_price.price) {
        console.log(json.last_price.price);
    }
});