<template>
    <!-- Login -->
    <div id="login">
        <div id="login-form">
            <h1>登陆界面</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账户" prop="user">
                    <el-input v-model.number="ruleForm.user"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="$router.push({ name: 'sign' })">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        var checkuser = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('账户不能为空'));
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (value.length < 5) {
                callback(new Error('密码必须大于4位数'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                user: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                user: [
                    { validator: checkuser, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="less">
.el-form-item {
    display: flex;
    justify-content: space-around;
    .el-form-item__label {
        width: auto !important;
    }
    .el-form-item__content {
        margin-left: 0 !important;
    }
}
.btn {
    .el-form-item__content {
        display: flex;
        flex-direction: column;
        .el-button {
            width: 140px;
            margin-bottom: 20px;
            margin-left: 0;
        }
    }
}
</style>
<style lang="less" scoped>
#login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  // 背景图片样式
  background-image: url("../assets/bgcolor.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  color: #fff;
  // 表单 box-shadow 样式 好看
  box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
}
// 浏览器兼容 , 针对谷歌浏览器 默认设置的 奇怪样式

</style>
  