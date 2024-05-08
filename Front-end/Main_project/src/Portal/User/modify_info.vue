<template>
    <el-page-header @back="goBack">
        <template #content>
            <!-- <span class="text-large font-600 mr-8">{{ folderName }}</span> -->
        </template>
    </el-page-header>
    <div>
        <el-row>
            <!-- 第一列 -->
            <el-col :span="24 / 3">
                <div class="grid-content ep-bg-purple"></div>
                <el-row></el-row>
                <el-row></el-row>
                <el-row>
                    <div>
                        <div>
                            <input type="file" @change="handleFileUpload" ref="fileInput" style="display: none" />
                            <p>
                                <el-avatar :size="300" :src="avatarURL" @click="triggerFileInput"></el-avatar>
                            </p>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </el-row>
                <p>名字</p>
                <el-row>
                    <el-input v-model="name" style="width: 220px" :placeholder=this.last_name />
                </el-row>

            </el-col>

            <!-- 第二列 -->
            <el-col :span="24 / 3">
                <div>
                    <p>id</p>
                    <el-row>
                        <el-input disabled style="width: 220px" :placeholder=this.objs.id />
                    </el-row>


                    <p>classID</p>
                    <el-row>
                        <el-input disabled style="width: 220px" :placeholder=this.objs.classId />
                    </el-row>
                    <!-- <div class="grid-content ep-bg-purple-light"></div> -->
                    <p>邮箱</p>
                    <el-row>
                        <el-input v-model="email" style="width: 220px" :placeholder=this.last_email />
                    </el-row>
                    <p>号码</p>
                    <el-row>
                        <el-input v-model="phone" style="width: 220px" :placeholder=this.last_phone />
                    </el-row>

                    <p>年龄</p>
                    <el-row>
                        <el-input v-model="age" style="width: 220px" />
                    </el-row>

                    <p>新版</p>
                    <el-row>
                        <el-input  v-model="gender" style="width: 220px" :placeholder=this.last_email />
                    </el-row>

                </div>
            </el-col>

            <!-- 第三列 -->
            <el-col :span="24 / 3">
                <!-- <div class="grid-content ep-bg-purple"></div> -->

                <div>


                    <p>role</p>
                    <el-row>
                        <el-input disabled style="width: 220px" :placeholder=this.objs.role />
                    </el-row>


                    <p>联系方式</p>
                    <el-row>
                        <el-input style="width: 220px" :placeholder=this.last_email />
                    </el-row>

                    <p>组织</p>
                    <el-row>
                        <el-input v-model="classname" style="width: 220px" :placeholder=this.last_classname />
                    </el-row>

                    个人签名
                    <el-row>
                        <el-input style="width: 220px" v-model="signature" :autosize="{ minRows: 4, maxRows: 4 }"
                            type="textarea" :placeholder=this.last_signature /> </el-row>
                </div>
            </el-col>

        </el-row>
    </div>
    <p>
        <el-row>
            <el-col :span="16"></el-col>
            <el-col :span="8">
                <div><el-button size="large" type="primary" plain @click="update_query">更新表单</el-button></div>
            </el-col>
        </el-row>

    </p>
</template>
<script>
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
import axios from 'axios';
const localStorageJSON = new LocalStorageJSON();
export default {
    name: "ModifyInfo",
    data() {
        return {
            avatarURL: '',
            name: '',
            email: '',
            phone: '',
            signature: '',
            age: '',
            gender: '',
            classname: '',
            selectedFile: null,
            last_name: '',
            last_email: '',
            last_phone: '',
            last_signature: '',
            last_classname: '',
            objs: {}

        }
    },
    methods: {
        uploadAvatar() {
            let formData = new FormData();
            formData.append('file', this.selectedFile);
            formData.append('name', 'admin');

            axios.post('/api' + '/api/user/modify_Avatar', formData, {
                headers: {
                    'token': localStorageJSON.read('token'),
                    'content-type': 'multipart/form-data'
                },
                "UID": localStorageJSON.read('UID')
            })
                .then(() => {
                    this.$message({
                        showClose: true,
                        center: true,
                        message: '上传成功',
                        type: 'success'
                    });
                    this.get_avatar();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
            this.uploadAvatar();
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        loadAvatar() {
            this.avatarURL = localStorage.getItem("avatarUrl");
            let data = localStorage.getItem("basic_info");
            let basic_info = JSON.parse(data);
            this.username = basic_info.username;

        },
        goBack() {
            this.$router.go(-1);
        },
        get_query() {
            //await info access
            axios.get('/api' + '/api/userinfo', {
                headers: {
                    'Authorization': localStorageJSON.read('token')
                }
            })
                .then((response) => {
                    // [
                    //     {
                    //         "id": 2, //n
                    //         "username": "teach01",//n
                    //         "email": "1296456522@qq.com", 
                    //         "phone": "13888888883", 
                    //         "avatar": null,
                    //         "signature": "我是老师", 
                    //         "classId": 1,
                    //         "className": "", 
                    //         "role": "老师"
                    //     }
                    // ]
                    let result = response.data[0];
                    this.objs = result;
                    this.last_name = result.username;
                    this.last_email = result.email;
                    this.last_phone = result.phone;
                    this.last_signature = result.signature;
                    this.last_classname = result.className;

                })
                .catch((error) => {
                    console.log(error);
                });


        },
        update_query() {
            axios.post('/api'+'/api/user/modify_user_info', {
                age: 12,
                gender: 123,
                address: this.address,
                phone_number: this.phone,
                nickname: this.name,
                UID: localStorageJSON.read('UID')
            }, {
                headers: {
                    'UID': localStorageJSON.read('UID'),
                    'token': localStorageJSON.read('token'),
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.loadAvatar();
        this.get_query();
    },

}
</script>

<style>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.red-border-debugger {
    /* debug red border css */
    border: 2px solid red;
}
</style>
