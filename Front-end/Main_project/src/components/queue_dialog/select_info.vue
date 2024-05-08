<template>
    <el-button v-if="debug" plain @click="dialogVisible = true">
        Click to open the Dialog
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <div>
            <p>在此粘贴查询码</p>
            <p> <el-input v-model="input" style="width: 240px" placeholder="Please input" clearable /></p>

        </div>
        <template #footer>
            <div>
                <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
let debug = ref(false)
const input = ref('')

function handleClose(done) {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(function () {
            done();
        })
        .catch(function () {
            // catch error
        });
}
//test model
// {
//     "message": {
//         "result": {
//             "test_accuracy": 0.0446927374301676,
//             "test_loss": 0.000021527717722444562,
//             "type": "test"
//         },
//         "state": "SUCCESS"
//     }
// }

// already running
// {
//     "message": {
//         "result": "{\"status\": \"error\", \"message\": \"A task is already running.\"}",
//         "state": "SUCCESS"
//     }
// }


</script>