<template lang="pug">
  .container
    NavTop
    h2 found
    NavBottom(:meun="meun")
</template>

<script>
import NavTop from '@/components/navTop'
import NavBottom from '@/components/navBottom'

export default {
  data () {
    return {
      meun: 'found'
    }
  },
  components: {
    NavTop,
    NavBottom
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common';

</style>
