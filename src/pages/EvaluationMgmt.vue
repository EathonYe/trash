<template>
  <div style="overflow-x: hidden;">
    <Header title="评价管理" :showBack="false" />
    <div class="list">
      <list-item v-for="(item, index) in listData" :item="item" :key="item._id" :index="index" />
      <!-- <cube-button @click="getListData" v-show="!showEnd">加载更多</cube-button> -->
      <div class="show-end" v-show="showEnd">到底啦~~~</div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import ListItem from '../components/ListItem'

export default {
  name: 'EvaluationMgmt',
  data () {
    return {
      showEnd: false,
      isXHR: false
    }
  },
  computed: {
    listData () {
      return this.$store.state.listData
    }
  },
  methods: {
    scrollMethod () {
      const sumH = document.documentElement.scrollHeight || document.body.scrollHeight
      const viewH = document.documentElement.clientHeight || document.body.clientHeight
      const scrollH = document.documentElement.scrollTop || document.body.scrollTop
      if (!this.isXHR && viewH + scrollH + 1 >= sumH) {
        this.isXHR = true
        this.getListData()
      }
    },
    getListData () {
      this.$store.dispatch('getListData').then(() => {
        if (this.$store.state.listData.length === this.$store.state.total) {
          this.showEnd = true
        }
        this.isXHR = false
      })
    }
  },
  components: {
    Header,
    ListItem
  },
  created () {
  },
  mounted () {
    document.addEventListener('scroll', this.scrollMethod)
    if (this.$store.state.listData.length === 0) {
      this.getListData()
    } else if (this.$store.state.listData.length === this.$store.state.total) {
      this.showEnd = true
    }
    // this.getListData()
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollMethod)
    this.$store.commit('setListData', [])
  }
}
</script>

<style scoped>
.list {
  margin-top: 20px;
  overflow: hidden;
}
.show-end {
    text-align: center;
    padding: 10px;
    font-size: 14px;
    color: #aeaeae;
  }
</style>
