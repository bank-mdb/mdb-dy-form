<template>
  <el-col :span="span">
    <el-form-item
      :label="label"
      :prop="prop"
      :class="formItemClass"
      :rules="rules"
    >
      <el-date-picker
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="placeholderDefault"
        clearable
        :class="inputClass"
        :type="datePickerType"
        :value-format="valueFormat"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "mdb-col-date-picker",
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
    datePickerType: {
      type: String,
      default: "date"
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd"
    },
    pickerOptions: {
      type: Object,
      default: () => {}
    },
    rules: Array
  },
  computed: {
    placeholderDefault: function() {
      return this.placeholder || `请选择${this.label}`;
    }
  }
};
</script>
