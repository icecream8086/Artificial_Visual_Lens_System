// @ts-nocheck
/**
 * Express router for user authentication.
 * @module authRouter
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const { validateToken } = require('../../lib/logic_module/check_user');
const getImageHash = require('../../lib/hash/sha_256');
const { checkFileType } = require('../../lib/life_cycle/checkFileType');
const { getFileAttributes } = require('../../lib/life_cycle/FileAttributes');
const { bytesToMB } = require('../../lib/datasource/other');
const { getExifData } = require('../../lib/life_cycle/image_exif');
const { register_file, check_sha256_exists, modify_file_permission, modify_file_info, modify_source_file, get_file_path } = require('../../lib/file_system/file');
const { register_folder, list_file_name, split_folder_info, select_all_owner, get_effective_folder, check_visitor_permission, folder_read, get_folder_psha, del_permission_rwd, add_permission_rwd
  , add_permission_rw, add_permission_r, del_permission_rw, del_permission_r, folder_modify, Remove_Folder,sync_folder,
} = require('../../lib/file_system/folder');
const { getGroupInfo } = require('../../lib/logic_module/group');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const { has, reject } = require('lodash');
const { group } = require('console');
const { error_control } = require('../../lib/life_cycle/error_control');
const { delete_file } = require('../../lib/file_system/file');
const pathModule = require('path');
const axios = require('axios');
const FormData = require('form-data');
const {apiTarget} = require('../../lib/config');

// 配置multer
const storage_demo = multer.diskStorage({
  destination: function (req, file, cb) {
    const UID = req.headers.uid;
    let additionalPath = req.headers.path;
    let flag = req.headers.flag;
    if (additionalPath == undefined) {
      throw new Error('additionalPath is undefined');
    }
    let newPath = `./File_Stream/File_Block/${UID}/${additionalPath}`; // 在UID后面追加新的路径
    fs.mkdirSync(newPath, { recursive: true });
    cb(null, newPath); // 重设文件保存的路径
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 设置文件保存时的文件名
  }
});

const upload = multer({ storage: storage_demo });

router.post('/uploadFile', async (req, res, next) => {

  let hash = '';
  try {
    const UID = req.headers.uid;
    const token = req.headers.token;

    // await validateToken(token, UID);
    const upload = multer({ storage: storage_demo }).single('files');
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }

      //check file type
      let type_isimage = await checkFileType(req.file?.path);
      if (type_isimage) {
        hash = await getImageHash(req.file?.path);
      } else {
        fs.unlink(req.file.path, (err) => {
          if (err) throw err;
        });
        return res.status(401).json({ message: 'File type is not supported.' });
      }
      let originalname = req.file?.originalname;
      let path = req.file?.path;
      //image attributes
      let imageobj = await getFileAttributes(path);
      let exifObj = await getExifData(path);
      let group_id = await getGroupInfo(UID);
      group_id = group_id[0].group_id;
      if (await check_sha256_exists(hash)) {
        let path = await get_file_path(hash);
        paths = path[0].Path;
        let newStr = paths.replace("File_Stream/File_Block/", "");
        return res.status(409).json({ message: 'File already exists.', path: newStr });
      }
      let folder_path = path.split('/');
      folder_path = folder_path.slice(0, folder_path.length - 1).join('/');
      await register_file(hash, originalname, folder_path);
      await modify_file_info(hash, imageobj.format, imageobj.size, imageobj.mode, imageobj.mod_time, imageobj.access_time, imageobj.create_time, imageobj.file_size, imageobj.disk_usage, imageobj.path, UID);
      await modify_file_permission(hash, UID, group_id, permission = 2, Priority = 1);
      await modify_source_file(hash, UID, exifObj.capture_date, exifObj.program_name, exifObj.acquire_date, exifObj.copy_right);
      let path_result = await split_folder_info(path);
      await register_folder(path_result, UID, group_id, permission = 2, Priority = 1);
      return res.status(200).json({ result: 'File uploaded successfully.' });

    });
  } catch (err) {
    // throw err;
    error_control(err, res, req);

  }
});




router.post('/uploadFile_backup_door', upload.single('files'), async (req, res, next) => {

  // let UID = req.headers.uid;
  // let token = req.headers.token;
  sql = '';
  try {
    // await validateToken(token, UID);

    let type_isimage = true;

    if (type_isimage) {
      let hash = await getImageHash(req.file?.path);
    } else {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
      });
      return res.status(401).json({ message: 'File type is not supported.' });
    }


    return res.status(200).json({ req: req.file });
    // size == byte
    //   {
    //     "req": {
    //         "fieldname": "files",
    //         "originalname": "Clash.for.Windows.Setup.0.20.35.exe",
    //         "encoding": "7bit",
    //         "mimetype": "application/x-msdos-program",
    //         "destination": "./File_Stream/File_Block",
    //         "filename": "Clash.for.Windows.Setup.0.20.35.exe",
    //         "path": "File_Stream/File_Block/Clash.for.Windows.Setup.0.20.35.exe",
    //         "size": 87163934
    //     }
    // }

  } catch (err) {
    error_control(err, res, req);

  }
});

router.post('/downloadFile/:filename', async (req, res, next) => {
  try {
    const filename = req.params.filename;
    let UID = req.headers.uid;
    let token = req.headers.token;
    // await validateToken(token, UID);
    let extend_path = req.body.extend_path;
    if (filename == undefined) {
      reject('file is undefined');
    }
    if (extend_path == undefined) {
      extend_path = '';
    }
    const file = path.join('File_Stream', 'File_Block', UID, extend_path, filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        let error = json = { message: 'File not found', "error": err };
        res.status(404).send(error);
      }
    });

  } catch (err) {
    throw err;
    error_control(err, res, req);

  }
});

router.post('/downloadFile_share/:uuid/:filename', async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const filename = req.params.filename;
    const file = path.join(__dirname, '..', 'File_Stream', 'File_Block', uuid, filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        res.status(404).send('File not found');
      } else {
        console.log('File downloaded successfully');
      }
    });
  } catch (err) {
    error_control(err, res, req);

  }
});

router.post('/create_share', async (req, res, next) => {
  const fileDir = path.join(__dirname, 'File_Stream', 'File_Block');
  try {
    const filename = req.body.filename;
    const uuid = req.body.uuid || uuidv4();
    const folderPath = path.join(fileDir, uuid);

    if (!fs.existsSync(folderPath)) {
      // Create new folder with UUID as name
      fs.mkdirSync(folderPath);

      // Copy file to new folder
      const file = path.join(fileDir, filename);
      const newFilePath = path.join(folderPath, filename);
      fs.copyFileSync(file, newFilePath);

    } else {
      // Copy folder to UUID folder
      const sourceFolder = path.join(fileDir, filename);
      const targetFolder = path.join(folderPath, filename);
      fs.copyFileSync(sourceFolder, targetFolder);
    }

    // Get list of files in folder
    const files = fs.readdirSync(folderPath);

    res.send({ uuid, files });
  } catch (err) {
    error_control(err, res, req);

  }
});


router.post('/deleteFile', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let filename = req.body.file_name;
    let extend_path = req.body.path;
    // await validateToken(token, UID);
    if (filename == undefined) {
      return res.status(400).json({ message: 'Filename is undefined.' });
    }
    if (extend_path == undefined) {
      extend_path = '';
    }
    // 对文件名进行编码
    // filename = encodeURIComponent(filename); // 不进行编码
    const file = path.join('File_Stream', 'File_Block', UID, extend_path, filename);
    fs.unlink(file, (err) => {
      if (err) {
        console.error('Error during file deletion:', err);
        res.status(404).send({ message: 'File not found,please chekck path or file name' });
      } else {
        delete_file(filename).then(() => {
          res.send({ message: 'File deleted successfully' });
        }).catch((err) => {
          error_control(err, res, req);
        }
        );
      }
    });
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/listFiles', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let extend_path = req.headers.path;
    if (extend_path == undefined) {
      extend_path = '';
    }
    // await validateToken(token, UID);
    let fileDir = path.join('File_Stream', 'File_Block', UID, extend_path);

    let entries = fs.readdirSync(fileDir);
    let files = entries.filter(entry => {
      let entryPath = path.join(fileDir, entry);
      return fs.statSync(entryPath).isFile();
    });

    res.send(files);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/previewFile/:path/:filename', async (req, res, next) => {
  try {
    let pathParam = req.params.path;
    let redisPath = await redis.get(pathParam);
    let filename = req.params.filename;

    const file = path.resolve(redisPath, filename);
    res.sendFile(file);
  } catch (err) {
    // throw err;
    error_control(err, res, req);
  }
});

router.get('/listfolder', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    // await validateToken(token, UID);

    let result = await get_effective_folder(UID);
    result = result.map(folder => {
      let uuid = uuidv4();
      redis.set(uuid, folder.Path);
      folder.preview_path = req.protocol + '://' + req.get('host') + `/api/file` + `/previewFile/` + uuid + `/` + `${folder.preview_path}`;
      redis.expire(uuid, 60 * 60 * 24);
      return folder;
    });

    return res.status(200).json({ "result": result });
  } catch (err) {
    // error_control(err, res, req);
    throw err;
  }
});


router.get('/watchfile/*/:filename', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.params[0];  // 使用通配符匹配的路径
    let filename = req.params.filename;
    console.log("path:" + path + `\n`);
    console.log("filename" + filename);
    // await validateToken(token, UID);
    let permission = await check_visitor_permission(path, UID);
    let permission_flag = await folder_read(permission);
    if (permission_flag == false) {
      res = res.status(401).json({ message: 'Permission denied.' });
    }
    let file = pathModule.resolve(path, filename);
    res.sendFile(file);
    // return res.status(200).json({ "result": "file" });
  } catch (err) {
    // throw err;
    error_control(err, res, req);
  }
});

