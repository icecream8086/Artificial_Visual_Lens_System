// @ts-nocheck
import ComponentB from '../B.vue'
  
export default {
  components: {
    ComponentB
  },
  data() {
    return {
      message: 'Hello from PageA'
    }
  },
  methods: {
    handleMessage(message) {
      console.log(message)
    }
  }
}