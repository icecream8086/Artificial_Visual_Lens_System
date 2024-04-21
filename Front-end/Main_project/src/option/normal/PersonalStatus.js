const axios = require('axios');

class PersonalStatus {
    // uploadAvatar(tokens, file, name) {
    //     return new Promise((resolve, reject) => {

    //     });
    // }
    getAvatar(tokens, id, debug = false) {
        return new Promise((resolve, reject) => {
            axios.get('api' + '/api/userAvatar', {
                headers: {
                    'Authorization': tokens,
                },
                params: {
                    id: id
                },
                responseType: 'blob' 
            })
            .then(function(response) {
                if (debug) {
                    console.log('/api/userAvatar' `[ok]`);
                    console.log(response);
                }
                const url = URL.createObjectURL(new Blob([response.data]));
                resolve(url);
            })
            .catch(function(err) {
                if (debug) {
                    console.log(err);
                }
                reject(err);
            });
        });
    }

}

module.exports = { PersonalStatus };