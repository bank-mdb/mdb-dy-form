<!--
  该组件只用作纯文本展示用，不绑定任何字段
-->
<template>
  <el-col :span="span">
    <el-form-item :label="label" :class="formItemClass">
      <div :class="inputClass" v-html="content"></div>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "mdb-col-label",
  data() {
    return {};
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    label: {
      type: String,
      default: ""
    },
    content: {
      type: String
    },
    inputClass: {
      type: String,
      default: ""
    },
    formItemClass: {
      type: String,
      default: ""
    }
  }
};
</script>
