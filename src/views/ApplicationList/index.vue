<template>
  <div style="padding: 30px">
    <h5>应用列表</h5>
    <div class="top">
      <el-button type="primary" @click="onupdate">새로 고침</el-button>
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
          prop="name"
          label="id"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="APP아이콘"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="이름"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="버전 적용"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="설치 시간"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="작업"
          align="center"
          min-width="120"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

      value: '',
      listLoading: false,
      tableData: [{
        date: '11',
        name: '이름',
        address: '전화기'
      }],


    }
  },
  methods: {
    onupdate () {

    },
    handleSelectionChange () {

    },

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

.table {
  height: calc(100vh - 250px);
}
</style>
