var exec = require('child_process').exec;

function start(response) {
    console.log('Request handler "start" has been started');

    exec('find /', { timeout: 10000, maxBuffer: 20000 * 1024 }, function(error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log('Request handler "upload" has been called');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello upload!');
    response.end();
}

exports.start = start;
exports.upload = upload;