/* useage = "触发器" */
DELIMITER //

CREATE TRIGGER user_insert AFTER INSERT ON users
FOR EACH ROW
BEGIN
  INSERT INTO auth_info (UID) VALUES (NEW.UID);
  INSERT INTO banned_users (UID) VALUES (NEW.UID);
  INSERT INTO user_access_info (UID) VALUES (NEW.UID);
END //

DELIMITER ;

/* end */


/* update */

DELIMITER //

DROP TRIGGER IF EXISTS user_insert //

CREATE TRIGGER user_insert AFTER INSERT ON users
FOR EACH ROW
BEGIN
  INSERT INTO auth_info (UID) VALUES (NEW.UID);
  INSERT INTO banned_users (UID) VALUES (NEW.UID);
  INSERT INTO user_access_info (UID) VALUES (NEW.UID);
  INSERT INTO user_info (UID) VALUES (NEW.UID);
END //

DELIMITER ;
