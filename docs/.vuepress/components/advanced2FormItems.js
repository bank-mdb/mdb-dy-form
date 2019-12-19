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