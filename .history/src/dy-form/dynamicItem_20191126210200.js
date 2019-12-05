import {
  BusinessNature,
  PhoneInput,
  AmountInput,
  LoginPassword,
  PayPassword,MdbColInput,
  MdbColDatePicker,
  MdbColCaptcha,
  MdbColLabel,
  MdbColSelect,
  MdbColTitle
} from "../components/index";
import { createChildrenElements } from "@/utils/util";

export default {
  name: "dynamic-item",
  components: {
    BusinessNature,
    PhoneInput,
    AmountInput,
    LoginPassword,
    PayPassword,MdbColInput,
    MdbColDatePicker,
    MdbColCaptcha,
    MdbColLabel,
    MdbColSelect,
    MdbColTitle
  },
  inject: ["fatherForm"],
  props: {
    value: [String, Number, Object, Array, Boolean],
    propAppend: {
      type: String,
      default: ""
    },
    propPrepend: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      required: true
    }
  },
  render: function(h) {
    let self = this;
    let eventOn = self.options.on || {};
    return h(
      self.options.type,
      {
        model: {
          value: self.value,
          callback: newVal => {
            self.$emit("input", newVal);
          }
        },
        props: {
          ...self.$attrs,
          ...self.options.props,
          label:
            self.options.label ||
            (self.options.props && self.options.props.label),
          prop:
            self.options.prop ||
            (self.options.props && self.options.props.prop),
          span:
            self.options.span ||
            (self.options.props && self.options.props.span),
          formItemClass:
            self.options.formItemClass ||
            (self.options.props && self.options.props.formItemClass),
          inputClass:
            self.options.inputClass ||
            (self.options.props && self.options.props.inputClass),
          propAppend: self.propAppend,
          propPrepend: self.propPrepend,
          rules: self.options.rules
        },
        class: self.options.class,
        style: self.options.style,
        attrs: self.options.attrs,
        domProps: self.options.domProps,
        on: {
          ...eventOn,
          ...self.$listeners,
          // v-model之外的双向绑定
          "update:propPrepend": self.updateInputPrepend,
          "update:propAppend": self.updateInputAppend
        },
        directives: self.options.directives,
        slot: self.options.slot,
        ref: self.options.ref
      },
      createChildrenElements(h, self.options.children, self)
    );
  },
  methods: {
    updateInputPrepend(val) {
      this.$emit("update:propPrepend", val);
    },
    updateInputAppend(val) {
      this.$emit("update:propAppend", val);
    }
  }
}