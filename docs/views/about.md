##  初衷

* 在使用 el-form 过程中觉得代码嵌套层次比较多，且重复性也比较高，于是想把不同的地方提取出来，通过配置的方式生成表单
* 借鉴了 form-create 表单生成器的配置方式 ，但其API过多，有一定的学习成本，并且给表单赋值必须通过API的方式，有点背离Vue数据绑定的理念
* mdb-dy-form 主要有两大特点
    - 通过配置方式生成表单
    - 表单绑定值支持双向绑定

##  实现方式

* mdb-dy-form 实现对 el-form 的封装，因此 el-form 的属性和方法在 mdb-dy-form 中同样可用，如 model，label-position，validate() 等
* 表单内部各 form-item 是通过组件渲染函数 render [渲染函数](https://cn.vuejs.org/v2/guide/render-function.html) 生成的，每一个配置对象即传入的参数
* 总的配置对象为一个二维数组，第一维表示一行，第二维表示表单项在当前行的位置
* 表单的双向绑定通过 render 函数第二个参数对象的 model 属性实现

## 配置相关属性
| 属性名称 | 说明 | 类型 | 默认值 |
| :------ | :--- | :--- | :----- |
|type|组件名称|String|-|
|label|表单标题|String|-|
|prop|表单绑定属性名称|String|-|
|span|占位列宽(不能大于24)|Number|24|
|props|type组件props中定义的属性|Object|-|
|class|同render函数的class|String|-|
|inputClass|type组件的class|String|-|
|props.inputClass|type组件的class|String|-|
|formItemClass|表单form-item的class|String|-|
|props.formItemClass|表单form-item的class|String|-|
|style|同render函数的style|String|-|
|attrs|同render函数的attrs|Object|-|
|domProps|同render函数的domProps|Object|-|
|directives|同render函数的directives|Array|-|
|slot|同render函数的slot|String|-|
|on|同render函数的on|Object|-|
|rules|表单校验规则|Array|-|

