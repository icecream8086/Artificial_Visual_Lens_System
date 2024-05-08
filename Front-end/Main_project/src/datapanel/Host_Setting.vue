<template>
    <p>图像识别接口</p>

    <el-row>
        <el-col :span="12"> <el-card style="width: 600px;">
                <p> <span>普通预测神经网络</span></p>
                <input type="file" @change="handleFileSelect1">
                <div class="image-container">
                    <img v-if="imageURL1" :src="imageURL1" alt="Uploaded image">
                </div>
                <el-button @click="handleFileUpload1">上传</el-button>
                <p>预测关键词</p>
                <p><el-card><span>{{ result_key_word1 }}</span></el-card></p>
            </el-card></el-col>
        <el-col :span="12">
            <el-card style="width: 600px;">
                <p><span>自定义预测神经网络</span></p>
                <input type="file" @change="handleFileSelect2">
                <div class="image-container">
                    <img v-if="imageURL2" :src="imageURL2" alt="Uploaded image">
                </div>
                <el-button @click="handleFileUpload2">上传</el-button>
                <el-input v-model="model_name" placeholder="请输入模型名称"></el-input>
                <el-input v-model="label_names" placeholder="请输入标签名称"></el-input>
                <p>预测关键词</p>
                <el-card>
                    <el-scrollbar :height="100">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="key" label="Key"></el-table-column>
                            <el-table-column prop="value" label="Value"></el-table-column>
                            <el-table-column prop="probability" label="Probability"></el-table-column>
                        </el-table>
                    </el-scrollbar>
                </el-card>
            </el-card>
        </el-col>
        <el-col :span="12"> <el-card style="width: 500px;">
                <p><span>clip网络</span></p>
                <input type="file" @change="handleFileSelect3">
                <div class="image-container">
                    <img v-if="imageURL3" :src="imageURL3" alt="Uploaded image">
                </div>
                <el-button @click="handleFileUpload3">上传</el-button>
                <el-input v-model="label_names_clip" placeholder="请输入标签名称"></el-input>
                <p>预测关键词</p>
                <el-card>
                    <p>taks_id: </p>
                    <p><span>{{ result_key_word3 }}</span></p>
                </el-card>
            </el-card></el-col>
            <el-col :span="12"> <el-card style="width: 500px;">
                <p>预测关键词</p>
                <el-button @click="selectFile" >查询结果</el-button>
                <el-input v-model="result_key_word3" ></el-input>
                <el-card>
                    <p>预测结果</p>
                    <p v-if="clip_result">image_label: {{ clip_result.image_label }}</p>
<p v-if="clip_result">index: {{ clip_result.index }}</p>
<p v-if="clip_result">prob: {{ clip_result.prob }}</p>

                </el-card>
            </el-card></el-col>
    </el-row>

</template>

<script>
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
            const localStorageJSON = new LocalStorageJSON();
import axios from 'axios';
import { ElNotification } from 'element-plus';

export default {
    name: 'Host_Setting',

    data() {
        return {
            imageURL1: null,
            selectedFile1: null,

            result_key_word1: 'null',

            imageURL2: null,
            selectedFil21: null,

            model_name: 'ng501.pth',
            label_names: '',
            result_key_words: {
                idxs: {},
            },
            tableData: [],


            imageURL3: null,
            selectedFile3: null,
            label_names_clip: '...',
            result_key_word3: 'null',
            clip_result:{
                image_label: '...',
                index: '...',
                prob: '...',
            },
        };
    },
    methods: {
        handleFileSelect1(event) {
            this.selectedFile1 = event.target.files[0];
            this.imageURL1 = URL.createObjectURL(this.selectedFile1);
        },
        handleFileSelect2(event) {
            this.selectedFile2 = event.target.files[0];
            this.imageURL2 = URL.createObjectURL(this.selectedFile2);
        },
        handleFileSelect3(event) {
            this.selectedFile3 = event.target.files[0];
            this.imageURL3 = URL.createObjectURL(this.selectedFile3);
        },
        async handleFileUpload1() {
            if (!this.selectedFile1) {
                return;
            }
            const formData = new FormData();
            formData.append('image', this.selectedFile1);
            try {

                const response = await axios.post('/api' + '/api/file/offical_resnet', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.result_key_word1 = response.data.result;
                ElNotification({
                    title: '上传成功',
                    message: '上传成功',
                    type: 'success'
                });
            } catch (error) {
                console.error(error);
            }
        },
        async handleFileUpload2() {
            if (!this.selectedFile2) {
                return;
            }
            const formData = new FormData();
            formData.append('image', this.selectedFile2);
            formData.append('model_path', './model/' + this.model_name);
            formData.append('label_names', this.label_names);
            try {
                const response = await axios.post('/api' + '/api/file/customized_resnet', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.result_key_words = response.data;
                this.tableData = Object.entries(this.result_key_words.idxs).map(([key, value]) => ({
                    key,
                    value,
                    probability: this.result_key_words.label_names[0][key],
                }));
                console.log(this.result_key_words);
                ElNotification({
                    title: '上传成功',
                    message: '上传成功',
                    type: 'success'
                });
            } catch (error) {
                console.error(error);
            }
        },
        async handleFileUpload3() {
            if (!this.selectedFile3) {
                return;
            }
            const formData = new FormData();
            formData.append('image', this.selectedFile3);
            formData.append('text_dictionary', this.label_names_clip);
            try {
                const response = await axios.post('/api' + '/api/file/clip_predicate', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                this.result_key_word3 = response.data.task_id;
                // Handle the response here
            } catch (error) {
                console.error(error);
            }
        },
        async selectFile() {
    try {
        const response = await axios.get('/api'+'/api/file/task_info/'+this.result_key_word3, {
            headers: {
                'uid': localStorageJSON.read('UID'),
                'token': localStorageJSON.read('token'), // Add your token here
            }
        });
        // Handle the response here
        this.clip_result = response.data.message.result;
        // "result": {
        //     "image_label": "dog",
        //     "index": 0,
        //     "prob": 0.9994317889213562
        // }
    } catch (error) {
        console.error(error);
    }
}
    }
}
</script>

<style scoped>
.image-container {
    width: 200px;
    height: 200px;
    border: 1px solid #00ffc8;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>