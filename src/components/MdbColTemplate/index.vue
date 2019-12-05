<template>
  <el-col :span="span">
    <el-form-item :label="label" :prop="prop" :rules="rules"
      ><slot
    /></el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "mdb-col-template",
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
    prop: {
      type: String,
      default: ""
    },
    rules: Array
  }
};
</script>
