<template>
  <a :href="link" class="primary-button">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.primary-button
    color #fff
    background-color #1389FD
    border-color #1389FD
    font-weight 500
    padding 0.5rem
a
  text-decoration none !important
</style>
