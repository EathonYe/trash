import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://rj.zzx1983.com:30044/app'

export default new Vuex.Store({
  state: {
    trashNum: '',
    userData: {
      username: '方名',
      phone: '13003671139',
      address: '现代景苑'
    },
    pages: 0,
    total: 50,
    listData: []
  },
  mutations: {
    updateTrashNum (state, data) {
      state.trashNum = data
    },
    setUserData (state, data) {
      state.userData = data
    },
    setListData (state, data) {
      state.listData = state.listData.concat(data)
    }
  },
  actions: {
    getUserData (context) {
      axios.get('/trash/getUser', {
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
      if (context.state.pages < 5) {
        const data = []
        for (let i = 1; i <= 10; i++) {
          data.push({
            id: context.state.pages * 10 + i,
            item: {
              text: `这是第${context.state.pages * 10 + i}个评价`
            }
          })
        }
        context.state.pages += 1
        context.commit('setListData', data)
      }
    }
  }
})
