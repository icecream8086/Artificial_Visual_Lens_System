<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <!-- Header -->
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-8">{{ folderName }}</span>
                    </template>
                </el-page-header>
            </el-header>
            <el-main>
                <!-- Main -->
                <div>
                    <!-- 相册内容 -->
                    <el-scrollbar :height="500">
                        <el-row>
                            <el-col :span="4" v-for="src in srcList" :key="src">
                                <div class="item_image_box">
                                    <image_preview_large :image_list="src"></image_preview_large>
                                </div>
                            </el-col>
                        </el-row>
                    </el-scrollbar>
                </div>
            </el-main>
            <!-- <el-footer style="    border: 1px solid #00ffd5;"> -->
            <el-footer>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="6"><el-button @click="show_dialog_folder_attribute">文件属性</el-button></el-col>
                    <el-col :span="6"><el-button @click="show_permission_dialog">权限属性</el-button></el-col>
                    <el-col :span="6"><el-button @click="sync_folder">同步数据集</el-button></el-col>
                    <el-col :span="6"><el-button @click="delete_folder">删除文件夹</el-button></el-col>
                </el-row>
                <el-divider></el-divider>
                <div>
                    <folder_attribute_dialog :path="path" :visitables="folder_attribute_dialog_visible">
                    </folder_attribute_dialog>
                    <permission_dialog :path="path" :visitables="show_permission_visible"></permission_dialog>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios';
import image_preview_large from './sub_components/image_preview_large.vue';
import folder_attribute_dialog from './folders/folder_attribute_dialog.vue';
import permission_dialog from './permission_dialog/permission_dialog.vue';
import { ElNotification } from 'element-plus';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');

import qs from 'qs';
export default {
    name: 'watchFolder',
    created() {
        let message = this.$route.params.message;
        console.log(message);
        this.path = message;
    },
    data() {
        return {
            names: "data set name",
            path: "path",
            srcList: [
                '1',
            ],
            limits: 255,
            folderName: "",
            folder_attribute_dialog_visible: false,
            show_permission_visible: false,
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        show_dialog_folder_attribute() {
            this.folder_attribute_dialog_visible = this.folder_attribute_dialog_visible ? false : true;
        },
        show_permission_dialog() {
            this.show_permission_visible = this.show_permission_visible ? false : true;
        }, errordialog() {
            ElNotification({
                title: 'Error',
                message: '您似乎没有权限浏览此文件夹',
                type: 'error',
            })
        },
        sync_fail_dialog(err) {
            ElNotification({
                title: 'Error',
                message: '失败' + err,
                type: 'error',
            })
        },
        sync_success_dialog() {
            ElNotification({
                title: 'Success',
                message: '同步成功,任务已提交',
                type: 'success',
            })
        },
        sync_folder() {
            const localStorageJSON = new LocalStorageJSON();
            let tokens = localStorageJSON.read('token');
            let UID = localStorageJSON.read('UID');
            const qs = require('qs');
            axios({
                method: 'post',
                url: '/api' + '/api/file/sync_folder',
                headers: { uid: UID, token: tokens },
                data: qs.stringify({ path: this.path })
            })
                .then(() => {
                    this.sync_success_dialog();
                }).catch(err => {
                    if (err.response && err.response.status == 401) {
                        //error dialog
                        this.sync_fail_dialog(err.message+ '未授权，请检查您的权限或token是否正确');
                    }
                    else if (err.response && err.response.status == 409) {
                        //error dialog
                        this.sync_fail_dialog('同步失败,请等待上一个任务完成');
                    }
                    else {
                        console.log(err);
                    }
                });
        },
        delete_folder() {
            axios.post('/api' + '/api/file/delete_folder',
                qs.stringify({ path: this.path }), // 使用 qs 库将数据转换为 x-www-form-urlencoded 格式
                {
                    headers: {
                        uid: "3",
                        token: "1"
                    }
                }
            )
                .then(() => {
                    ElNotification({
                        title: 'Success',
                        message: '删除成功',
                        type: 'success',
                    })
                }).catch(err => {
                    if (err.response.status == 401) {
                        //error dialog
                        this.sync_fail_dialog(err.message);
                    }
                    else {
                        this.sync_fail_dialog(err);
                        console.log(err);
                    }
                });
        }

    },
    mounted() {
        const localStorageJSON = new LocalStorageJSON();
            let tokens = localStorageJSON.read('token');
            let UID = localStorageJSON.read('UID');
        axios.get('/api' + '/api/file/watchfolders', { headers: { UID: UID, token: tokens, path: this.path } })
            .then(res => {
                this.srcList = res.data.result;
                this.srcList = res.data.result.map(item => [item]);

            }).catch(err => {
                if (err.response.status == 401) {
                    //error dialog
                    this.errordialog();
                }
            });

        this.folderName = this.$route.params.folderNames;
    },
    props: {
        folderNames: {
            type: String,
            required: true,
            default: "folderName"
        },
    },
    components: {
        image_preview_large,
        folder_attribute_dialog,
        permission_dialog
    },
}
</script>

<style scoped>
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}

.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}
</style>