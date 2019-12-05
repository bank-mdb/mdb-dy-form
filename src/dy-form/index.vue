<template>
  <el-form
    ref="elForm"
    :model="model"
    v-bind="$attrs"
    v-on="$listeners"
    class="dy-form"
  >
    <el-row
      v-for="(row, index) in formItems"
      :key="index"
      v-bind:class="
        row.length > 0 && row[0].rowClass
          ? row[0].rowClass
          : 'dy-form-row-' + (index + 1)
      "
    >
      <div v-for="(formItem, idx) in row" :key="idx">
        <dynamic-item
          v-if="nonRenderFormItemData.includes(formItem.type)"
          :options="formItem"
          v-bind="$attrs"
          v-on="$listeners"
          v-model="model[formItem.prop]"
          :propAppend.sync="model[formItem.props.propAppend]"
          :propPrepend.sync="model[formItem.props.propPrepend]"
        ></dynamic-item>
        <dynamic-multi-items
          v-else-if="
            formItem.type === 'el-col' &&
              formItem.children &&
              formItem.children.length > 0
          "
          :options="formItem"
        ></dynamic-multi-items>
        <dynamic-col
          v-else
          :options="formItem"
          v-bind="$attrs"
          v-on="$listeners"
          v-model="model[formItem.prop]"
        ></dynamic-col>
      </div>
    </el-row>
  </el-form>
</template>
<script>
import dynamicItem from "./dynamicItem";
import dynamicCol from "./dynamicCol";
import dynamicMultiItems from "./dynamicMultiItems";
import nonRenderFormItem from "./nonRenderFormItem";

export default {
  name: "dynamic-form",
  components: {
    dynamicItem,
    dynamicCol,
    dynamicMultiItems
  },
  provide() {
    return {
      fatherForm: this
    };
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    formItems: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      nonRenderFormItemData: nonRenderFormItem
    };
  },
  methods: {
    resetFields() {
      this.$refs.elForm.resetFields();
    },
    validate(callback) {
      this.$refs.elForm.validate(result => {
        callback(result);
      });
    },
    validateField(prop, callback) {
      this.$refs.elForm.validateField(prop, callback);
    },
    clearValidate() {
      this.$refs.elForm.clearValidate();
    }
  }
}
</script>
