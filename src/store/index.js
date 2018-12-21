import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// axios.defaults.baseURL = 'http://rj.zzx1983.com:30044/weixin'
// axios.defaults.baseURL = 'http://srk.118448.com/weixin'
axios.defaults.baseURL = 'http://localhost:8080/weixin'

export default new Vuex.Store({
  state: {
    // 登录用户信息
    staff: {
    },
    // 当前垃圾桶编号
    trashNum: '',
    // 住户信息
    userData: {
      name: '',
      phone: '',
      address: ''
    },
    pageNo: 1,
    pageSize: 15,
    total: 10,
    listData: []
  },
  mutations: {
    setStaff (state, data) {
      state.staff = data
    },
    updateTrashNum (state, data) {
      state.trashNum = data
    },
    setUserData (state, data) {
      state.userData = data
    },
    setListData (state, data) {
      state.listData = state.listData.concat(data)
    },
    setTotal (state, data) {
      state.total = data
    },
    setPageNo (state, data) {
      state.pageNo = data
    }
  },
  actions: {
    getUserData (context) {
      axios.get('/getUser', {
        params: {
          trashId: context.state.trashNum
        }
      }).then((res) => {
        context.commit('setUserData', res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getListData (context) {
      // if (context.state.pages < 5) {
      //   const data = []
      //   for (let i = 1; i <= 10; i++) {
      //     data.push({
      //       id: context.state.pages * 10 + i,
      //       item: {
      //         text: `这是第${context.state.pages * 10 + i}个评价`
      //       }
      //     })
      //   }
      //   context.state.pages += 1
      //   context.commit('setListData', data)
      // }

      if (context.state.listData.length < context.state.total) {
        axios.post('/getRecord', {
          pageNo: context.state.pageNo,
          pageSize: context.state.pageSize
        }).then((res) => {
          context.commit('setListData', res.data.data)
          context.commit('setTotal', res.data.total)
          context.commit('setPageNo', context.state.pageNo + 1)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
})
