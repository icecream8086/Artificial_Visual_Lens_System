var db = require('./mysql_connection');

function query(sql, values) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(JSON.stringify(results)));
            }
        });
    });
}

module.exports = query;