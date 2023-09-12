// @ts-nocheck
const query=require('../datasource/mysql_connection_promise');

function validate_authority_admin(UID) {
    return new Promise((resolve, reject) => {
      let sql='';
      query(sql)
        .then((reply) => {
          if (reply !== UID) {
            reject(new Error('Verify authority fail .'));
          } else {
            resolve();
          }
        })
        .catch(() => {
          reject(new Error('My Sql error.'));
        });
    });
  }

  function validate_authority_root(UID) {
    return new Promise((resolve, reject) => {
      let sql='';
      query(sql)
        .then((reply) => {
          if (reply !== UID) {
            reject(new Error('Verify authority fail .'));
          } else {
            resolve();
          }
        })
        .catch(() => {
            reject(new Error('My Sql error.'));
        });
    });
  }

module.exports=validate_authority_admin,validate_authority_root;