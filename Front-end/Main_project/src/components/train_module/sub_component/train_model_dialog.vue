<template>
    <div v-if="debug">
        <el-button plain @click="outerVisible = true">
            Open the outer Dialog
        </el-button>
    </div>

    <el-dialog v-model="outerVisible" title="文件夹档案" :width="400">
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="16">
                <el-card :width="360">
                    <div>
                        穿梭框组件
                    </div>
                </el-card>

            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <el-dialog v-model="innerVisible" width="500" title="最终数据集信息" append-to-body>
            <span>编辑文件夹信息</span>
            <span>返回结果信息</span>

            <div><el-button> 修改信息</el-button></div>
        </el-dialog>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="innerVisible = true">
                    修改信息
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
// import { ElNotification } from 'element-plus';
let outerVisible = ref(false);
let innerVisible = ref(false);

let requestPath = ref("");
let debug = false;




const props = defineProps({
    visitables: {
        type: Boolean,
        required: true,
        default: false
    },

})






onMounted(() => {
    // getFolderAttribute();
    requestPath.value = props.path;
    outerVisible.value = props.visitables;

})
</script>