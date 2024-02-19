const validateToken = require('../../lib/logic_module/check_user');
const { createPermissionGroup,
    setDependency,
    getPermissionGroup,
    deletePermissionGroup, modifyPermissionGroup } = require('../../lib/module/permission_control_dbio/permission_group');
const { createPermissionUser,
    updateUser,
    addUserToGroup,
    removeUserFromGroup ,
    appendPermissionUser,
    select_user,
    removeUser,
    checkPermissionUser
} = require('../../lib/module/permission_control_dbio/permission_user');
const express = require('express');
const router = express.Router();
const { error_control } = require('../../lib/life_cycle/error_control');

router.post('/createPermissionGroup', async (req, res) => {
    const { name, permissions, priority } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID).catch((err) => {
            error_control(err, res, req);
        });
        //检查permission是否为json格式
        let permission = JSON.parse(permissions);

        await createPermissionGroup(name, permission, priority);
        res.status(200).send(JSON.stringify({ message: 'Permission group created successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});
router.post('/modifyPermissionGroup', async (req, res) => {
    const { name, permissions, priority } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);
        //检查permission是否为json格式
        let permission = JSON.parse(permissions);
        await modifyPermissionGroup(name, permission, priority);
        res.status(200).send(JSON.stringify({ message: 'Permission group modified successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
}
);
router.post('/setDependency', async (req, res) => {
    const { child, parent } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);
        await setDependency(child, parent);
        res.status(200).send(JSON.stringify({ message: 'Dependency set successfully'}));
    } catch (err) {
        error_control(err, res, req);

    }
});
router.get('/getPermissionGroup', async (req, res) => {
    const { name,mode } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);
        let group_info = await getPermissionGroup(name,mode);
        res.status(200).send(group_info);
    } catch (err) {
        error_control(err, res, req);
    }
}
);

router.post('/deletePermissionGroup', async (req, res) => {
    const { name } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);
        await deletePermissionGroup(name);
        res.status(200).send(JSON.stringify({ message: 'Permission group deleted successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/addPermission', async (req, res) => {
    const { name, roles, flag } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);

        const role = JSON.parse(roles.replace(/'/g, '"'));
        await createPermissionUser(name, role, flag);
        res.status(200).send(JSON.stringify({ message: 'Permission user added successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/updatePermission', async (req, res) => {
    const { name, roles, flag } = req.body;
    const token = req.headers.token;
    const UID = req.headers.uid;
    try {
        await validateToken(token, UID);
        const role = JSON.parse(roles.replace(/'/g, '"'));
        await updateUser(name, role, flag);
        res.status(200).send(JSON.stringify({ message: 'Permission user updated successfully'}));
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/appendPermission', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { name, roles } = req.body;

    try {
        await validateToken(token, UID);
        const role = JSON.parse(roles.replace(/'/g, '"'));
        await appendPermissionUser(name, role);
        res.status(200).send(JSON.stringify({ message: 'Permission user appended successfully'}));
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/addUserToGroup', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { user, group } = req.body;

    try {
        await validateToken(token, UID);
        await addUserToGroup(user, group);
        res.status(200).send(JSON.stringify({ message: 'User added to group successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/removeUserFromGroup', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { user, group } = req.body;

    try {
        await validateToken(token, UID);
        await removeUserFromGroup(user, group);
        return res.status(200).send(JSON.stringify({ message: 'User removed from group successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});

router.get('/select_user', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { name,mode } = req.body;
    try {
        await validateToken(token, UID);
        let user_info = await select_user(name,mode);
        res.status(200).send(user_info);
    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/removeUser', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { name } = req.body;
    try {
        await validateToken(token, UID);
        await removeUser(name);
        res.status(200).send(JSON.stringify({ message: 'User removed successfully'}));
    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/checkPermissionUser', async (req, res) => {
    const token = req.headers.token;
    const UID = req.headers.uid;
    const { userName, permission } = req.body;
    try {
        // await validateToken(token, UID);
        let result = await checkPermissionUser(userName, permission);
        res.status(200).send(JSON.stringify({ result: result }));
    } catch (err) {
        error_control(err, res, req);
    }
});

module.exports = router;
