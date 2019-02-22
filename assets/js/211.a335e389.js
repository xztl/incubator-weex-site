(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{346:function(e,t,i){"use strict";i.r(t);var r=i(1),c=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),i("p",[e._v("以下为 picker 相关的 API，用于数据选择，日期选择，时间选择。（ H5模块如需使用，请手动引入 "),i("a",{attrs:{href:"https://github.com/weexteam/weex-picker",target:"_blank",rel:"noopener noreferrer"}},[e._v("weex-picker组件"),i("OutboundLink")],1),e._v("）。")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),i("p",[i("a",{attrs:{href:"http://dotwe.org/vue/060faedd0952f518d2d5322a5fb5ea2f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),i("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"picker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#picker","aria-hidden":"true"}},[this._v("#")]),this._v(" picker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pick","aria-hidden":"true"}},[this._v("#")]),this._v(" pick")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"pick-options-callback-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pick-options-callback-options","aria-hidden":"true"}},[this._v("#")]),this._v(" pick(options, callback[options])")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[i("strong",[e._v("@options")])]),i("ul",[i("li",[i("code",[e._v("index {number}")]),e._v(": 默认选中的选项")]),i("li",[i("code",[e._v("items {array}")]),e._v(": picker 数据源")]),i("li",[i("code",[e._v("textColor {color}")]),e._v(": picker中文字的颜色")]),i("li",[i("code",[e._v("selectionColor {color}")]),e._v(": picker中选中item的背景色")]),i("li",[i("code",[e._v("confirmTitle {string}")]),e._v(": 确认按钮的文案")]),i("li",[i("code",[e._v("cancelTitle {string}")]),e._v(": 取消按钮的文案")]),i("li",[i("code",[e._v("confirmTitleColor {color}")]),e._v(": 确认按钮的文字颜色")]),i("li",[i("code",[e._v("cancelTitleColor {color}")]),e._v(": 取消按钮的文字颜色")]),i("li",[i("code",[e._v("title {string}")]),e._v(": 对话框的标题")]),i("li",[i("code",[e._v("titleColor {color}")]),e._v(": 对话框标题的文字颜色")]),i("li",[i("code",[e._v("titleBackgroundColor {color}")]),e._v(": 对话框标题的背景色")])])]),i("li",[i("p",[i("strong",[e._v("@callback")]),e._v("，执行完读取操作后的回调函数 "),i("code",[e._v("ret {Object}")]),e._v(" 为 "),i("code",[e._v("callback")]),e._v(" '函数的参数，有两个属性")]),i("ul",[i("li",[i("code",[e._v("result {string}")]),e._v(": 结果三种类型 "),i("code",[e._v("success")]),e._v(", "),i("code",[e._v("cancel")]),e._v(", "),i("code",[e._v("error")])]),i("li",[i("code",[e._v("data {number}")]),e._v(": 选择的选项,仅成功确认时候存在")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pickdate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pickdate","aria-hidden":"true"}},[this._v("#")]),this._v(" pickDate")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"pickdate-options-callback-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pickdate-options-callback-options","aria-hidden":"true"}},[this._v("#")]),this._v(" pickDate(options, callback[options])")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("@options")]),i("ul",[i("li",[i("code",[e._v("value {string}")]),e._v(": 必选，date picker 选中的值，date 的字符串格式为 "),i("code",[e._v("yyyy-MM-dd")])]),i("li",[i("code",[e._v("max {string}")]),e._v(": 可选，date 的最大值")]),i("li",[i("code",[e._v("min {string}")]),e._v(": 可选，date 的最小值")])])]),i("li",[i("strong",[e._v("@callback")]),e._v("，执行完读取操作后的回调函数。"),i("code",[e._v("ret {Object}")]),e._v(" 为 "),i("code",[e._v("callback")]),e._v(" 函数的参数，有两个属性:\n"),i("ul",[i("li",[i("code",[e._v("result {string}")]),e._v(": 结果三种类型 "),i("code",[e._v("success")]),e._v(", "),i("code",[e._v("cancel")]),e._v(", "),i("code",[e._v("error")])]),i("li",[i("code",[e._v("data {string}")]),e._v(": 选择的值 date 的字符，格式为 yyyy-MM-dd, 仅成功确认的时候存在")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"picktime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#picktime","aria-hidden":"true"}},[this._v("#")]),this._v(" pickTime")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"picktime-options-callback-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#picktime-options-callback-options","aria-hidden":"true"}},[this._v("#")]),this._v(" pickTime(options, callback[options])")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("@options")]),i("ul",[i("li",[i("code",[e._v("value {string}")]),e._v(":必选，time 格式为 "),i("code",[e._v("HH:mm")])])])]),i("li",[i("strong",[e._v("@callback")]),e._v("，执行完读取操作后的回调函数。"),i("code",[e._v("ret {Object}")]),e._v(" 为 "),i("code",[e._v("callback")]),e._v(" 函数的参数，有两个属性\n"),i("ul",[i("li",[i("code",[e._v("result {string}")]),e._v(": 结果三种类型 "),i("code",[e._v("success")]),e._v(", "),i("code",[e._v("cancel")]),e._v(", "),i("code",[e._v("error")])]),i("li",[i("code",[e._v("data {string}")]),e._v(":time 格式为 "),i("code",[e._v("HH:mm")]),e._v(", 仅成功确认的时候存在")])])])])}],!1,null,null,null);t.default=c.exports}}]);