<template>
    <div>
      <video ref="video" autoplay></video>
      <button @click="startRecording">开始录制</button>
      <button @click="stopRecording">停止录制</button>
    </div>
  </template>
  
  <script>
  
  export default {
    mounted() {
      this.mediaRecorder = null;
      this.chunks = [];
    },
    methods: {
      async startRecording() {
        try {
          const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true,
          });
          this.$refs.video.srcObject = stream;
          this.mediaRecorder = new MediaRecorder(stream, {
            mimeType: "video/webm; codecs=vp9",
            timeslice: 10, // 每秒生成一个数据块


          });
          this.chunks = [];
          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data);
          };
          this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "screen-recording.webm";
            a.click();
            window.URL.revokeObjectURL(url);
          };
          this.mediaRecorder.start();
        } catch (error) {
          console.error("无法创建 MediaRecorder", error);
        }
      },
      stopRecording() {
        this.mediaRecorder.stop();
      },
    },
  };
  </script>