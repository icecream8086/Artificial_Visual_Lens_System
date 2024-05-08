<template>
    <div>
      <button @click="addLine">+</button>
      <button @click="removeLine">-</button>
      <textarea v-model="value"></textarea>
      <div v-for="(child, index) in children" :key="index">
        <ChildComponent :rand="child.rand" />
      </div>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        value: '',
        children: [],
      };
    },
    computed: {
      computedValue: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.value = newValue;
          this.$emit('input', newValue);
        },
      },
    },
    methods: {
      addLine() {
        const lines = this.value.split('\n');
        // @ts-ignore
        lines.push(Math.floor(Math.random() * 100));
        this.value = lines.join('\n');
        // @ts-ignore
        this.children.push({ rand: Math.floor(Math.random() * 100) });
      },
      removeLine() {
        const lines = this.value.split('\n');
        lines.pop();
        this.value = lines.join('\n');
        this.children.pop();
      },
    },
  };
  </script>