## 自定义组件说明

* 自定义组件只能有一个双向绑定值，即支持v-model的属性，这个属性在组件中有一个默认名字 value ，且当需要修改绑定值时，触发一个input事件，将值向上传递
* 如果该组件中还有其他 props 属性需要从外部获取，可在配置项的props属性中配置
* 如果组件需和其他组件交互，可在组件内触发其他自定义事件，并在 dy-form 中接收

#### 自定义组件示例 vue代码

```vue
<template>
  <div>
    <div>我是自定义组件，你输入的值为 {{val}}</div>
    <el-input v-model="val"></el-input>
    <div>地址：{{address}}</div>
  </div>
</template>
<script>
export default {
  name: "myComponent",
  data() {
    return {
      val: this.value
    }
  },
  props: {
    value: [String, Number],
    address: String
  },
  watch: {
    val: function(newVal) {
      this.$emit("input", newVal)
    }
  }
}
</script>
```

## 配置自定义组件

#### 效果

<customComponent></customComponent>

#### vue 代码

```vue
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
```

#### js配置代码

```js
export default [
  [
    {
      type: "myComponent",
      label: "姓名",
      prop: "name",
      props: {
        address: "珠海市横琴新区澳门青年创业谷",
        inputClass: "input-normal-size"
      }
    }
  ]
]
```