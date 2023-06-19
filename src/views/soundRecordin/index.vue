<template>
  <div style="padding: 30px">
    <h5>录音</h5>
    <div class="top">
      <div>
        <el-radio-group v-model="radio" text-color="#009688" fill="#009688">
          <el-radio :label="1" text-color="#009688" fill="#009688">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="6">4</el-radio>
          <el-radio :label="9">5</el-radio>
        </el-radio-group>
      </div>

      <el-button type="success" style="background: #009688; margin-top: 20px"
        >음성</el-button
      >
    </div>
    <div class="table">
      <div class="tab-top">
        <el-button type="primary" @click="onupdate" size="small"
          >새로 고침</el-button
        >
      </div>
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
          label="기록"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
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
      radio: '1',

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
.tab-top {
  background-color: #eeffee;
  height: 44px;
  padding: 8px 0 8px 8px;
}
</style>
