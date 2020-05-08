<template>
  <pre class="code-box">
    <code class="code">{{dir}}> {{ content }}</code><i v-tooltip="tooltip" @click="copy" class="icon-docs copy-icon"></i>
  </pre>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      default: "C:\src",
    },
  },
  data() {
    return {
      tooltip: {
        content: "Clique para copiar",
        placement: "top",
        boundariesElement: "body",
      },
    };
  },
  methods: {
    copy() {
      this.$clipboard(this.content);
      this.tooltip.content = "Copiado!";
      setTimeout(() => {
        this.tooltip.content = "Clique para copiar";
      }, 800);
    },
  },
};
</script>

<style lang="stylus" scoped>
.copy-icon
    color #7d7d7d
    float right
    cursor pointer

.code-box
    background-color #f8f9fa
    border 1px solid #dee2e6

.code
    color #212529
</style>
