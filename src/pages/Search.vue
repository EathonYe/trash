<template>
<div class="search">
  <div class="form">
  <cube-input 
    v-model="trashNum"
    placeholder="请输入垃圾桶编号"
    clearable
    autofocus>
  </cube-input>
  <cube-button primary icon="cubeic-search" @click="showToast">Search</cube-button>
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

      this.$store.dispatch('getUserData').then(() => {
        this.$router.push('/evaluation')
      }).catch((error) => {
        console.error('getUserData', error)
        this.$createToast({
          txt: '未查询到该编号的信息'
        }).show()
      })
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
