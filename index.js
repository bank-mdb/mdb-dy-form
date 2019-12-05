import dyForm from "./src/dy-form/index.vue";
import nonRenderFormItem from "./src/dy-form/nonRenderFormItem";

dyForm.install = function(Vue, opts = {}) {
  Vue.component("dynamic-form", dyForm);
  Vue.component("dy-form", dyForm);
}

export {dyForm, nonRenderFormItem}