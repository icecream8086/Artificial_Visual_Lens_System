const {all_owner_folder}=require('./lib/file_system/folder');

function test(){
    let result = all_owner_folder(3);
    result.then((res)=>{
        console.log(res)
    }
    ).catch((err)=>{
        console.log(err)
    })
}
test()