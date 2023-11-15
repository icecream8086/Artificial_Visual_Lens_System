const {register_folder}=require('../../../lib/file_system/folder')

    //examle dir ="File_Stream/File_Block/3/additionalPath/Login background image.jfif"
    //ignore dir="File_Stream/File_Block/3"
    //ignore file name = "Login background image.jfif"

 
let example_dir ="File_Stream/File_Block/3/additionalPath/Login background image.jfif"
let example_dir2 ="File_Stream/File_Block/3/additionalPath/additionalPath2/additionalPath3/Login background image.jfif"


register_folder( "test",example_dir2).then(dict => {
    console.log(dict);
});


