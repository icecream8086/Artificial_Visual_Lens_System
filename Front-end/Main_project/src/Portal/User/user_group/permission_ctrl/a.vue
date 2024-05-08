<template>
    <el-form @submit.prevent="submitForm">
        <p>创建权限</p>
        <el-row>
            <el-col :span="6"> <el-form-item label="名称">
                    <el-input v-model="name" placeholder="name"></el-input>
                </el-form-item></el-col>
            <el-col :span="6"> <el-form-item label="权限">
                    <el-input v-model="permissions" placeholder="permissions"></el-input>
                </el-form-item></el-col>
            <el-col :span="6"> <el-form-item label="优先级">
                    <el-input v-model="priority" placeholder="priority"></el-input>
                </el-form-item></el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="4"> <el-form-item>
                    <el-button type="primary" native-type="submit">提交</el-button>
                </el-form-item></el-col>
        </el-row>
    </el-form>
</template>
<script>
import axios from 'axios';
import { ElNotification } from 'element-plus';
// @ts-ignore
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
const localStorageJSON = new LocalStorageJSON();
let tokens = localStorageJSON.read('token');
let UID = localStorageJSON.read('UID');
export default {
    name: "abaacCc",
    data() {
        return {
            name: '',
            permissions: '',
            priority: ''
        }
    },
    methods: {
        submitForm() {
            axios({
                method: 'post',
                url: '/api' + '/api/permission/createPermissionGroup',
                headers: {
                    'uid': UID,
                    'token': tokens,
                },
                data: {
                    name: this.name,
                    permissions: JSON.parse(this.permissions),
                    priority: this.priority
                }
            }).then(response => {
                ElNotification({
                    title: '成功',
                    message: '添加成功' + response.data.message,
                    type: 'success'
                });
            }).catch(error => {
                // 处理错误
                ElNotification({
                    title: '失败',
                    message: '添加失败，检查日志',
                    type: 'error'
                });
                console.error(error);
            });
        }
    }
};
</script>
<!-- -->