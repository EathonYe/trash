<template>
<div class="search">
  <div class="form">
  <cube-input 
    v-model="trashNum"
    placeholder="请输入垃圾桶编号"
    clearable
    autofocus>
  </cube-input>
  <cube-button primary icon="cubeic-search" @click="showToast">搜索</cube-button>
  </div>  
</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      toastTxt: '正在查询，请稍候......'
    }
  },
  computed: {
    trashNum: {
      get () {
        return this.$store.state.trashNum
      },
      set (newValue) {
        this.$store.commit('updateTrashNum', newValue)
      }
    }
  },
  methods: {
    showToast () {
      this.$createToast({
        txt: this.toastTxt
      }).show()

      if (this.trashNum) {
        this.$http.get('/getUser', {
          params: {
            trashId: this.$store.state.trashNum
          }
        }).then((res) => {
          if (res.data.data) {
            this.$store.commit('setUserData', res.data.data)
            this.$router.push('/evaluation')
          } else {
            this.$createToast({
              type: 'error',
              txt: '未查询到该编号的信息'
            }).show()
          }
        }).catch((err) => {
          this.$createToast({
            type: 'error',
            txt: '未查询到该编号的信息'
          }).show()
          console.log(err)
        })
      } else {
        this.$createToast({
          type: 'error',
          txt: '请输入垃圾桶编号'
        }).show()
      }

      // this.$store.dispatch('getUserData').then((res) => {
      //   console.log(res)
      //   this.$router.push('/evaluation')
      // }).catch((error) => {
      //   console.error('getUserData', error)
      //   this.$createToast({
      //     txt: '未查询到该编号的信息'
      //   }).show()
      // })
      // setTimeout(() => {
      //   this.$router.push('/evaluation')
      // }, 1000)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
  height: 100%;
}
.search .form {
  width: 100%;
  padding: 0px 20px 0px;
}
.cube-btn {
  margin-top: 20px;
}
</style>
