// eslint-disable-line no-unused-vars
class DebugLog {
    constructor(enabled) {
      this.enabled = enabled;
    }
  
    log(message) {
      if (this.enabled) {
        console.log(message);
      }
    }
  
    error(message) {
      if (this.enabled) {
        console.error(message);
      }
    }
  
    warn(message) {
      if (this.enabled) {
        console.warn(message);
      }
    }
  }

export default DebugLog; 
