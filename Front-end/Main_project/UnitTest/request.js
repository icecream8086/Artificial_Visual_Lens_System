import axios from 'axios';

axios.get('/api' + '/api/user/get_basic_info/' + "3", {
    headers: {
        'UID': "3",
        'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEsImlhdCI6MTY5NDY1MzMyNSwiZXhwIjoxNjk0NjU2OTI1fQ.9NgYIxkig9NoEskEdBU5w1BNuFNLughCEK2RaVZAoGo",
    }
}).then(res => {
    console.log(res);
})
    .catch(err => {
        console.log(err.response.message);
    })