router.get('/watchfolders', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.headers.path;
    let permission_flag = false;
    // await validateToken(token, UID);
    file_name = await list_file_name(path);
    let permission = await check_visitor_permission(path, UID);
    permission_flag = await folder_read(permission);

    if (permission_flag == false) {
      return res.status(401).json({ message: 'Permission denied.' });
    }
    file_name = file_name.map(file => {
      file = req.protocol + '://' + req.get('host') + `/api/file` + `/watchfile` + `/${path}` + `/${file}`;
      return file;
    }
    );
    return res.status(200).json({ "result": file_name });

  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/get_folder_info', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    // await validateToken(token, UID);
    sha256 = await get_folder_psha(path);
    sha256 = sha256[0].sha256;
    let sql = `select * from documents_folder where sha256=?`;
    let sql_owner = `select UID from Folder_Permission  where sha256=?`;
    let result = await query(sql, sha256);
    let owner_id = await query(sql_owner, sha256);
    owner_id = owner_id[0].UID + "";
    console.log(owner_id);
    result[0].owner_id = owner_id;
    return res.status(200).json({ "result": result });
  }
  catch (err) {
    error_control(err, res, req);
  }
});

router.post('/modify_folder_info', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    // ```````````file attributes``````````````````
    let title = req.body.title;
    let subject = req.body.subject;
    let classification = req.body.classification;
    let label = req.body.label;
    let remarks = req.body.remarks;
    // await validateToken(token, UID);
    let sha256 = await get_folder_psha(path);
    sha256 = sha256[0].sha256;
    let sql = `
    update documents_folder set title=?,subject=?,classification=?,label=?,remarks=? where sha256=?;
    `;
    let result = await query(sql, [title, subject, classification, label, remarks, sha256]);
    return res.status(200).json({ "result": result });
  }
  catch (err) {
    error_control(err, res, req);
  }
}
);


