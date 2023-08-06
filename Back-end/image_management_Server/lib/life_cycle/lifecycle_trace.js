/**
 * Middleware function that logs the request method and URL when a request is received,
 * and logs the response status code when the response is sent.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function lifecycleTracker_global(req, res, next) {
    console.log('Request received:', req.method, req.url);

    res.on('finish', () => {
        console.log('Response sent:', res.statusCode);
    });

    next();
}


module.exports = function () {
    /**
     * Returns a middleware function that logs the request method and URL when a request is received,
     * and logs the response status code when the response is sent.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    return function (req, res, next) {
        lifecycleTracker_global(req, res, next);
    };
};

function lifecycleTracker(route) {
    return function (req, res, next) {
        if (req.route.path === route) {
            console.log('Request received:', req.method, req.url);

            res.on('finish', () => {
                console.log('Response sent:', res.statusCode);
            });
        }

        next();
    };
}

module.exports = lifecycleTracker;

// useage 
// app.get('/', lifecycleTracker('/'), (req, res) => {
//     res.send('Hello World!');
//   });