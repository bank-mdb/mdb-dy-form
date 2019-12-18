const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", "..", dir);
}

const sidebarData = [
  ["views/about", "关于mdb-dy-form"],
  ["views/simple", "常规使用"],
  ["views/advanced", "进阶使用"],
  ["views/custom", "使用自定义组件"]
]

module.exports = {
  title: "UI 组件库模板工程",
  description: "用于构建 UI组件库模板",
  head: [
    ["link", {
      rel: "shortcut icon",
      href: "/favicon.ico"
    }]
  ],
  themeConfig: {
    nav: [{
      text: "Home",
      link: "/"
    }],
    sidebar: sidebarData
  },
  markdown: {
    lineNumbers: true
  },
  sass: {
    indentedSyntax: true
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("docs"),
        "@src": resolve("src"),
        "@scss": resolve("src/style"),
        "@components": resolve("src/components"),
        "@utils": resolve("src/utils")
      }
    }
  }
}