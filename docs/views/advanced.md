## 内部嵌套

这里说的内部嵌套是指单个表单组件内部还嵌套其他组件，如 el-select 内部还有 el-option 组件或者el-input组件内的slot组件

#### 效果

<advanced1></advanced1>

#### vue代码

```vue
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
```

#### js配置代码

```js
export default [
  [
    {
      type: "el-input",
      label: "复杂input",
      prop: "name",
      props: {
        placeholder: "请输入姓名",
        clearable: true,
        inputClass: "input-normal-size"
      },
      children: [
        {
          type: "el-select",
          prop: "native",
          children: [
            {
              type: "el-option",
              props: {
                label: "江西省",
                value: "JX"
              }
            },
            {
              type: "el-option",
              props: {
                label: "陕西省",
                value: "SX"
              }
            },
            {
              type: "el-option",
              props: {
                label: "广东省",
                value: "GD"
              }
            }
          ],
          style: {
            width: "100px"
          },
          slot: "prepend"
        },
        {
          type: "el-button",
          props: {
            icon: "el-icon-search"
          },
          slot: "append"
        }
      ]
    }
  ]
]
```

## 复杂校验
可以用方法的方式传入当前vue实例对象（vm）来获取表单配置项，通过vm，可获取到vue实例中的所有data，methods

#### 效果

<advanced2></advanced2>

#### vue代码

```vue
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
```
#### js配置代码

```js
const formItems = vm => {
  let validateName_ch = (rule, val, cb) => {
    if (val === "" && vm.formModel.nameEn === "") {
      return cb(new Error("中文名或英文名至少填一项"));
    } else if (val !== "" && vm.formModel.nameEn === "") {
      vm.$refs.dyForm.validateField("nameEn");
    }
    cb();
  };
  let validateName_en = (rule, val, cb) => {
    if (val === "" && vm.formModel.nameCn === "") {
      return cb(new Error("中文名或英文名至少填一项"));
    } else if (val !== "" && vm.formModel.nameCn === "") {
      vm.$refs.dyForm.validateField("nameCn");
    }
    cb();
  };

  return [
    [
      {
        type: "el-input",
        label: "中文名",
        prop: "nameCn",
        span: 12,
        props: {
          inputClass: "input-normal-size",
          formItemClass: "is-required"
        },
        rules: [
          {
            validator: validateName_ch,
            trigger: "blur"
          }
        ]
      },
      {
        type: "el-input",
        label: "英文名",
        prop: "nameEn",
        span: 12,
        props: {
          inputClass: "input-normal-size",
          formItemClass: "is-required"
        },
        rules: [
          {
            validator: validateName_en,
            trigger: "blur"
          }
        ]
      },
    ],
    [
      {
        type: "div",
        span: 12,
        class: "span-tips",
        children: ["中文名或英文名至少填一项"]
      },
      {
        type: "div",
        span: 12,
        class: "span-tips",
        children: ["中文名或英文名至少填一项"]
      }
    ]
  ]
}

export default formItems;
```
