<template>
  <div style="padding: 30px">
    <h5>留言</h5>
    <div class="top">
      <el-button type="primary" @click="onupdate">renew</el-button>
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
          label="전화번호"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="방향"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="내용"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="날짜"
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
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
