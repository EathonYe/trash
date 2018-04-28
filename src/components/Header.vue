<template>
  <div class="header">
    <i 
      class="cubeic-back"
      @click="$router.go(-1)"></i>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  line-height: 1.5rem;
  font-size: 0.5rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 2px 9px 0px rgba(3, 3, 3, .3);
}
.header i {
  position: absolute;
  font-size: 0.8rem;
  left: 0.5rem;
}
/* .header span {
  display: inline-block;
  margin-left: -0.5rem;
} */
</style>
