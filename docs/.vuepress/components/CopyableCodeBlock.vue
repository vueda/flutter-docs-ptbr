<template>
  <pre :class="{ 'code-box': isWin, 'dark-code-box': isMacOrLinux }">
    <code :class="{ 'code': isWin, 'dark-code': isMacOrLinux }"><div v-for="block in codeBlocks">{{currentDir}} {{ block }}</div></code>
    <i v-tooltip="tooltip" @click="copy" class="icon-docs copy-icon"></i>
  </pre>
</template>

<script>
const dirs = {
  win: "C:\src>",
  mac_lin: "$",
};

export default {
  props: {
    dir: {
      type: String,
      default: "",
    },
    content: {
      type: [Array, String],
      default: () => [],
    },
    theme: {
      type: String,
      default: "mac_lin",
      validator: function(value) {
        return ["win", "mac_lin"].indexOf(value) !== -1;
      },
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
      this.$clipboard(this.codeBlocks.join(" && "));
      this.tooltip.content = "Copiado!";
      setTimeout(() => {
        this.tooltip.content = "Clique para copiar";
      }, 800);
    },
  },

  computed: {
    currentDir() {
      return this.dir || dirs[this.theme];
    },
    codeBlocks() {
      return typeof this.content === "string" ? [this.content] : this.content;
    },
    isMacOrLinux() {
      return this.theme === "mac_lin";
    },
    isWin() {
      return this.theme === "win";
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

.dark-code-box
    background-color #212121
    border 1px solid #dee2e6
    display flex

.code-box
    background-color #f8f9fa
    border 1px solid #dee2e6
    display flex

.dark-code
    color #64DD17
    flex-grow 9

.code
    color #212529
    flex-grow 9
</style>
