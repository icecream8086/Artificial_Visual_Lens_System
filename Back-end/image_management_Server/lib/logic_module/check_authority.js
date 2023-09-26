// @ts-nocheck
const query = require('../datasource/mysql_connection_promise');

async function validate_authority_Read(UID) {
  let sql = 'select READ_A from user_group where group_id=(select group_id from user_access_info where UID=?)';
  return new Promise((resolve, reject) => {
    query(sql, [UID])
      .then((reply) => {
        let bool = reply[0].READ_A;
        if (bool !== 1) {
          reject(new Error('Verify authority READ_ACCESS fail .'));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('My Sql error.' + "\n  " + error + "\n"));
      });
  }
  );
}


/**
 * Validates the authority of a user to write to the database.
 * @async
 * @function validate_authority_write
 * @param {string} UID - The user ID to validate.
 * @returns {Promise<void>} - A Promise that resolves if the user has write access, and rejects with an error otherwise.
 * @throws {Error} - Throws an error if the UID is undefined or if the user does not have write access.
 */
async function validate_authority_write(UID) {
  let sql = 'select WRITE_A from user_group where group_id=(select group_id from user_access_info where UID=?)';
  return new Promise((resolve, reject) => {
    query(sql, [UID])
      .then((reply) => {
        let bool = reply[0].WRITE_A;
        console.log(bool);
        if (bool == undefined) {
          reject(new Error('undefined uid'))
        }
        if (bool !== 1) {
          reject(new Error('Verify authority  WRITE_ACCESS fail .'));
        }
        else {
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('My Sql error.' + "\n  " + error + "\n"));
      });
  }
  );
}


async function validate_authority_modify(UID) {
  let sql = 'select EXECUTE_A from user_group where group_id=(select group_id from user_access_info where UID=?)';
  return new Promise((resolve, reject) => {
    query(sql, [UID])
      .then((reply) => {
        let bool = reply[0].EXECUTE_A;
        if (bool !== 1) {
          reject(new Error('Verify authority EXECUTE_ACCESS fail .'));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('My Sql error.' + "\n  " + error + "\n"));
      });
  }
  );
}

async function validate_authority_admin(UID) {
  let sql = 'select BASIC_CONTROL_A from user_group where group_id=(select group_id from user_access_info where UID=?)';
  return new Promise((resolve, reject) => {
    query(sql, [UID])
      .then((reply) => {
        let bool = reply[0].BASIC_CONTROL_A;
        if (bool !== 1) {
          reject(new Error('Verify authority BASIC_CONTROL_ACCESS fail .'));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('My Sql error.' + "\n  " + error + "\n"));
      });
  }
  );
}


async function validate_authority_root(UID) {
  let sql = 'select Full_Control_A from user_group where group_id=(select group_id from user_access_info where UID=?)';
  return new Promise((resolve, reject) => {
    query(sql, [UID])
      .then((reply) => {
        let bool = reply[0].Full_Control_A;
        if (bool !== 1) {
          reject(new Error('Verify authority FULL_CONTROL_ACCESS fail .'));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('My Sql error.' + "\n  " + error + "\n"));
      });
  }
  );
}

async function validate_authority_IO(UID) {
  try {
    await validate_authority_Read(UID);
    await validate_authority_write(UID);
  } catch (error) {
    throw new Error(error);
  }
}

async function validate_authority_user(UID){
  try {
    await validate_authority_Read(UID);
    await validate_authority_write(UID);
    await validate_authority_modify(UID);
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = { 
  validate_authority_admin,
 validate_authority_root,
 validate_authority_modify,
 validate_authority_write,
 validate_authority_Read,
 validate_authority_user,
 validate_authority_IO };