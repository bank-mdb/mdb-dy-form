<template>
  <el-col :span="span">
    <el-form-item
      :label="label"
      :prop="prop"
      :class="formItemClass"
      :rules="rules"
    >
      <div class="flex-row" :class="inputClass">
        <el-input
          v-bind="$attrs"
          v-on="$listeners"
          :placeholder="placeholderDefault"
          clearable
        ></el-input>
        <el-button
          type="primary"
          @click="getCaptchaHandle"
          class="send-button"
          :disabled="buttonDisabled"
          >{{ buttonContent }}</el-button
        >
      </div>
    </el-form-item>
  </el-col>
</template>
<script>
import path from "../../api/path";

export default {
  name: "mdb-col-captcha",
  data() {
    return {
      buttonContent: "获取验证码",
      buttonDisabled: false,
      delayTime: 60
    };
  },
  inject: ["fatherForm"],
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
      default: "请输入验证码"
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
    sendTo: {
      type: String,
      default: ""
    },
    sendType: {
      // 验证码发送方式  phone或email
      type: String,
      default: "phone"
    },
    mobileAreaCode: {
      type: String,
      default: ""
    },
    biz: {
      type: String,
      default: ""
    },
    rules: Array
  },
  computed: {
    placeholderDefault: function() {
      return this.placeholder || `请输入${this.label}`;
    },
    apiPath: function() {
      let api = "";
      switch (this.sendType) {
        case "email":
          api = path.SEND_MAIL_CAPTCHA;
          break;
        case "phone":
          api = path.SEND_SMS_CAPTCHA;
          break;
      }
      return api;
    }
  },
  methods: {
    getCaptchaHandle() {
      this.fatherForm.$refs.elForm.validateField(this.sendTo, async err => {
        if (!err) {
          try {
            this.buttonDisabled = true;
            let res = await this.$http.post(this.apiPath, {
              msgTo: this.fatherForm.model[this.sendTo],
              biz: this.biz,
              mobileAreaCode: this.mobileAreaCode
                ? this.fatherForm.model[this.mobileAreaCode]
                : ""
            });
            this.setButtonContent(this.delayTime);
            this.$emit("send-captcha-success", {
              sendType: this.sendType,
              captchaKey: res.data.key
            });
          } catch (err) {
            console.log(err);
            this.buttonDisabled = false;
          }
        }
      });
    },
    setButtonContent(num) {
      if (num >= 0) {
        this.buttonContent = `已发送(${num}s)`;
        setTimeout(() => this.setButtonContent(--num), 1000);
      } else {
        this.buttonContent = "获取验证码";
        this.buttonDisabled = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.send-button {
  margin-left: 20px;
  width: 120px;
}
</style>
