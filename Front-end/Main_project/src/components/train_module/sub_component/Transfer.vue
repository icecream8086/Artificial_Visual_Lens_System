<template>
    <el-transfer v-model="value" :data="data" />
    <div>
        <!-- //doc
<template>
  <Transfer :data="myData" v-model="selectedData" />
</template>

<script>
import Transfer from './Transfer.vue'

export default {
  components: {
    Transfer
  },
  data() {
    return {
      myData: [
        { key: 1, label: 'Option 1' },
        { key: 2, label: 'Option 2' },
        { key: 3, label: 'Option 3' },
        // 更多数据...
      ],
      selectedData: []
    }
  }
}
</script> -->

    </div>
</template>

<script setup>
import { ref, defineProps,watch,defineEmits } from 'vue'
import { defineComponent,onMounted } from 'vue'

const props = defineProps({
    data: Array,
})

const value = ref([])
const emit = defineEmits(['update:modelValue'])

watch(value, (newValue) => {
    const newCheckedData = props.data.filter((item) => newValue.includes(item.key))
    emit('update:modelValue', newCheckedData)
})

onMounted(() => {
    props.data.forEach((item) => {
        if (item.checked) {
            value.value.push(item.key)
        }
    })
})

// eslint-disable-next-line no-undef
defineExpose({
    data: props.data,
    value
})

defineComponent({
    name: 'DataTransfer'
})
</script>