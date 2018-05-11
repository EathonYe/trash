<template>
<div class="login">
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
  <cube-button primary icon="cubeic-search" @click="submit">绑定</cube-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      toastTxt: '正在绑定，请稍候......',
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

      this.$http.post('/bindUser', {
        staffId: this.form.staffId,
        password: this.form.password
      }).then((res) => {
        if (res.data.data) {
          this.$store.commit('setStaff', res.data.data)
          if (res.data.data.role === 1) { // 管理员
            this.$router.push('/evaluationMgmt')
          } else if (res.data.data.role === 2) { // 员工
            this.$router.push('/search')
          }
        } else {
          this.$createToast({
            type: 'error',
            txt: '绑定失败，请检查工号和密码'
          }).show()
        }
      }).catch((err) => {
        this.$createToast({
          type: 'error',
          txt: '绑定失败，请检查工号和密码'
        }).show()
        console.log(err)
      })
    },
    getQueryString (str) {
      const arr = location.search.substring(1).split('&')
      for (let i = 0; i < arr.length; i++) {
        const index = arr[i].indexOf(str)
        if (index > -1) {
          return arr[i].substring(index + str.length + 1)
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  height: 100%;
}
.login .form {
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
