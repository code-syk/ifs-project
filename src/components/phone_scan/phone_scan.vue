<template>
	<div>
	    <div class="demo-wrapper">
	      <video id="video" width="640" height="480" autoplay="" playsinline muted></video>
	      <canvas id="mycanvas" width="640" height="480"></canvas>
	    </div>
	  </div>
</template>

<script>

	     export default {
	       data() {
	         return {
	           state: ''
	         }
	       },
	       mounted() {
	         this.setVideo();
	       },
	       methods: {
	         setVideo() {
	           let c = '';
	           let stop = false;
	           let oid = new URL(window.location.href).searchParams.get('oid');
	           let did = '';
	           let wix = '';
	           let second = false;
	           let video = document.querySelector('video');
	           let canvas = document.createElement('canvas');
	           let ctx = canvas.getContext('2d');
	           console.log(video)
	   
	           video.addEventListener('loadedmetadata', function() {
	             canvas.width = video.videoWidth;
	             canvas.height = video.videoHeight;
	           });
	           video.addEventListener('play', function() {
	             let setTime = setInterval(function() {
	               if (stop) {
	                 return;
	               }
	               ctx.drawImage(video, 0, 0);
	               let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	               const code = jsQR(imgData.data, imgData.width, imgData.height);
	               console.log(code)
	               if (code) {
	                 this.state = code.data;
	                 console.log(this.state)
	                 console.log('停止扫描')
	                 clearInterval(setTime)
	               }
	             }, 0);
	           }, );
	   
	           navigator.mediaDevices.getUserMedia({
	               audio: false,
	               video: {
	                 facingMode: ("environment")
	               }
	             })
	             .then(stream => {
	               console.log(stream)
	               video.srcObject = stream;
	             })
	             .catch(e => {
	               alert('加载相机失败:\n' + e);
	             });
	           // console.log(navigator.mediaDevices.getUserMedia)
	         }
	       }
	}
</script>

<style scoped>
	#bcid {
	      width: 100%;
	      position: absolute;
	      left: 0;
	      right: 0;
	      top: 0;
	      bottom:3rem;
	      text-align: center;
	      color: #fff; 
	    } 
</style>
