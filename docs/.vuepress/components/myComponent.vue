<template>
  <div>
    <div>我是自定义组件，你输入的值为 {{val}}</div>
    <el-input v-model="val"></el-input>
    <div>地址：{{address}}</div>
  </div>
</template>
<script>
export default {
  name: "myComponent",
  data() {
    return {
      val: this.value
    }
  },
  props: {
    value: [String, Number],
    address: String
  },
  watch: {
    val: function(newVal) {
      this.$emit("input", newVal)
    }
  }
}
</script>

