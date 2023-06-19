<template>
  <div style="padding: 30px">
    <h5>通话记录</h5>
    <div class="top">
      <el-button type="primary" @click="Refresh">새로 고침</el-button>
    </div>
    <div class="table">
      <el-table
        :header-cell-style="{ background: '#5bba5f', color: 'black' }"
        v-loading="listLoading"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          prop="address"
          label="핸드폰 번호"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="보내기 / 수락"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="유형"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="연결 시간"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="통화 시간"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

      listLoading: false,
      tableData: [{
        date: '11',
        name: '이름',
        address: '전화기'
      }],


      formLabelWidth: '120px',
      form: {
        mes: '',
        phoneNumber: '',

      },
      fullscreen: false,
      labelPosition: 'right',
      delLength: 0
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val.length);
      this.delLength = val.length
    }
    ,
    Refresh () {


    }
  }
}
</script>
<style  scope lang="less">
.top {
  .el-input {
    margin-left: 5%;
  }
}
.table {
  margin-top: 20px;
}

.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
.table {
  height: calc(100vh - 250px);
}
</style>

