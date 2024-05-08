<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-8">{{ folderName }}</span>
        </template>
    </el-page-header>
    <el-row>
        <el-col :span="24" style="height: 320px;">
            <div>
                <!-- 启动按钮区域 -->
                <el-row>
                    <el-col :span="12" style="height: 200px">
                        <div>
                            <!-- 数据集选择区域 -->

                            <!-- 可用文件夹状态 | 已选择的文件夹状态 -->
                            <div style="">
                                <el-row>
                                    <el-col :span=2></el-col>
                                    <el-col :span=8>
                                        <div>
                                            <p>已同步数据源</p>
                                            <el-scrollbar height="240px">
                                                <p v-for="w in src_folders_srcList" :key="w">
                                                    <folderkard :_file_count=w.file_count :_names=w.name :_size=w.size>
                                                    </folderkard>
                                                </p>
                                            </el-scrollbar>
                                        </div>
                                    </el-col>
                                    <el-col :span=2></el-col>
                                    <el-col :span=2></el-col>
                                    <el-col :span=8>
                                        <div>
                                            <p>可用数据集</p>
                                            <el-scrollbar height="240px">
                                                <p v-for="w in src_dataset_srcList" :key="w">
                                                    <folderkard :_file_count=w.file_count :_names=w.name :_size=w.size>
                                                    </folderkard>
                                                </p>
                                            </el-scrollbar>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div>
                                <!-- 添加数据集按钮弹窗 -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        训练按钮区域
                        在此之前确认数据集已经选择
                        <div>
                            <el-row>
                                <el-col :span="8"></el-col>
                                <el-col :span="4">
                                    <el-button type="primary" plain @click="train">训练</el-button>
                                </el-col>
                                <el-col :span="4">
                                    <el-button type="primary" plain @click="tests">测试</el-button>
                                </el-col>
                                <test_model_dialog :visitables="test_model_dialog_visible"></test_model_dialog>
                                <el-col :span="8"></el-col>
                                <el-col :span="8"></el-col>
                                <el-col :span="8">
                                    <p>结果码</p>
                                </el-col>
                                <el-col :span="8"></el-col>

                                <el-col :span="8">
                                    <div style="border: 1px solid #00ffd5;">{{ result_code }}</div>
                                </el-col>
                                <el-col :span="8">
                                    <p>请保存好结果码，丢失了结果码将永远失去查找功能</p>
                                </el-col>

                            </el-row>
                        </div>


                    </el-col>
                    <el-col :span="6">
                        查询模型训练状态(弹窗)
                        <div style="width: fit-content;height: fit-content;">
                            <div>
                                <el-row>
                                    <el-col :span="18"><el-input v-model="pin_code"></el-input></el-col>
                                    <el-col :span="6"><el-button type="primary" plain
                                            @click="get_train_info">查询</el-button></el-col>
                                </el-row>
                            </div>
                            <!-- 控制面板主面板 -->
                            <div>
                                <el-row>
                                    <el-col :span="8"><el-button
                                            @click="request_effective_data_zone">列举有效数据集</el-button></el-col>
                                    <el-col :span="8"><el-button
                                            @click="request_effective_data_set">列举当前数据集</el-button></el-col>
                                    <el-col :span="8"><el-button @click="automatic_loader" type="primary"
                                            plain>确认选择数据集</el-button></el-col>

                                    <el-col :span="8"><el-button @click="clear_data_zone" type="primary"
                                            plain>清除数据源&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></el-col>
                                    <el-col :span="8"></el-col>
                                    <el-col :span="8"><el-button @click="clear_data_set" type="primary"
                                            plain>清除数据集&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></el-col>

                                </el-row>
                            </div>
                            <train_model_dialog_info :visitables="train_model_dialog_info_visible"
                                :message="train_result">
                            </train_model_dialog_info>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="8">
            <p></p>
            <el-scrollbar height="320px" style="width: 480px">
                <p>装载数据集</p>
                <div style="width: fit-content;height: fit-content;">

                    <DataTransfer :data="myData" v-model="selectedData" @update:modelValue="selectedData = $event">
                    </DataTransfer>

                </div>
            </el-scrollbar>
        </el-col>
        <el-col :span="8"> <el-scrollbar height="320px">
                <div>
                    <!-- 数据集处理方案 -->
                    <el-row>
                        <el-col :span="4"></el-col>
                        <el-col :span="16">
                            <div>
                                <el-row>
                                    <div>
                                        <p>数据集名</p>
                                        <p><el-input v-model="datapath"></el-input></p>
                                    </div>
                                    <div>
                                        <p>模型名称</p>
                                        <p><el-input v-model="module_name"></el-input></p>
                                    </div>
                                    <div>
                                        <p>训练百分比</p>
                                        <p><el-input v-model="train_rate"></el-input></p>
                                    </div>
                                    <div>
                                        <p>测试百分比</p>
                                        <p><el-input v-model="test_rate"></el-input></p>
                                    </div>
                                    <div>
                                        <p>学习率</p>
                                        <p><el-input v-model="lr"></el-input></p>
                                    </div>
                                    <div>
                                        <p>步长</p>
                                        <p><el-input v-model="step_size"></el-input></p>
                                    </div>
                                    <div>
                                        <p>gamma</p>
                                        <p><el-input v-model="gamma"></el-input></p>
                                    </div>
                                    <div>
                                        <p>训练轮数</p>
                                        <p><el-input v-model="epochs"></el-input></p>
                                    </div>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="4"></el-col>
                    </el-row>

                </div>
            </el-scrollbar></el-col>
        <el-col :span="8">
            <p>模型列表，下载上传</p>
            <p>模型列表(输入后下载上传)</p>
            <el-input v-model="want_download"></el-input>
            <el-button @click="download">下载</el-button>
            <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />

            <el-button @click="triggerFileUpload">上传</el-button>
            <el-button @click="del_model">删除模型</el-button>
            <el-scrollbar height="320px">
                <div>
                    <el-row>
                        <el-col :span="4"></el-col>
                        <el-col :span="16">
                            <div>
                                <div>
                                    <!-- 模型库 -->
                                    <el-scrollbar height="480px">
                                        <p v-for="w in src_models_srcList" :key="w">
                                            <folderkard :_names=w.name :_size=w.size>
                                            </folderkard>
                                        </p>
                                    </el-scrollbar>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4"></el-col>
                    </el-row>
                </div>
            </el-scrollbar>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';
