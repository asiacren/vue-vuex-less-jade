<template lang="pug">
  .container
    NavTop(:params="navTopParams")
    h2 home
    NavBottom
</template>

<script>
import NavTop from '@/components/navTop'
import NavBottom from '@/components/navBottom'
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      navTopParams: {
        visible: false,
        title: '首页'
      }
    }
  },
  components: {
    NavTop,
    NavBottom
  },
  computed: {
    ...mapState(['userInfoData', 'sign'])
  },
  created () {
    this.SIDN_DATA(false)
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['USER_INFO', 'SIDN_DATA'])
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common';

</style>
