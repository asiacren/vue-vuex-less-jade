<template lang="pug">
  .nav_wrapper
    .nav_item(v-for="nav in navParams" :key="nav.type" @click="icon=nav.icon, onRouter(nav.type)")
      .nav_icon(:class="[nav.icon, { active: icon === nav.icon }]")
      .nav_title(:class="{ color: icon === nav.icon }") {{nav.title}}
</template>

<script>
export default {
  props: {
    meun: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
      navParams: [
        {
          type: 'index',
          title: '首页',
          icon: 'home'
        },
        {
          type: 'detection',
          title: '检测',
          icon: 'detection'
        },
        {
          type: 'found',
          title: '发现',
          icon: 'found'
        },
        {
          type: 'me',
          title: '我的',
          icon: 'me'
        }
      ],
      icon: this.meun
    }
  },
  computed: {
  },
  methods: {
    onRouter (v) {
      this.$router.push({
        name: v
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.nav_wrapper {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  align-items: center;
  align-content: center;
  background: @background-color-fff;
  border: @border-size-1 solid @border-color-e5e5e5;
  text-align: center;
  color: @font-color-999;
  z-index: 99;

  .nav_icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 10px;

    &.home {
      background: url('~@/assets/img/home@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/home-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.detection {
      background: url('~@/assets/img/detection@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/detection-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.found {
      background: url('~@/assets/img/found@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/found-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.me {
      background: url('~@/assets/img/me@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/me-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
  }

  .nav_item {
    flex: 1;

    .color {
      color: @font-color-fd6255;
    }
  }
}
</style>
