<template>
  <div style="padding-left: 40px">
    <h4>
      참고: 실시간 모니터링 후 비디오를 중지하고 창을 닫으십시오. 그렇지 않으면
      트래픽이 많이 소모됩니다.
    </h4>
    <div style="display: flex">
      <div class="video-s"></div>
      <div class="btn-style">
        <el-button type="primary">온라인 여부</el-button>
        <el-button type="success">비디오 시작</el-button>
        <el-button type="danger">비디오 중지</el-button>
        <el-button type="warning">소리 끄기</el-button>
        <el-button style="background-color: #59aaf0; color: #fff"
          >소리만 듣다</el-button
        >
        <el-button style="background-color: #29a4c9; color: #fff"
          >전면 / 후면 카메라 전환</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>


import VueCoreVideoPlayer from 'vue-core-video-player'



export default {
  components: { VueCoreVideoPlayer },
  data () {
    return {
      videoSource: '',
      cover: '',
      title: ''
    }
  },
}
</script>
<style lang="less" scoped>
.video-s {
  display: inline-block;

  width: 35%;
  border: 5px solid #000;
  height: calc(100vh - 250px);
}
.btn-style {
  .el-button {
    display: block;
    margin: 12px;
  }
}
h4 {
  color: #d63339;
}
</style>