router.post('/sync_folder', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    // await validateToken(token, UID);

    if (global.syncid !== 0) {
      return res.status(409).json({ message: 'Another task is running' });
    }
    else {
      // Set flag
      global.syncid = UID;
    }

    // Respond to the request immediately
    res.status(200).json({ message: 'Task has been started' });

    // Start the background task
    process.nextTick(async () => {
      try {
        // Sync folder
        let server_path = pathModule.basename(path);
        await sync_folder(path,server_path);

        // Reset flag
        global.syncid = 0;

      } catch (err) {
        // Handle error
        // Reset flag
        global.syncid = 0;
      }
    });
  } catch (err) {
    error_control(err, res, req);
  }
});


router.post('/watchfolder_permission', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    // await validateToken(token, UID);
    let sha256 = await get_folder_psha(path);
    sha256 = sha256[0].sha256;
    let permission = await select_all_owner(sha256);
    return res.status(200).json({ "result": permission });

  }
  catch (err) {
    error_control(err, res, req);
  }
}
);

router.post('/modify_folder_permission', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    let flag = req.body.flag; // add delete
    let flag_type = req.body.flag_type; // user ? group ?
    let ID_target = req.body.ID_target;
    let permission = req.body.permission; // r rw rwd
    // await validateToken(token, UID);
    let sha256 = await get_folder_psha(path);
    sha256 = sha256[0].sha256;
    if (flag_type == "user" || flag_type == "group") {
    }
    else {
      return res.status(401).json({ "message": "flag_type error." });
    }

    let modify_permission = await check_visitor_permission(path, UID);

    modify_permission = modify_permission.user_rwd + modify_permission.group_rwd;
    //must have one of modify permission
    if (modify_permission == false) {
      return res.status(401).json({ "message": "Permission denied." });
    }
    if (permission == "r") {
      if (flag == "add") {
        await add_permission_r(ID_target, flag_type, sha256);
      }
      else if (flag == "delete") {
        await del_permission_r(ID_target, flag_type, sha256);
      }
    }
    else if (permission == "rw") {
      if (flag == "add") {
        await add_permission_rw(ID_target, flag_type, sha256)
      }
      else if (flag == "delete") {
        await del_permission_rw(ID_target, flag_type, sha256);
      }
    }
    else if (permission == "rwd") {
      if (flag == "add") {
        await add_permission_rwd(ID_target, flag_type, sha256);
      }
      else if (flag == "delete") {
        await del_permission_rwd(ID_target, flag_type, sha256);
      }
    }
    let result = "OK";
    return res.status(200).json({ "result": result });
  }
  catch (err) {
    error_control(err, res, req);
  }
}
);

