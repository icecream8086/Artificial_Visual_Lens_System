import axios from 'axios';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
const localStorageJSON = new LocalStorageJSON();
axios.get('/api' + '/api/user/get_basic_info/' + "3", {
    headers: {
        'UID': localStorageJSON.read('UID'),
        'token': localStorageJSON.read('token'),
    }
}).then(res => {
    console.log(res);
})
    .catch(err => {
        console.log(err.response.message);
    })