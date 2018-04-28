<template>
  <div style="overflow-x: hidden;">
    <Header title="评价管理" />
    <div class="list">
      <list-item v-for="item in listData" :item="item" :key="item.id" />
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
      showEnd: false
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
      const viewH = document.documentElement.clientHeight
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop
      if (viewH + scrollH + 1 >= sumH) {
        this.getListData()
      }
    },
    getListData () {
      const length = this.listData.length
      this.$store.dispatch('getListData').then((data) => {
        if (this.$store.state.listData.length === length) {
          this.showEnd = true
        }
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
    this.getListData()
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollMethod)
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
