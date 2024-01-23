<template>

    <el-row>
        <el-col :span="12" >
            <cpu_panel class="box-card—blue" :movable="false"></cpu_panel>
        </el-col>
        <el-col :span="12">
            <coresPercent_panel  class="box-card—blue" ref="coresPercentPanel" :movable="Movable"></coresPercent_panel>
        </el-col>
        <el-col :span="12">
            <health_card  :healthy="true" :title="'CPU performance'"></health_card>
        </el-col>
        <el-col :span="12">
            <health_card :healthy="true" :title="'GPU performance'"></health_card>
        </el-col>
        <el-col :span="12">
            <health_card :healthy="true" :title="'Disk performance'"></health_card>
        </el-col>
        <el-col :span="12">
            <health_card :healthy="true" :title="'Memory performance'"></health_card>
        </el-col>
    </el-row>
</template>
  
  
  
<script>
import cpu_panel from '@/components/cpu_panel.vue';
import coresPercent_panel from '@/components/sub_components/coresPercent_panel.vue';
import health_card from '@/components/sub_components/health_card.vue';
export default {
    name: 'Performance_analysis', // 修改为多个单词的组件名
    data() {
        return {
            Movable: false,
        }
    },
    methods: {
        reRenderComponent() {
      // 在模板中添加一个空格
      this.width += ' ';
    },
  },
  watch: {
    focce_refersh: {
      handler() {
        this.reRenderComponent();
      },
      deep: true,
    },
    movable: function (val) {
      this.Movable = val;
    }
  },
  props: {
    focce_refersh: Boolean,
    movable: {
      type: Boolean,
      default: true,
    },
    },
    components: {
        cpu_panel,
        coresPercent_panel,
        health_card,
    },
    mounted() {
    this.$nextTick(() => {
      const coresPercentPanel = this.$refs.coresPercentPanel.$el;
      coresPercentPanel.setAttribute('style', 'width: auto;');
    });
    
  },
}
</script>
  