router.post('/delete_folder', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let path = req.body.path;
    console.log(path);

    // await validateToken(token, UID);

    // check permission

    let permission = await check_visitor_permission(path, UID);
    let del_permission = permission.user_rwd + permission.group_rwd;
    if (del_permission == false) {
      return res.status(401).json({ "message": "Permission denied." });
    }
    //do
    await Remove_Folder(path);
    return res.status(200).json({ "result": "OK" });
  }
  catch (err) {
    error_control(err, res, req);
    // throw err;
  }
}
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'File_Stream/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload3 = multer({ storage: storage });

router.post('/offical_resnet', upload3.single('image'), async (req, res, next) => {
  try {
    const form = new FormData();
    const fileStream = fs.createReadStream(req.file.path);
    form.append('image', fileStream);

    const response = await axios.post(apiTarget+ '/offical_resnet', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});


router.post('/customized_resnet', upload3.single('image'), async (req, res, next) => {
  try {
    const form = new FormData();
    const fileStream = fs.createReadStream(req.file.path);
    form.append('image', fileStream);
    form.append('label_names', req.body.label_names);
    form.append('model_path', req.body.model_path);

    const response = await axios.post(apiTarget+'/customized_resnet', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/clip_predicate', upload3.single('image'), async (req, res, next) => {
  try {
    const form = new FormData();
    const fileStream = fs.createReadStream(req.file.path);
    form.append('image', fileStream);
    form.append('text_dictionary', req.body.text_dictionary);

    const response = await axios.post(apiTarget+'/clip_predicate', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/task_info/:id', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget + `/task-info/${req.params.id}`);

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/load_model/:model_name', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget+`/load_model/${req.params.model_name}`);
    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/list_models', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget+'/list_models');
    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/store_model', upload3.single('file'), async (req, res, next) => {
  try {
    const form = new FormData();
    const fileStream = fs.createReadStream(req.file.path);
    form.append('file', fileStream);

    const response = await axios.post(apiTarget+'/store_model', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

// router.post('/del_dir', async (req, res, next) => {
//   try {

//   } catch (err) {
//     error_control(err, res, req);
//   }
// });

router.post('/del_dir', async (req, res, next) => {
  try {
    const response = await axios.post(apiTarget+'/del_dir', {
      dir: req.body.dir
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/list_dir', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget+'/list_dir');

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/test_models', async (req, res, next) => {
  try {
    const response = await axios.post(apiTarget+'/test_models', {
      data_set_path: req.body.data_set_path,
      model_path: req.body.model_path,
      train_rate: req.body.train_rate,
      test_rate: req.body.test_rate,
      resize: req.body.resize,
      center_crop: req.body.center_crop,
      mean: req.body.mean,
      std: req.body.std
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/train_models', async (req, res, next) => {
  try {
    const response = await axios.post(apiTarget+'/train_models', {
      data_set_path: req.body.data_set_path,
      model_path: req.body.model_path,
      train_rate: req.body.train_rate,
      test_rate: req.body.test_rate,
      lr: req.body.lr,
      step_size: req.body.step_size,
      gamma: req.body.gamma,
      epochs: req.body.epochs
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/cancel_models', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget+'/cancel_models');

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.post('/automatic_loader', async (req, res, next) => {
  try {
    const form = new FormData();
    form.append('folder_chain', req.body.folder_chain);

    const response = await axios.post(apiTarget+'/automatic_loader', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});

router.get('/clear_data', async (req, res, next) => {
  try {
    // 改成post
  } catch (err) {
    error_control(err, res, req);
  }
});




router.get('/list_dir', async (req, res, next) => {
  try {
    const response = await axios.get(apiTarget+'/list_dir');

    res.json(response.data);
  } catch (err) {
    error_control(err, res, req);
  }
});
module.exports = router;
