const { split_folder_info, check_folder_sha256_exists,register_folder } = require('../../../lib/file_system/folder')

//examle dir ="File_Stream/File_Block/3/additionalPath/Login background image.jfif"
//ignore dir="File_Stream/File_Block/3"
//ignore file name = "Login background image.jfif"


let example_dir = "File_Stream/File_Block/3/additionalPath/Login background image.jfif"
let example_dir2 = "File_Stream/File_Block/3/additionalPath/additionalPath2/additionalPath3/Login background image.jfif"

let dictx={
  additionalPath: '33a161678f50aaeb2b5039e75ae238b7324bfc43c5d992fac07a9754728dfbf0',
  additionalPath2: 'b5355a5e9a347e04464a8825f059dbea4578298b7a9bec5d5c74bf72e29ba9e0',
  additionalPath3: 'e6cb95712bcb40b2672dd2b2e928d10c09f1782cb90402623eb833275ba4704e'
};
let dick2={
  additionalPath: [
    'File_Stream/File_Block/3/additionalPath',
    '33a161678f50aaeb2b5039e75ae238b7324bfc43c5d992fac07a9754728dfbf0'
  ],
  additionalPath2: [
    'File_Stream/File_Block/3/additionalPath/additionalPath2',
    'b5355a5e9a347e04464a8825f059dbea4578298b7a9bec5d5c74bf72e29ba9e0'
  ],
  additionalPath3: [
    'File_Stream/File_Block/3/additionalPath/additionalPath2/additionalPath3',
    'e6cb95712bcb40b2672dd2b2e928d10c09f1782cb90402623eb833275ba4704e'
  ]
};

// split_folder_info(example_dir2).then(dict2 => {
//     console.log(dict2);
//     console.log("register_folder done");
   
// })
// .catch(err => {
//     console.log(err);
// })

register_folder(dick2,1,5,3,1).then(dict2 => {
    console.log(dick2);
    console.log("register_folder done");
   
})

// check_folder_sha256_exists(dictx).then(dict => {
//     console.log(dict);
//     console.log("check_folder_sha256_exists done");
// })


