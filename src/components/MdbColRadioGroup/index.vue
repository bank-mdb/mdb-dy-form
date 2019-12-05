<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners" :class="inputClass">
    <el-radio
      v-for="(item, index) in radios"
      :key="index"
      :value="item.value"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>
<script>
export default {
  name: "mdb-col-radio-group",
  data() {
    return {};
  },
  props: {
    inputClass: {
      type: String,
      default: ""
    },
    radios: { type: Array, default: () => [] }
  }
};
</script>
