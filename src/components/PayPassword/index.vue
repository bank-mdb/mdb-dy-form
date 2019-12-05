<!--支付密码表单-->
<template>
  <el-col :span="span">
    <el-form-item
      :label="label"
      :prop="prop"
      :class="formItemClass"
      :rules="rules"
    >
      <el-tooltip
        effect="dark"
        placement="right"
        popper-class="tooltip-popper-background"
      >
        <ul slot="content">
          <li>与登录密码不同</li>
          <li>6-20位字符</li>
          <li>只能包含大小写字母、数字以及标点符号（除空格）</li>
          <li>必须同时包含大写字母、小写字母和数字</li>
        </ul>
        <el-input
          v-bind="$attrs"
          v-on="$listeners"
          :placeholder="placeholder"
          clearable
          show-password
          :class="inputClass"
        ></el-input>
      </el-tooltip>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "PayPassword",
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
      default: "交易密码"
    },
    placeholder: {
      type: String,
      default: "请输入交易密码"
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
  }
};
</script>
