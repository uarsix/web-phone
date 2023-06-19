<template>
  <div style="padding: 30px">
    <!-- 密码设置 -->
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      :label-position="labelPosition"
      :label-width="formLabelWidth"
    >
      <el-form-item label="기존 암호" prop="Password">
        <el-input
          v-model="form.Password"
          autocomplete="off"
          size="medium"
          placeholder="기존 암호를 입력하십시오."
        ></el-input>
      </el-form-item>
      <el-form-item label="새 암호" prop="newPassword">
        <el-input
          v-model="form.newPassword"
          autocomplete="off"
          size="medium"
          placeholder="새 암호를 입력하십시오."
        ></el-input>
      </el-form-item>
      <el-form-item label="새 비밀번호 확인" prop="newPasswordAgain">
        <el-input
          v-model="form.newPasswordAgain"
          autocomplete="off"
          size="medium"
          placeholder="새 암호를 입력하십시오."
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">제출</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    const createRule = (message) => [{ required: true, message, trigger: 'blur' }];
    const validatePasswordAgain = (rule, value, callback) => {

      if (value !== this.form.newPassword) {
        callback(new Error('두 번 입력한 암호가 일치하지 않습니다.!'));
      } else {
        callback();
      }
    }

    return {
      labelPosition: 'right',
      formLabelWidth: '140px',
      form: {
        Password: '',
        newPassword: '',
        newPasswordAgain: '',

      },

      rules: {
        Password: createRule('기존 암호를 입력하십시오.'),
        newPassword: createRule('새 암호를 입력하십시오.'),
        newPasswordAgain: [createRule('새 암호를 입력하십시오.')[0], { validator: validatePasswordAgain, trigger: 'blur' },]
      }
    }
  },
  methods: {

    submitForm (formName) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log(valid);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

  }
}
</script>
<style scoped lang="less">
.el-form {
  padding: 80px;
  /deep/ .el-input {
    width: 250px;
  }
}
</style>
