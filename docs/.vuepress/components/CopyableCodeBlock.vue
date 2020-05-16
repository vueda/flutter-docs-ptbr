<template>
  <pre class="code-box">
    <code class="code"><div class="code-line" v-for="(block, index) in codeBlocks">{{dir}} {{ block }}</div></code>
    <i v-tooltip="tooltip" @click="copy" class="icon-docs copy-icon"></i>
  </pre>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    contents: {
      type: Array,
      default: () => [],
    },
    dir: {
      type: String,
      default: "C:\src>",
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
      this.$clipboard(this.content || this.contents.join(" && "));
      this.tooltip.content = "Copiado!";
      setTimeout(() => {
        this.tooltip.content = "Clique para copiar";
      }, 800);
    },
  },
  computed: {
    codeBlocks() {
      return this.content ? [this.content] : this.contents;
    },
  },
};
</script>

<style lang="stylus" scoped>
.copy-icon
    color #7d7d7d
    float right
    cursor pointer
    margin-bottom 5px

.code-box
    background-color #f8f9fa
    border 1px solid #dee2e6
    display flex

.code
    color #212529
    flex-grow 9
</style>
