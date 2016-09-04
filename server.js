var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var data = "";
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        request.setEncoding('utf8');

        request.addListener('data', function(chunck) {
            data += chunck;
            console.log('Chuck data received ' + chunck + '.');
        });

        request.addListener('end', function() {
            route(handle, pathname, response, data);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log('Server initiated');
}

exports.start = start;