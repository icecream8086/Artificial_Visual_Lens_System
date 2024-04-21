<template>
    <el-timeline-item :timestamp=timestamp placement="top">
    <el-card>
      <h4>{{message}}</h4>
      <p>{{user_name}}</p>
      <p>committed {{timestamp}}</p>
    </el-card>
  </el-timeline-item>
</template>
<script>
export default {
    name: 'sub_Progress_Area',
    data() {
        return {
            timestamp: '2018/4/12',
            message: 'Tom committed 2018/4/12 20:46',
            user_name: 'Tom'
        }
    },
    props: {
        _timestamp: {
            type: String,
            default: '2018/4/12'
        },
        _message: {
            type: String,
            default: 'Tom committed 2018/4/12 20:46'
        },
        _user_name: {
            type: String,
            default: 'Tom'
        }
    },
    mounted() {
        this.timestamp = this._timestamp;
        this.message = this._message;
        this.user_name = this._user_name;
    }
    
}
</script>