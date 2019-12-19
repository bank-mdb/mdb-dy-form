<template>
  <div class="customComponent">
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
import formItems from "./customFormItems.js"

export default {
  data() {
    return {
      formModel: {
        name: ""
      },
      formItems: formItems
    }
  }
}
</script>
<style>
.customComponent .input-normal-size {
  width: 300px;
}
</style>

