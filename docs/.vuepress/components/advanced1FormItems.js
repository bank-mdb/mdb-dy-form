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