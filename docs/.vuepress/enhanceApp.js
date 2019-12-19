import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dyForm from "../../src/dy-form/index.vue";

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component("dy-form", dyForm);
  Vue.use(Element)
}