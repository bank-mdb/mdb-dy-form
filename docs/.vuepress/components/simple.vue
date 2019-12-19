<template>
  <div class="simple">
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
import formItems from "./simpleFormItems.js";

export default {
  name: "simple",
  data(){
    return {
      formModel: {
        name: "",
        sex: 2,
        birthday: ""
      },
      formItems: formItems
    }
  }
}
</script>
<style>
.simple .input-normal-size {
  width: 300px;
}
</style>

