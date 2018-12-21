<template>
<div class="login">
  <div class="login__title">
    <h2>垃圾分类管理平台</h2>
  </div>
  <div class="form">
  <cube-input 
    v-model="form.staffId"
    placeholder="请输入工号"
    clearable
  >
  </cube-input>
  <cube-input 
    type="password"
    v-model="form.password"
    placeholder="请输入密码"
    clearable
  >
  </cube-input>
  <cube-button primary icon="cubeic-search" @click="submit">登录</cube-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      toastTxt: '正在登录，请稍候......',
      form: {
        staffId: '',
        password: ''
      }
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.$createToast({
        txt: this.toastTxt
      }).show()

      this.$http.post('/doLogin', {
        staffId: this.form.staffId,
        password: this.form.password
      }).then((res) => {
        if (res.data.status) {
          this.$store.commit('setStaff', res.data.data)
          if (res.data.data.role === 1) { // 管理员
            this.$router.push('/evaluationMgmt')
          } else if (res.data.data.role === 2) { // 员工
            this.$router.push('/search')
          }
        } else {
          this.$createToast({
            type: 'error',
            // txt: '登录失败，请检查工号和密码'
            txt: res.data.message
          }).show()
        }
      }).catch((err) => {
        this.$createToast({
          type: 'error',
          txt: '登录失败，请检查工号和密码'
        }).show()
        console.log(err)
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.login .login__title {
  width: 100%;
  margin-bottom: 40px;
  font-size: 28px;
  text-align: center;
}
.login .form {
  box-sizing: border-box;
  width: 100%;
  padding: 0px 20px 0px;
}
.cube-btn {
  margin-top: 20px;
}
.cube-input {
  margin-bottom: 20px;
}
</style>
