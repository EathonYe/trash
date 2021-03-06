import 'amfe-flexible'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  CheckboxGroup,
  Radio,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  CascadePicker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Upload
} from 'cube-ui'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(Button)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Upload)

// axios.defaults.baseURL = 'http://rj.zzx1983.com:30044/weixin'
// axios.defaults.baseURL = 'http://srk.118448.com/weixin'
const baseURL = 'http://localhost:3000'
axios.defaults.baseURL = baseURL
Vue.prototype.$http = axios
Vue.prototype.$_preUrl = baseURL

Vue.config.productionTip = false

Vue.prototype.$getQueryString = function (str) {
  const arr = location.search.substring(1).split('&')
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].indexOf(str)
    if (index > -1) {
      return arr[i].substring(index + str.length + 1)
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
