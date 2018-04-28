<template>
  <router-link :to="/evaluationdetail/ + item.id">
    <div class="list-item">
      {{item.item.text}}
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
