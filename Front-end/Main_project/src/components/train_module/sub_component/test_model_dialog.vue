<template>
    <div v-if="debug">
        <el-button plain @click="outerVisible = true">
            Open the outer Dialog
        </el-button>
    </div>

    <el-dialog v-model="outerVisible" title="测试模型" :width="400">
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="16">
                <el-card :width="360">
                    <div>
                        <div>
                            <p>测试模型</p>
                            <p>数据集路径: {{ requestPath }}</p>
                            <el-input v-model="data_set_path" placeholder="请输入数据集路径"></el-input>
                            <p>模型路径: {{ model_path }}</p>
                            <el-input v-model="model_path" placeholder="请输入模型路径"></el-input>
                            <p>训练比例: {{ train_rate }}</p>
                            <el-input v-model="train_rate" placeholder="请输入训练比例"></el-input>
                            <p>测试比例: {{ test_rate }}</p>
                            <el-input v-model="test_rate" placeholder="请输入测试比例"></el-input>
                            <p>resize: {{ resize }}</p>
                            <el-input v-model="resize" placeholder="请输入resize"></el-input>
                            <p>center_crop: {{ center_crop }}</p>
                            <el-input v-model="center_crop" placeholder="请输入center_crop"></el-input>
                            <p>mean: {{ mean }}</p>
                            <el-input v-model="mean" placeholder="请输入mean"></el-input>
                            <p>std: {{ std }}</p>
                            <el-input v-model="std" placeholder="请输入std"></el-input>
                        </div>
                        <div>
                            <el-input v-model="task_id" placeholder="请输入task_id"></el-input>

                        </div>


                    </div>
                </el-card>
                <el-button type="primary" @click="test_model">测试模型</el-button>

                <el-button type="primary" @click="select_test_info">查看测试结果</el-button>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <el-dialog v-model="innerVisible" width="500" title="最终数据集信息" append-to-body>
            <div>
                测试结果区
                <div v-if="test_info">
                    <h3>测试集信息</h3>
                    <p v-for="(value, key) in test_info" :key="key">{{ key }}: {{ value }}</p>
                </div>
                <div v-if="validation_info">
                    <h3>验证集信息</h3>
                    <p v-for="(value, key) in validation_info" :key="key">{{ key }}: {{ value }}</p>
                </div>
            </div>
        </el-dialog>
        <!-- <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="innerVisible = true">
                    修改信息
                </el-button>
            </div>
        </template> -->
    </el-dialog>
</template>

<script setup>
import { ref, onMounted, defineProps, watch } from 'vue'
import axios from 'axios';
import { ElNotification } from 'element-plus';
let outerVisible = ref(false);
let innerVisible = ref(false);
let requestPath = ref("");
let debug = false;
let dialog_status = ref(false);
let data_set_path = ref("./dataset");
let model_path = ref("");
let train_rate = ref(0.6);
let test_rate = ref(0.2);
let resize = ref(256);
let center_crop = ref(224);
let mean = ref("0.485, 0.456, 0.406");
let std = ref("0.229, 0.224, 0.225");
let task_id = ref("");
let test_info = ref({});
let validation_info = ref({});


async function select_test_info() {
    try {
        const response = await axios.get('/api' + `/api/file/task_info/${task_id.value}`, {
            headers: {
                'uid': 3,
                'token': '', // 这里需要填写正确的token
            }
        });

        if (response.data.message.state === "SUCCESS") {
    test_info.value = response.data.message.result.result.test;
    validation_info.value = response.data.message.result.result.validation;
    innerVisible.value = true;
    console.log(response.data.message);
}
        else {
            if (response.data.message.result.error) {
                ElNotification({
                    title: '失败',
                    message: response.data.message.result.error,
                    type: 'error'
                });
            } else {
                ElNotification({
                    title: '失败',
                    message: '任务失败',
                    type: 'error'
                });
            }
            if (response.data.message.state === "PENDING") {
                ElNotification({
                    title: '成功',
                    message: '任务正在运行中,请不要关闭窗口，请稍后查看结果',
                    type: 'success'
                });
            } else {
                ElNotification({
                    title: '失败',
                    message: '任务失败',
                    type: 'error'
                });
            }

        }

    } catch (error) {
        console.error(error);
    }
}

async function test_model() {
    try {
        if (data_set_path.value === "" || model_path.value === "" || train_rate.value === "" || test_rate.value === "" || resize.value === "" || center_crop.value === "" || mean.value === "" || std.value === "") {
            ElNotification({
                title: '失败',
                message: '请填写完整信息',
                type: 'error'
            });
            return;
        }
        const response = await axios.post('/api' + '/api/file/test_models', {
            data_set_path: data_set_path.value,
            model_path: model_path.value,
            train_rate: train_rate.value,
            test_rate: test_rate.value,
            resize: resize.value,
            center_crop: center_crop.value,
            mean: mean.value,
            std: std.value
        }, {
            headers: {
                'uid': 3,
                'token': '',
            }
        });

        if (response.data.message === "Task is still running, please check back later") {
            dialog_status.value = true;
            task_id.value = response.data.task_id;
            ElNotification({
                title: '成功',
                message: '任务正在运行中,请不要关闭窗口，请稍后查看结果',
                type: 'success'
            });

        } else {
            ElNotification({
                title: '失败',
                message: '任务失败，请检查参数是否正确',
                type: 'error'
            });
        }

    } catch (error) {
        console.error(error);
    }
}
const props = defineProps({
    visitables: {
        type: Boolean,
        required: true,
        default: false
    },

})






onMounted(() => {
    // getFolderAttribute();
    outerVisible.value = props.visitables;

})
watch(() => props.visitables, (newVal,) => {
    outerVisible.value = newVal;
})
watch(() => test_info, (newVal) => {
    test_info.value = newVal;
})
watch(() => validation_info, (newVal) => {
    validation_info.value = newVal;
})
</script>