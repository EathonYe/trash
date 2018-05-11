<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      if (from.path === '/') {
        this.transitionName = 'slide-left'
      } else if (to.path === '/' || to.path === '/search') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  created () {
    this.$http.get('/query')
      .then(res => {
        if (res.data.data) {
          this.$store.commit('setStaff', res.data.data)
          if (res.data.data.role === 1) {
            this.$router.push('/evaluationMgmt')
          } else {
            this.$router.push('/search')
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
}

.router-view {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      /* height: auto; */
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
.slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      transform: translate(60px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      transform: translate(-60px, 0);
    }
</style>
