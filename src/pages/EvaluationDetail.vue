<template>
  <div>
    <Header title="评价详情" />

    <div class="detail">
      <div class="row">
        <label for="">姓名：</label>
        <span>{{detailData.item.text}}</span>
      </div>
      <div class="row">
        <label for="">联系电话：</label>
        <span></span>
      </div>
      <div class="row">
        <label for="">家庭住址：</label>
        <span></span>
      </div>
      <div class="row">
        <label for="">厨余垃圾：</label>
        <span></span>
      </div>
      <div class="row">
        <label for="">其他垃圾：</label>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'EvaluationDetail',
  computed: {
    detailData () {
      return this.$store.state.listData[this.$route.params.id]
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
.detail {
  margin-top: 20px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
}
.row {
  padding: 15px 10px;
}
</style>
