<template>
  <div :class="inputClass" v-html="content"></div>
</template>
<script>
export default {
  name: "mdb-col-title",
  data() {
    return {};
  },
  props: {
    inputClass: String,
    content: String
  }
};
</script>
