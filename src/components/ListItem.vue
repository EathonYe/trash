<template>
  <router-link :to="/evaluationdetail/ + $attrs.index">
    <div class="list-item">
      住户姓名：{{item.resident.name}}&nbsp;&nbsp;
      检查人员: {{item.staff.name}}
    </div>
  </router-link>  
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
  }
}
</script>

<style>
.list-item {
  line-height: 20px;
  font-size: 14px;
  color: #333;
  padding: 20px 10px;
  background-color: #fff;
  /* margin: 10px 0px; */
  border-bottom: 1px solid #f0f0f0;
}
</style>
