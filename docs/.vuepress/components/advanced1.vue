<template>
  <div class="advanced-1">
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
import formItems from "./advanced1FormItems.js";
export default {
  data() {
    return {
      formModel: {
        name: "",
        native: "JX"
      },
      formItems: formItems
    }
  }
}
</script>
<style>
.advanced-1 .input-normal-size {
  width: 600px;
}
</style>
