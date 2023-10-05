<template>
    <div>
      <p>ChildComponent: {{ rand }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rand: {
        type: Number,
        required: true,
      },
    },
  };
  </script>