import folderkard from './sub_component/folderkard.vue'
import { ElNotification } from 'element-plus';
import train_model_dialog_info from './sub_component/train_model_dialog_info.vue';
import DataTransfer from './sub_component/Transfer.vue'
import qs from 'qs';
import test_model_dialog from './sub_component/test_model_dialog.vue';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
const localStorageJSON = new LocalStorageJSON();

export default {
    name: "testModel",
    data() {
        return {

            src_folders_srcList: [],
            src_dataset_srcList: [],
            src_models_srcList: [],

            datapath: 'dataset',
            module_name: 'ResNetcxx' + '.pth',
            train_rate: 0.6,
            test_rate: 0.2,
            lr: 0.001,
            step_size: 10,
            gamma: 0.1,
            epochs: 2,

            pin_code: '',
            result_code: '',
            train_result: {},

            train_model_dialog_info_visible: false,
            download_name: '',
            download_nam2e: '',
            file: null,  

            test_model_dialog_visible: false,
            myData: [
                { key: 1, label: 'Option 1' },
                { key: 2, label: 'Option 2' },
                { key: 3, label: 'Option 3' },
                // 更多数据...
            ],
            selectedData: [],

            want_download: '',
        };
    },
    props: {
    },
    watch: {
        spans(val) {
            this.spans = val;
        },
        src_dataset_srcList(val) {
            this.src_dataset_srcList = val;
        },
        src_folders_srcList(val) {
            this.src_folders_srcList = val;
        },
        src_models_srcList(val) {
            this.src_models_srcList = val;
        }
    },
    mounted() {
        this.request_effective_data_zone();
        this.request_effective_data_set();
        this.request_effective_model();

    },
    components: {
        folderkard,
        train_model_dialog_info,
        DataTransfer,
        test_model_dialog,
    },
    methods: {
        // 选择数据集
        selectData() {
            // 选择数据集
        },
        // 训练模型
        trainModel() {
            // 训练模型
        },
        goBack() {
            this.$router.go(-1);
        },
        // 查询模型训练状态
        queryModel() {
            // 查询模型训练状态
        },
        request_effective_data_zone() {
            // 请求有效数据区域
            axios.post('/api' + '/api/file/list_dir', {
                flag: 'data_dir',
            }).then(res => {
                this.src_folders_srcList = res.data.folders;
                let myDatas = res.data.folders.map((folder, index) => {
                    return {
                        key: index + 1,
                        label: folder.name
                    };
                });
                this.myData = myDatas;
            }).catch(err => {
                console.log(err);
            });
        },
        tests() {
            this.test_model_dialog_visible = !this.test_model_dialog_visible;
        },
        request_effective_data_set() {
            // 请求有效数据区域
            axios.post('/api' + '/api/file/list_dir', {
                flag: 'dataset',
            }).then(res => {
                this.src_dataset_srcList = res.data.folders;
                console.log(this.src_dataset_srcList);
                // datapath: `'Apple_Black_Rot_Disease', 'Grape_Black_Rot_Disease', 'Tomato_Leaf_Spot_Disease', 'Tomato_Septoria_Leaf_Spot_Disease', 'Tomato_Spider_Mites_Two_spotted_spider_mite', 'Tomato_Target_Spot_Disease', 'Tomato_Tomato_Yellow_Leaf_Curl_Virus', 'Tomato_Tomato_mosaic_virus', 'Tomato_healthy', 'Grape_Black_Meas'`,

            }).catch(err => {
                console.log(err);
            });
        },
        request_effective_model() {
            // 请求有效数据区域
            axios.get('/api' + '/api/file/list_models').then(res => {
                this.src_models_srcList = res.data.models;
            }).catch(err => {
                console.log(err);
            });
        }, isUUID(str) {
            const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
            return uuidRegex.test(str);
        },
        get_train_info() {
            if (!this.isUUID(this.pin_code)) {
                ElNotification({
                    title: 'Error',
                    message: '请输入正确的UUID',
                    type: 'error',
                })
                return;
            }
            console.log(this.pin_code);
            axios.get('/api' + '/api/file/task_info/' + this.pin_code).then((res) => {
                this.train_result = res.data.message;
                console.log('/api' + '/api/file/task_info/');
                console.log(this.train_result);
                if (this.train_result.state == "PENDING") {
                    ElNotification({
                        title: 'Pending',
                        message: '任务正在进行中',
                        type: 'info',
                    })
                } else if (this.train_result.state == "SUCCESS" & this.train_result.result!="{\"status\": \"error\", \"message\": \"Another task is running.\"}" ) {
                    this.train_model_dialog_info_visible = !this.train_model_dialog_info_visible;
                }else if(this.train_result.result=="{\"status\": \"error\", \"message\": \"Another task is running.\"}"){
                    ElNotification({
                        title: 'Error',
                        message: '任务失败,另一个任务正在进行',
                        type: 'FAILURE',
                    })                } 
                else {
                    ElNotification({
                        title: 'Error',
                        message: '任务失败,参数错误',
                        type: 'FAILURE',
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        automatic_loader_sub(folder_name) {
            this.request_effective_data_set();
            axios.post('/api' + '/api/file/automatic_loader',
                qs.stringify({
                    folder_chain: folder_name
                })
            ).then((res) => {
                if (res.status == 200) {
                    ElNotification({
                        title: 'Success',
                        message: '数据集加载成功',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: 'Error',
                        message: '数据集' + folder_name + '加载失败',
                        type: 'error',
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        automatic_loader() {
            if (this.selectedData.length == 0) {
                ElNotification({
                    title: 'Error',
                    message: '请选择数据集',
                    type: 'error',
                })
                return;
            }
            this.selectedData.forEach((item) => {
                this.automatic_loader_sub(item.label);
            });
        },
        clear_data_zone() {
            axios.post('/api' + '/api/file/clear_data', {
                flag: 'data_dir',
            }).then((res) => {
                if (res.status == 200) {
                    this.request_effective_data_zone();
                    ElNotification({
                        title: 'Success',
                        message: '数据源清除成功',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: 'Error',
                        message: '数据源清除失败',
                        type: 'error',
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        clear_data_set() {
            axios.post('/api' + '/api/file/clear_data', {
                flag: 'dataset',
            }).then((res) => {
                if (res.status == 200) {
                    this.request_effective_data_set();
                    ElNotification({
                        title: 'Success',
                        message: '数据集清除成功',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: 'Error',
                        message: '数据集清除失败',
                        type: 'error',
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        train() {
            axios({
                method: 'post',
                url: '/api' + '/api/file/train_models',
                headers: {
                    'uid': localStorageJSON.read('UID'),
                    'token': localStorageJSON.read('token'),
                },
                data: qs.stringify({
                    data_path: this.datapath,//dict
                    module_name: this.module_name,
                    train_rate: this.train_rate,
                    test_rate: this.test_rate,
                    lr: this.lr,
                    step_size: this.step_size,
                    gamma: this.gamma,
                    epochs: this.epochs,
                })
            }).then((res) => {
                if (res.status == 200) {
                    this.result_code = res.data.task_id;
                    this.request_effective_data_set();
                    ElNotification({
                        title: 'Success',
                        message: '开始训练,请求状态码成功',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: 'Error',
                        message: '启动失败请检查参数设置',
                        type: 'error',
                    })
                    console.log(res.data);
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        download() {
            ElNotification({
                title: 'Info',
                message: '开始下载模型',
                type: 'info',
            });

            axios({
                url: '/api' + '/api/file/load_model/' + this.want_download,
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', this.want_download);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                ElNotification({
                    title: 'Success',
                    message: '下载模型成功',
                    type: 'success',
                });
            }).catch((error) => {
                console.log(error);

                ElNotification({
                    title: 'Error',
                    message: '下载模型失败,请检查模型名',
                    type: 'error',
                });
            });
        },
        // 触发文件上传框
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        // 处理文件上传
        handleFileUpload(event) {
            this.file = event.target.files[0];
            this.upload();
        },
        // 上传文件
        upload() {
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post('/api' + '/api/file/store_model', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status == 200) {
                    ElNotification({
                        title: 'Success',
                        message: '上传模型成功',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: 'Error',
                        message: '上传模型失败',
                        type: 'error',
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        del_model() {
    // 删除模型
    axios.post('/api' + '/api/file/del_model', qs.stringify({
        model: this.want_download,
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((res) => {
        if (res.status == 200) {
            ElNotification({
                title: 'Success',
                message: '删除模型成功',
                type: 'success',
            })
            this.request_effective_model();
        }
    }).catch((err) => {
        console.log(err);
        ElNotification({
                title: 'Error',
                message: '删除模型失败,请检查模型名',
                type: 'error',
            })
    });
},
    }
}
// function success() {
//   ElNotification({
//     title: 'Success',
//     message: '更新文件夹状态信息成功',
//     type: 'success',
//   })
// }


</script>

<style scoped>
.image-preview {
    width: 240px;
    height: 196px;
    border: 1px solid #00ffd5;
    overflow: hidden;
}
</style>