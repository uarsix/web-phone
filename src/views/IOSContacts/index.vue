<template>
  <div style="padding: 30px">
    <h5>ios联系人</h5>
    <div class="top">
      <el-button type="primary" style="margin-right: 50px" @click="onupdate"
        >업데이트</el-button
      >

      <span>휴대폰 목록</span
      ><el-select v-model="value" placeholder="선택하십시오.">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
        <el-table-column type="selection" width="55"> </el-table-column>

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
          label="기능 스위치"
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
        value: '1',
        label: '선택하십시오.'
      }, {
        value: '2',
        label: '선택하십시오.'
      }, {
        value: '3',
        label: '선택하십시오.'
      }, {
        value: '4',
        label: '선택하십시오.'
      }, {
        value: '5',
        label: '선택하십시오.'
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
