function route(handle, pathname, response) {
    console.log('Routing request to ' +  pathname);
    if (typeof handle[pathname] == 'function') {
        return handle[pathname](response);
    }
    else {
        console.log('Request handler not found for ' + pathname);
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;