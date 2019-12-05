<template>
  <el-col :span="span">
    <el-form-item
      :label="label"
      :prop="prop"
      :rules="rules"
      :class="formItemClass"
    >
      <el-select
        v-bind="$attrs"
        v-on="$listeners"
        :class="inputClass"
        :placeholder="placeholder"
        :filterable="filterable"
        :remote="remote"
        :remote-method="remoteMethod"
        :disabled="disabled"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span v-if="customizeOptions" style="float: left">{{
            item[leftField]
          }}</span>
          <span
            v-if="customizeOptions"
            style="float: right; color: #8492a6; font-size: 13px"
            >{{ item[rightField] }}</span
          >
          <span v-if="isCurrency"
            >{{ item[leftField] }}-{{ item[rightField] }}</span
          >
        </el-option>
      </el-select>
    </el-form-item>
    <slot></slot>
  </el-col>
</template>
<script>
export default {
  name: "mdb-col-select",
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
    inputClass: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    rules: Array,
    formItemClass: String,
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 开放平台-账户管理-收款人中、英文名称下拉菜单样式
    customizeOptions: {
      type: Boolean,
      default: false
    },
    // 币种下拉菜单样式
    isCurrency: {
      type: Boolean,
      default: false
    },
    leftField: {
      type: String,
      default: ""
    },
    rightField: {
      type: String,
      default: ""
    },
    remote: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    remoteMethod: { type: Function, default: () => {} }
  }
};
</script>
