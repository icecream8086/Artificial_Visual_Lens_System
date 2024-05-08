<template>
    <view>
        <u-row>
            <u-col :span="1">
                <p>&nbsp;</p>
            </u-col>
            <u-col :span="10">
                <div class="bg_box_card">
                    <u-row justify="space-between">
                        <u-col :span="2">
                            <p v-if="statu_array[0]" class="led_icon_success">a</p>
                            <p v-if="statu_array[1]" class="led_icon_wait">a</p>
                            <p v-if="statu_array[2]" class="led_icon_fail">a</p>
                        </u-col>
                        <u-col :span="10">
                            <div>
                                <u-steps :current=lengths activeIcon="checkmark-circle-fill"
                                    inactiveIcon="hourglass-half-fill">
                                    <u-steps-item title="Train" :desc=this.train_time></u-steps-item>
                                    <u-steps-item title="Test" :desc=this.test_time></u-steps-item>
                                    <u-steps-item title="Relase" :desc=this.relase_time></u-steps-item>
                                </u-steps>
                            </div>
                        </u-col>
                    </u-row>

                </div>
            </u-col>
            <u-col :span="1">
                <p>&nbsp;</p>
            </u-col>
        </u-row>
    </view>
</template>

<script>

import UCol from '../../uni_modules/uview-ui/components/u-col/u-col.vue';
import uRow from '../../uni_modules/uview-ui/components/u-row/u-row.vue';

/**
 * A card component to display progress status.
 * @typedef {Object} ProgressCard
 * @description A card component to display progress status.
 * @property {string} name - The name of the component.
 * @property {Object} components - The child components used in the component.
 * @property {Object} data - The data object containing the component's reactive properties.
 * @property {Array<boolean>} data.statu_array - An array of booleans representing the status of the progress card.
 * @property {string} data.lengths - A string representing the length of the steps.
 * @property {string} data.train_time - A string representing the training time.
 * @property {string} data.test_time - A string representing the testing time.
 * @property {string} data.relase_time - A string representing the release time.
 * @property {number} data.Status - A number representing the status code of the progress card.
 * @property {function} mounted - A lifecycle hook that runs after the component has been mounted.
 * @property {Object} props - The props object containing the component's props.
 * @property {number} props.steps - The number of steps in the progress card.
 * @property {string} props.data_time_train - The training time.
 * @property {string} props.data_time_Test - The testing time.
 * @property {string} props.data_time_relase - The release time.
 * @property {number} props.Statu_code - The status code of the progress card.
 */
export default {
    //doc
    name: "Progress_card",
    components: { uRow, UCol },
    data() {
        return {
            statu_array: [false, false, true],
            lengths: " " + this.steps,
            train_time: " " + this.data_time_train,
            test_time: " " + this.data_time_Test,
            relase_time: " " + this.data_time_relase,
            Status: this.Statu_code,
        };
    },
    mounted() {
        this.statu_array = [true, false, false];

        if (this.Status == 0) {
            this.statu_array = [true, false, false];
        } else if (this.Status == 1) {
            this.statu_array = [false, true, false];
        } else if (this.Status == 2) {
            this.statu_array = [false, false, true];
        }
    },

    props: {
        steps: {
            type: Number,
            required: true,
        },

        data_time_train: String,
        data_time_Test: String,
        data_time_relase: String,

        Statu_code: {
            type: Number,
            required: true,
        },
    },
};

</script>

<style>
.bg_box_card {
    position: relative;
    background-color: #171717;
    border: 1px solid #1999ef;
    padding: 1px color #1999ef;
}

.led_icon_wait {
    /* statu code 0 */
    color: #FFD700;
    background-color: #FFD700;
    size: unset;
    width: 100%;
    height: 100%;
}

.led_icon_success {
    /* statu code 1 */
    color: #00FF43;
    background-color: #00FF43;
    size: unset;
    width: 100%;
    height: 100%;
}

.led_icon_fail {
    /* statu code 2 */
    color: #FF0000;
    background-color: #FF0000;
    size: unset;
    width: 100%;
    height: 100%;
}
</style>