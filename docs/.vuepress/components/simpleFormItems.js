export default [
  [
    {
      type: "el-input",
      label: "姓名",
      prop: "name",
      span: 12,
      props: {
        placeholder: "请输入姓名",
        clearable: true,
        inputClass: "input-normal-size"
      },
      rules: [
        {
          message: "请输入姓名",
          required: true,
          trigger: "blur"
        }
      ]
    },
    {
      type: "el-input",
      label: "你的姓名",
      prop: "name",
      span: 12,
      props: {
        placeholder: "请输入姓名",
        clearable: true,
        inputClass: "input-normal-size"
      }
    }
  ],
  [
    {
      type: "el-select",
      label: "性别",
      prop: "sex",
      span: 12,
      props: {
        placeholder: "请选择性别",
        clearable: true,
        inputClass: "input-normal-size"
      },
      children: [
        {
          type: "el-option",
          props: {
            label: "女",
            value: 1
          }
        },
        {
          type: "el-option",
          props: {
            label: "男",
            value: 2
          }
        }
      ],
      rules: [
        {
          message: "请选择性别",
          required: true,
          trigger: "blur"
        }
      ]
    },
  ],
  [
    {
      type: "el-date-picker",
      label: "出生日期",
      prop: "birthday",
      span: 12,
      props: {
        placeholder: "请选择出生日期",
        clearable: true,
        type: "date",
        inputClass: "input-normal-size"
      }
    }
  ]
]