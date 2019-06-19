(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"在线体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线体验","aria-hidden":"true"}},[t._v("#")]),t._v(" 在线体验")]),t._v(" "),a("p",[t._v("通过下面的二维码，可以在手机中体验 Quist-UI (请使用快应用调试器扫码)：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/1637de016a1e70707c8715716c496aa4cd3383e4/687474703a2f2f7066726734717130792e626b742e636c6f7564646e2e636f6d2f35626166326161344e30636363383739372e706e67",alt:"体验二维码"}})]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[a("code",[t._v("$ npm install quist-ui -D")]),t._v(" 或 "),a("code",[t._v("$ yarn add quist-ui --dev")])]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("blockquote",[a("p",[t._v("如果是在已有项目安装，创建一个webpack.config.js文件(在根目录下，创建一个config文件夹，然后把此文件放入config文件夹下)，并添加如下配置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  postHook"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpackConf"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    webpackConf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpackConf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'@quist-ui'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("cwd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/quist-ui/components'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"本地体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地体验","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地体验")]),t._v(" "),a("blockquote",[a("p",[t._v("此操作适用于在没有项目的基础上进行安装")])]),t._v(" "),a("ol",[a("li",[t._v("Clone Quist-UI 仓库到本地")]),t._v(" "),a("li",[t._v("安装依赖 "),a("code",[t._v("$ npm install")])]),t._v(" "),a("li",[t._v("在 quist-ui 根目录下执行 "),a("code",[t._v("$ npm run watch")])]),t._v(" "),a("li",[t._v("在 quist-ui 根目录下执行 "),a("code",[t._v("$ npm run server")])]),t._v(" "),a("li",[t._v("Done~")])]),t._v(" "),a("h3",{attrs:{id:"反馈沟通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反馈沟通","aria-hidden":"true"}},[t._v("#")]),t._v(" 反馈沟通")]),t._v(" "),a("p",[t._v("请扫码进入微信群，此群可快速及时地解答问题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/b647122264751c224717381228181015294e5c8f/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f3230313930313231303933343536332e6a706567",alt:"群二维码"}})])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);