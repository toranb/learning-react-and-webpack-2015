var xhr = function(url, method, status, response, data) {
    var request = { url: url, method: method };

    if (data) {
        request.data = data;
        request.contentType = 'application/json';
    }

    return $.fauxjax.new({
        request: request,
        response: {
            status: status,
            content: response
        }
    });
};

export default xhr;
