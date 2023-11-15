const{get_str_sha256} = require('../../../lib/hash/str_sha256');

let example_str = "hello world";
get_str_sha256(example_str).then(dict => {
    // console.log(dict);
}
);
