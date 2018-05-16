<template>
  <div>
    <Header title="评价详情" />

    <div class="detail">
      <div class="row">
        <label for="">检查人员：</label>
        <span>{{detailData.staffName}}</span>
      </div>
      <div class="row">
        <label for="">住户姓名：</label>
        <span>{{detailData.userName}}</span>
      </div>
      <!-- <div class="row">
        <label for="">联系电话：</label>
        <span>{{detailData.phone}}</span>
      </div>
      <div class="row">
        <label for="">家庭住址：</label>
        <span>{{detailData.address}}</span>
      </div> -->
      <div class="row">
        <label for="">厨余垃圾：</label>
        <span>{{computedRecyclable}}</span>
      </div>
      <div class="row">
        <label for="">其他垃圾：</label>
        <span>{{computedNrecyclable}}</span>
      </div>
      <div class="row">
        <label for="">垃圾重量：</label>
        <span>{{detailData.weight}}</span>
      </div>
      <div class="row">
        <label for="">照片：</label>
        <img :src="detailData.photo" alt="" width="100%">
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
    },
    computedRecyclable () {
      switch (this.detailData.recyclable) {
        case 1: return '差'
        case 2: return '一般'
        case 3: return '合格'
        case 4: return '良好'
        case 5: return '优秀'
      }
    },
    computedNrecyclable () {
      switch (this.detailData.nrecyclable) {
        case 1: return '差'
        case 2: return '一般'
        case 3: return '合格'
        case 4: return '良好'
        case 5: return '优秀'
      }
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
