<template>
  <div class="block">
    <div class="block__title">{{title}}</div>
    <div class="block__content">
      <cube-button v-for="(item, index) in data" 
        :key="index" 
        :outline="!item.active" 
        :primary="item.active"
        @click="handleClick(item)">{{item.name}}</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    title: {
      type: String
    },
    data: {
      type: Array
    }
  },
  methods: {
    handleClick (item) {
      if (!item.active) {
        this.data.forEach(element => {
          element.active = false
        })
        item.active = true
      } else {
        item.active = false
      }
    }
  }
}
</script>

<style scoped>
.block {
  margin-top: 20px;
  padding: 0px 10px;
  background-color: #fff;
}
.block .block__title {
  line-height: 1.5rem;
  font-size: 0.4rem;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.block .block__content {
  min-height: 3rem;
  padding: 10px 0px;
}
.block .block__content .cube-btn {
  display: inline-block;
  width: 2.5rem;
  margin: 8px;
  padding: 0.3rem;
  font-size: 0.35rem;
}
.block .block__content .cube-btn-outline::after {
  border-radius: 2px;
}
.block .block__content .cube-btn-primary::after {
  border-radius: 2px;
}
</style>
