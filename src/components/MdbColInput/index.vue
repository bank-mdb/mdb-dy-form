<template>
  <el-col :span="span">
    <el-form-item
      :label="label"
      :prop="prop"
      :class="formItemClass"
      :rules="rules"
    >
      <el-input
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="placeholderDefault"
        clearable
        :class="inputClass"
      >
        <slot slot="prepend" />
        <slot slot="append" />
      </el-input>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "mdb-col-input",
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
    placeholder: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: ""
    },
    formItemClass: {
      type: String,
      default: ""
    },
    rules: Array
  },
  computed: {
    placeholderDefault: function() {
      return this.placeholder || `请输入${this.label}`;
    }
  }
};
</script>
