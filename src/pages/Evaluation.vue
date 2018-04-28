<template>
  <div class="evaluation">
    <Header :title="title"></Header>

    <div class="evaluation__user evaluation__block">
      <div class="evaluation__user-row" style="padding-right: 0;">
        <div class="evaluation__user-left">
          <div class="evaluation__user-row">
            <label>用户名</label>
            <span>{{userData.username}}</span>
          </div>
          <div class="evaluation__user-row">
            <label>联系电话</label>
            <span>{{userData.phone}}</span>
          </div>
        </div>
        <div class="evaluation__user-upload">
          <cube-upload/>
        </div>
      </div>
      <div class="evaluation__user-row">
        <label>家庭住址</label>
        <span>{{userData.address}}</span>
      </div>
    </div>

    <div style="font-size: 0.4rem;margin: 15px 10px;">本次垃圾分类评价</div>
    <Block title="厨余垃圾" :data="data1"></Block>
    <Block title="其他垃圾" :data="data2"></Block>

    <div class="evaluation__submit">
      <cube-button @click="handleSubmit">提交</cube-button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Block from '@/components/Block'

export default {
  name: 'Evaluation',
  data () {
    return {
      title: '提交评分',
      data1: [
        {
          active: false,
          name: '优秀'
        },
        {
          active: false,
          name: '良好'
        },
        {
          active: false,
          name: '合格'
        },
        {
          active: false,
          name: '一般'
        },
        {
          active: false,
          name: '差'
        }
      ],
      data2: [
        {
          active: false,
          name: '优秀'
        },
        {
          active: false,
          name: '良好'
        },
        {
          active: false,
          name: '合格'
        },
        {
          active: false,
          name: '一般'
        },
        {
          active: false,
          name: '差'
        }
      ]
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    }
  },
  methods: {
    handleSubmit () {
      this.$createToast({
        txt: '正在提交，请稍候......'
      }).show()

      setTimeout(() => {
        this.$createToast({
          type: 'correct',
          txt: '提交成功！'
        }).show()

        this.handleReset()
      }, 2000)
    },
    handleReset () {
      this.data1.forEach((value) => {
        value.active = false
      })
      this.data2.forEach((value) => {
        value.active = false
      })
    }
  },
  components: {
    Header,
    Block
  }
}
</script>

<style>
.evaluation__block {
  background-color: #fff;
  margin-top: 0.5rem;
}
.evaluation .evaluation__user {
  font-size: 0.4rem;
  color: #000;
}
.evaluation__user-row {
  line-height: 1.5rem;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 0px 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.evaluation__user > .evaluation__user-row:first-child {
  height: 3rem;
}
.evaluation__user-left {
  float: left;
  width: calc(100% - 3rem);
}
.evaluation__user-left .evaluation__user-row {
  padding: 0 0 0 0;
}
.evaluation__user-left .evaluation__user-row:last-child {
  border-bottom-width: 0;
}
.evaluation .evaluation__user-upload {
  box-sizing: border-box;
  float: left;
  width: 3rem;
  height: 3rem;
  /* border-left: 1px solid #f0f0f0; */
}
.evaluation__user-row label {
  display: inline-block;
  line-height: 1;
  padding: 0px 20px 0px 0px;
}
.evaluation__user-row span {
  display: inline-block;
  line-height: 1;
  font-size: 0.4rem;
  color: #aeaeae;
}

/*upload*/
.evaluation__user-upload .cube-upload {
  width: 100%;
  height: 100%;
}
.evaluation__user-upload .cube-upload .cube-upload-btn {
  margin: 0;
}
.evaluation__user-upload .cube-upload .cube-upload-btn-def {
  width: 3rem;
  height: 3rem;
  border: none;
}

/*submit*/
.evaluation__submit {
  margin: 30px 10px;
}
</style>
