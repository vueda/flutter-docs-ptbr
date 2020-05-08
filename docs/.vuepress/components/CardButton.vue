<template>
  <a class="card" :href="link">
    <div class="card-body">
      <header class="card-title"><slot /></header>
    </div>
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
.card
    flex-grow 1
    border 1px solid #80808042
    margin-right 0.5rem
    margin-left 0.5rem
    border-radius 4px
    cursor pointer
    text-decoration none !important
    :hover
        box-shadow inset 0 -5px 0 0 $accentColor

.card-body
    padding 1.25rem
    :hover
        box-shadow none

.card-title
    font-size 1.25rem
    text-align center
    text-decoration none
</style>
