<template>
  <div class="advanced2">
    <dy-form
      ref="dyForm"
      label-position="right"
      :model="formModel"
      :formItems="formItems"
      label-width="130px"
      class="form-center"
    ></dy-form>
  </div>
</template>
<script>
import formItems from "./advanced2FormItems.js";

export default {
  data() {
    return {
      formModel: {
        nameCn: "",
        nameEn: ""
      },
      formItems: formItems(this)
    }
  }
}
</script>
<style>
.advanced2 .input-normal-size {
  width: 250px;
}
.advanced2 .span-tips {
    margin-top: -5px;
    font-size: 12px;
    color: #6b7b93;
    margin-bottom: 10px;
    margin-left: 130px;
  }
</style>
