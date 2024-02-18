const validateToken = require('../../lib/logic_module/check_user');
const { createPermissionGroup,
    setDependency,
    getPermissionGroup,
    deletePermissionGroup, modifyPermissionGroup } = require('../../lib/module/permission_control_dbio/permission_group');
const { createPermissionUser,
    updateUser,
    addUserToGroup,
    removeUserFromGroup ,
    appendPermissionUser} = require('../../lib/module/permission_control_dbio/permission_user');
const express = require('express');
const router = express.Router();

router.post('/createPermissionGroup', async (req, res) => {
    const { name, permissions, priority } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        //检查permission是否为json格式
        console.log(permissions);
        let permission = JSON.parse(permissions);

        await createPermissionGroup(name, permission, priority);
        res.status(200).send('Permission group created successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});
router.post('/modifyPermissionGroup', async (req, res) => {
    const { name, permissions, priority } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        //检查permission是否为json格式
        let permission = JSON.parse(permissions);
        await modifyPermissionGroup(name, permission, priority);
        res.status(200).send('Permission group modified successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
}
);
router.post('/setDependency', async (req, res) => {
    const { child, parent } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        await setDependency(child, parent);
        res.status(200).send('Dependency set successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});
router.get('/getPermissionGroup', async (req, res) => {
    const { name } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        let group_info = await getPermissionGroup(name);
        res.status(200).send(group_info);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
}
);

router.post('/deletePermissionGroup', async (req, res) => {
    const { name } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        await deletePermissionGroup(name);
        res.status(200).send('Permission group deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.post('/addPermission', async (req, res) => {
    const { name, roles, flag } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);

        const role = JSON.parse(roles.replace(/'/g, '"'));
        await createPermissionUser(name, role, flag);
        res.status(200).send('Permission user created successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.post('/updatePermission', async (req, res) => {
    const { name, roles, flag } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        const role = JSON.parse(roles.replace(/'/g, '"'));
        await updateUser(name, role, flag);
        res.status(200).send('Permission user updated successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.post('/appendPermission', async (req, res) => {
    const { name, roles } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        // await validateToken(UID, token);
        const role = JSON.parse(roles.replace(/'/g, '"'));
        await appendPermissionUser(name, role);
        res.status(200).send('Permission user appended successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.post('/addUserToGroup', async (req, res) => {
    const { user, group } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        await validateToken(UID, token);
        await addUserToGroup(user, group);
        res.status(200).send('User added to group successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.post('/removeUserFromGroup', async (req, res) => {
    const { user, group } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        await validateToken(UID, token);
        await removeUserFromGroup(user, group);
        res.status(200).send('User removed from group successfully');
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

module.exports = router;
