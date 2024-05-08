<!-- type: Descriptions 描述列表 -->
<template>
    <el-descriptions>
        <el-descriptions-item label="Remarks">
            <el-tag size="large">{{ Remarks }}</el-tag>
        </el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="">
        <el-descriptions-item label="Username"> {{ Username }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-descriptions-item>
        <el-descriptions-item label="Telephone"> {{ Telephone }}</el-descriptions-item>
        <el-descriptions-item label="Place">{{ Place }}</el-descriptions-item>
        <el-descriptions-item label="mail"> {{ e_mail }}</el-descriptions-item>
        <el-divider></el-divider>
        
    </el-descriptions>
    <el-descriptions>
        <el-descriptions-item label="Address"> {{ Address }}</el-descriptions-item>

    </el-descriptions>
    <el-divider></el-divider>
    <el-descriptions>
        
        <el-descriptions-item label=""> {{ Signature }}</el-descriptions-item>
    </el-descriptions>
</template>
<script setup>


</script>

<script>
export default {
    data() {
        return {
            Address: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
            Remarks: 'School',
            Place: 'Suzhou',
            Telephone: '18100000000',
            Username: 'kooriookami',
            Signature: 'I am a student.',
            e_mail: ''
        };
    },
    props: {
        address: {
            type: String,
            default: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
        },
        remarks: {
            type: String,
            default: 'School',
        },
        place: {
            type: String,
            default: 'Suzhou',
        },
        telephone: {
            type: String,
            default: '18100000000',
        },
        username: {
            type: String,
            default: 'kooriookami',
        },
        signature: {
            type: String,
            default: 'I am a student.',
        },
        email: {
            type: String,
            default: 'a@mail.com',
        },
    },
    watch: {
        address: {
            handler: function (val) {
                this.Address = val;
            },
            deep: true,
        },
        remarks: {
            handler: function (val) {
                this.Remarks = val;
            },
            deep: true,
        },
        place: {
            handler: function (val) {
                this.Place = val;
            },
            deep: true,
        },
        telephone: {
            handler: function (val) {
                this.Telephone = val;
            },
            deep: true,
        },
        username: {
            handler: function (val) {
                this.Username = val;
            },
            deep: true,
        },
        signature: {
            handler: function (val) {
                this.Signature = val;
            },
            deep: true,
        },
        email: {
            handler: function (val) {
                this.e_mail = val;
            },
            deep: true,
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.Address = this.address;
            this.Remarks = this.remarks;
            this.Place = this.place;
            this.Telephone = this.telephone;
            this.Username = this.username;
            this.Signature = this.signature;
            this.e_mail = this.email;
        },
    },

};
</script>
  