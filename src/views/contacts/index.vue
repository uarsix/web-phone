<template>
  <div style="padding: 30px">
    <h5>联系人</h5>
    <div class="top">
      <el-button type="primary" @click="dialogFormVisible = true"
        >업데이트</el-button
      >

      <el-input v-model="input" size="medium" style="width: auto"></el-input>
      <el-button
        type="success"
        icon="el-icon-search"
        style="background: #009688"
        >검색</el-button
      >
      <el-button type="primary" @click="dialogFormVisible = true"
        >연락처 추가</el-button
      >
      <el-button type="primary">연락처 다운로드</el-button>
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
        <el-table-column label="id" min-width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="전화번호" min-width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="이름"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="작업"
          align="center"
          min-width="120"
        ></el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="연락처 추가"
      :visible.sync="dialogFormVisible"
      width="30%"
    >
      <el-form :model="form" :label-position="labelPosition">
        <el-form-item label="전화번호" :label-width="formLabelWidth">
          <el-input
            v-model="form.mes"
            autocomplete="off"
            size="medium"
            style="width: auto"
          ></el-input>
        </el-form-item>
        <el-form-item label="이름" :label-width="formLabelWidth">
          <el-input
            v-model="form.phoneNumber"
            autocomplete="off"
            size="medium"
            style="width: auto"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >저장</el-button
        >
        <el-button @click="dialogFormVisible = false">닫기</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      listLoading: false,
      tableData: [{
        date: '11',
        name: '이름',
        address: '전화기'
      }],

      dialogFormVisible: false,
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
    delPhone () {
      if (this.delLength > 0) {
        this.$confirm('이 작업을 수행하면 파일이 영구적으로 삭제됩니다. 계속하시겠습니까??', '힌트', {
          cancelButtonText: 'no',
          confirmButtonText: '저장',
          cancelButtonClass: "btn-custom-cancel",
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '삭제 성공'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '삭제 취소됨'
          });
        });
      }

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
.el-dialog__body {
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  // padding-left: 140px;
  .el-form {
    width: 300px;
  }
}

.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
.table {
  height: calc(100vh - 250px);
}
</style>
