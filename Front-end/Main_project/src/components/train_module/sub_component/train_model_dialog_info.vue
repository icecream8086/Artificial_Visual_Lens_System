<template>
    <div v-if="debug">
        <el-button plain @click="outerVisible = true">
            Open the outer Dialog
        </el-button>
    </div>

    <el-dialog v-model="outerVisible" title="训练参数" :width="550">
        <el-row>
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <el-card :width="540">
                    <div>
                        <div v-if="!dialog_status">
                            信息区
                            <p>状态: {{ info.status }}</p>
                            <p>消息: {{ info.message }}</p>
                            <!-- "result": {"train_progress": [{"epoch": 1, "train_loss": 0.5937464208058689}, {"epoch": 2, "train_loss": 0.26883189801288687}], "test_progress": [{"val_loss": 2.0923799216414296, "correct": 313, "total": 716, "accuracy": 43.71508379888268}, {"val_loss": 0.019346479170399004, "correct": 606, "total": 716, "accuracy": 84.63687150837988}]} -->
                            <p>训练进度{{ info.status }}</p>
                            <div>
                                <span>训练轮数</span>
                                <div>
                                    <el-scrollbar height="120px">
                                        <el-table :data="info.result.train_progress" style="width: 100%">
                                        <el-table-column prop="epoch" label="epoch" width="180"></el-table-column>
                                        <el-table-column prop="train_loss" label="train_loss"
                                            width="180"></el-table-column>
                                    </el-table>
                                    </el-scrollbar>
                                </div>
                                <span>测试轮数</span>
                                <div>
                                <el-scrollbar height="120px">
                                    <el-table :data="info.result.test_progress" style="width: 100%">
                                        <el-table-column prop="val_loss" label="val_loss" width="180"></el-table-column>
                                        <el-table-column prop="correct" label="correct" width="180"></el-table-column>
                                        <el-table-column prop="total" label="total" width="180"></el-table-column>
                                        <el-table-column prop="accuracy" label="accuracy" width="180"></el-table-column>
                                    </el-table>
                                </el-scrollbar>
                                </div>

                            </div>
                        </div>
                        <div v-if="dialog_status">
                            <span>模型尚未训练完毕,请稍后再试</span>
                        </div>
                    </div>
                </el-card>

            </el-col>
            <el-col :span="2"></el-col>
        </el-row>


    </el-dialog>
</template>

<script setup>
import { ref, onMounted, defineProps, watch } from 'vue'

// import { ElNotification } from 'element-plus';
let outerVisible = ref(false);
let innerVisible = ref(false);
let debug = false;
let dialog_status = ref(false);
let infos = ref({});
let info = {};
const props = defineProps({
    visitables: {
        type: Boolean,
        required: true,
        default: false
    },
    message: {
        type: Object,
        required: true,
        default: () => ({
            "result": null,
            "state": "PENDING"
        })
    }
})

//train_model none
// {
//     "message": {
//         "result": null,
//         "state": "PENDING"
//     }
// }
//train_model success
// {
//     "message": {
//         "result": "{\"status\": \"success\", \"message\": \"Task completed.\", \"result\": {\"train_progress\": [{\"epoch\": 1, \"train_loss\": 0.5937464208058689}, {\"epoch\": 2, \"train_loss\": 0.26883189801288687}], \"test_progress\": [{\"val_loss\": 2.0923799216414296, \"correct\": 313, \"total\": 716, \"accuracy\": 43.71508379888268}, {\"val_loss\": 0.019346479170399004, \"correct\": 606, \"total\": 716, \"accuracy\": 84.63687150837988}]}}",
//         "state": "SUCCESS"
//     }
// }{"status": "success", "message": "Task completed.", }




onMounted(() => {
    // getFolderAttribute();
    outerVisible.value = props.visitables;
    innerVisible.value = props.visitables;
    if (debug) {
        console.log("outerVisible.value: " + outerVisible.value);
        console.log("props.visitables: " + props.visitables);
        console.log(props.message);
    }
    if (props.message.state == "SUCCESS") {
        if (debug) {
            console.log('props.message.result\n' + props.message.result);
        }
        dialog_status.value = true;
        infos.value = JSON.stringify(infos.value);
        infos.value = JSON.parse(infos.value);
        if (debug) {
            console.log('infos.value\n');
            console.log(infos);
        }
    } else if (props.message.state == "PENDING") {
        console.log("PENDING");
        dialog_status.value = false;
    }
})

watch(() => props.visitables, (newVal) => {
    if (newVal) {
        outerVisible.value = outerVisible.value ? false : true;
    }
})
watch(() => props.message, (newVal) => {
    if (newVal.state == "SUCCESS") {
        infos.value = newVal.result;
        infos.value = JSON.stringify(infos.value);
        infos.value = JSON.parse(infos.value);
        info = JSON.parse(infos.value);
        if (debug) {
            console.log('info\n');
            console.log(info);
        }

    } else if (newVal.state == "PENDING") {
        dialog_status.value = false;
    }
})
</script>