import dyForm from "./src/dy-form/index.vue";
import nonRenderFormItem from "./src/dy-form/nonRenderFormItem";

dyForm.install = function(Vue, opts = {}) {
  console.log("install");
  Vue.component("dynamic-form", dyForm);
  Vue.component("dy-form", dyForm);
}

// if(typeof window !== "undefined" && window.Vue) {
//   console.log("test");
//   install(window.Vue);
// }

export {dyForm, nonRenderFormItem}