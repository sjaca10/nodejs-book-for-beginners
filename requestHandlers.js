var querystring = require('querystring');

function start(response, data) {
    console.log('Request handler "start" has been started');

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Send text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
}

function upload(response, data) {
    console.log('Request handler "upload" has been called');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('You send: ' + querystring.parse(data)['text']);
    response.end();
}

exports.start = start;
exports.upload = upload;