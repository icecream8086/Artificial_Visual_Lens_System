/* useage = "触发器" */
CREATE TRIGGER user_insert AFTER INSERT ON users
FOR EACH ROW
BEGIN
  INSERT INTO auth_info (UID) VALUES (NEW.UID);
  INSERT INTO banned_users (UID) VALUES (NEW.UID);
END;
/* end */