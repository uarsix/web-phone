<template>
  <div style="padding: 30px">
    <div class="table">
      <el-table
        :header-cell-style="{ background: '#5bba5f', color: 'black' }"
        v-loading="listLoading"
        ref="multipleTable"
        :data="tableData"
        height="100%"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border
      >
        <el-table-column width="55">
          <template>
            <el-radio
              v-model="radio"
              label=""
              align="center"
            ></el-radio> </template
        ></el-table-column>
        <el-table-column label="상태" min-width="120" align="center">
          <template slot-scope="scope"
            ><el-tag type="danger" effect="dark" size="mini">{{
              scope.row.date
            }}</el-tag></template
          >
        </el-table-column>
        <el-table-column label="핸드폰 번호" min-width="120" align="center">
          <template slot-scope="scope"
            ><el-tag
              effect="dark"
              size="medium"
              color="#dfbf1d"
              :hit="true"
              style="border: 0"
              >{{ scope.row.date }}</el-tag
            ></template
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="휴대폰 설치 시간"
          min-width="120"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="전화 상태"
          align="center"
          min-width="120"
          ><template slot-scope="scope"
            ><el-tag :type="btnChange1[1]" :effect="btnChange1[0]" size="mini"
              >ON</el-tag
            ></template
          ></el-table-column
        >
        <el-table-column
          prop="address"
          label="액세스 가능성"
          align="center"
          min-width="120"
          ><template slot-scope="scope"
            ><el-tag :type="btnChange2[1]" :effect="btnChange2[0]" size="mini"
              >ON</el-tag
            ></template
          ></el-table-column
        >
        <el-table-column
          prop="address"
          label="배터리"
          align="center"
          min-width="120"
        >
          <template slot-scope="scope"
            ><el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="70"
            ></el-progress></template
        ></el-table-column>
        <el-table-column
          prop="address"
          label="인터넷 상태"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="통신사"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="모델"
          align="center"
          min-width="120"
        >
          <template slot-scope="scope"
            ><el-tag :type="btnChange2[1]" :effect="btnChange2[0]" size="mini"
              >ON</el-tag
            >
            <p>11</p></template
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="기능점"
          align="center"
          width="120"
        >
          <template slot-scope="scope">
            <div class="switch-pos">
              <el-switch
                style="display: block"
                v-model="switchValue"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch
              ><span :class="switchValue ? 'switch-right' : 'switch-none'"
                >열기</span
              >
              <span :class="switchValue ? 'switch-none' : 'switch-left'"
                >닫기</span
              >
            </div></template
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="작업"
          align="center"
          min-width="250"
        >
          <template slot-scope="scope"
            ><el-tag
              effect="dark"
              size="mini"
              color="#141414"
              :hit="true"
              style="border: 0"
              >{{ scope.row.date }}</el-tag
            ><el-tag
              effect="dark"
              size="mini"
              color="#1485d5"
              :hit="true"
              style="border: 0; margin: 0 8px"
              >{{ scope.row.date }}</el-tag
            ><el-tag
              effect="dark"
              size="mini"
              color="#dfbf1d"
              :hit="true"
              style="border: 0; color: #553747"
              >{{ scope.row.date }}</el-tag
            ></template
          ></el-table-column
        >
        <el-table-column
          prop="address"
          label="이름"
          align="center"
          min-width="120"
        ></el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total,  prev, pager, next, sizes"
      :total="4"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '',
      input: '',
      listLoading: false,
      tableData: [{
        date: '11',
        name: '이름',
        address: '전화기'
      }],
      switchValue: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formLabelWidth: '120px',
      btnChange1: ['plain', 'info'],
      btnChange2: ['plain', 'info'],
      btnChange3: ['plain', 'dark'],

    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange () {

    }
  },

}
</script>
<style  scope lang="less">
.switch-pos {
  position: relative;
}
.el-switch {
  zoom: 1.8;
}
.switch-left {
  // color: #fff;
  position: absolute;
  z-index: 2;
  left: 49px;
  top: 8px;
  color: #fff;
}
.switch-right {
  // color: #fff;
  position: absolute;
  z-index: 2;
  left: 25px;
  top: 8px;
  color: #fff;
}
.switch-none {
  display: none;
}
.table {
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
.table {
  height: calc(100vh - 250px);
}
.tag-style {
  background-color: #dfbf1d;
}
</style>
