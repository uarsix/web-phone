<template>
  <div style="padding: 30px">
    <!-- <h2>相册</h2> -->

    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">업로드</el-button>
    </el-upload>
    <el-button type="primary">새로 고침</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>
<style lang="less" scoped>
.upload-demo {
  display: inline-block;
  vertical-align: middle;
  margin: 24px;
  margin-right: 40px;
  height: 40px;
  button {
    height: 40px !important;
    width: 70px !important;
    background-color: #5db453;
  }
}
</style>

