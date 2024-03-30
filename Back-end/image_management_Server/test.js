const {sync_folder}=require('./lib/file_system/folder');

function test(){
    let result = sync_folder('File_Stream/Avatar/','jitm');
    result.then((res)=>{
        console.log(res)
    }
    ).catch((err)=>{
        throw err
    })
}
test()