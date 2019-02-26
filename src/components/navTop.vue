<template lang="pug">
  .nav_wrapper
    .nav_box
      .nav_title {{params.title}}
      .go_back(v-if="params.visible" @click="onGoBack")
        .triangle
</template>

<script>

export default {
  props: {
    params: {
      type: Object,
      default: () => {
        return {
          visible: true,
          title: '标题'
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    onGoBack () {
      if (/(resultSdk)/.test(this.$route.name)) {
        this.$router.push({
          name: 'index'
        })
      } else {
        this.$router.go(-1)
      }
    },
    changeTitle (title) {
      this.params.title = title
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';

.nav_wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  background: @background-color-fff;
  z-index: 99;

  .nav_box {
    position: relative;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    font-size: @font-36;
    border-bottom: @border-size-1 solid @border-color-e5e5e5;
  }
  .triangle {
    position: absolute;
    left: @mp-30;
    top: @mp-35;
    width: 20px;
    height: 20px;
    border-left: 2px solid @border-color-000;
    border-bottom: 2px solid @border-color-000;
    transform: rotate(45deg);
  }

  .go_back {
    position: absolute;
    width: 80px;
    height: 90px;
    left: 0;
  }
}
</style>
