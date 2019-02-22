(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{497:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("JS-Animation can perform a series of simple transformations  (position, size, rotation, background color, and opacity) on the component with Javascript.")]),t._m(2),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("Ref "),a("router-link",{attrs:{to:"./../styles/common-styles.html#property"}},[t._v("transition")]),t._v(" or "),a("router-link",{attrs:{to:"./../styles/common-styles.html#transform"}},[t._v("transform")]),t._v(" if you prefer CSS animation.")],1)]),t._m(3),t._m(4),a("ul",[a("li",[a("a",{attrs:{href:"http://dotwe.org/vue/2d1b61bef061448c1a5a13eac9624410",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1)])]),t._m(5),t._m(6),t._m(7),a("ul",[t._m(8),a("li",[t._m(9),a("ul",[t._m(10),t._m(11),t._m(12),t._m(13),a("li",[t._m(14),t._v(", "),a("code",[t._v("timingFunction")]),a("em",[t._v("string")]),t._v(" describes how the intermediate values are calculated for the CSS properties being affected by the animation effect. default value is "),a("code",[t._v("linear")]),t._v(", the supported values are listed in the following:\n"),a("ul",[t._m(15),t._m(16),t._m(17),t._m(18),a("li",[a("code",[t._v("cubic-bezier(x1, y1, x2, y2)")]),t._v(": Define your own values in the cubic-bezier function. Possible values are parameter values from 0 to 1. More information about cubic-bezier please visit "),a("a",{attrs:{href:"http://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cubic-bezier"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bézier curve"),a("OutboundLink")],1)])])])])]),t._m(19)]),t._m(20),t._m(21)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"animation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animation","aria-hidden":"true"}},[this._v("#")]),this._v(" animation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("animation")]),this._v(" module is used to perform animation on components.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, if you have a "),e("code",[this._v("image")]),this._v(" component, you can move, rotate, grow, or shrink it by animation.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("One can invoke "),e("code",[this._v("animation.transition(ref, options, callback)")]),this._v(" to start animation. Ref the following code snippets.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("animation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    styles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        backgroundColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FF0000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translate(250px, 100px)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ms")]),t._v("\n    timingFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ease'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    needLayout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ms")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'animation finished.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"transition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transition","aria-hidden":"true"}},[this._v("#")]),this._v(" transition")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"transition-ref-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transition-ref-options-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" transition(ref, options, callback)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("p",[a("strong",[t._v("@ref")]),t._v(", the element that will be animated. For example, if the value of "),a("code",[t._v("ref")]),t._v(" for an element is "),a("code",[t._v("test")]),t._v(", you can start an animation with "),a("code",[t._v("this.$refs.test")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("@options")]),this._v(", animation properties such as keys, duration.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("strong",[a("code",[t._v("styles")])]),t._v(", "),a("code",[t._v("styles")]),t._v(" specifies the names and values of styles to which a transition effect should be applied. The supported styles are listed below:\n"),a("ul",[a("li",[t._v("width")]),a("li",[t._v("height")]),a("li",[t._v("backgroundColor")]),a("li",[t._v("opacity")]),a("li",[t._v("transformOrigin")]),a("li",[t._v("transform\n"),a("ul",[a("li",[t._v("translate/translateX/translateY")]),a("li",[t._v("rotate/rotateX/rotateY")]),a("li",[t._v("perspective")]),a("li",[t._v("scale/scaleX/scaleY")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[e("code",[this._v("duration")])]),this._v(", "),e("code",[this._v("duration")]),e("em",[this._v("number")]),this._v(" specifies the duration of animation execution, the default value is "),e("code",[this._v("0")]),this._v(", meaning that the component get the desired property immediately.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[e("code",[this._v("delay")])]),this._v(", "),e("code",[this._v("delay")]),e("em",[this._v("number")]),this._v(" specifies the waiting time before the animation starts. The default value is "),e("code",[this._v("0")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[e("code",[this._v("needLayout")])]),this._v(", "),e("code",[this._v("needLayout")]),e("em",[this._v("boolean")]),this._v(" Specifies whether the change to layout(width/height/etc..) is persistence and takes affect after the animation. Default value is "),e("code",[this._v("false")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("code",[this._v("timingFunction")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("linear")]),this._v(": Specify a transition effect with the same speed from start to end.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("ease-in")]),this._v(": Specify a transition effect with a slow start and fast end.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("ease-out")]),this._v(": Specify a transition effect with a fast start and slow end.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("ease-in-out")]),this._v(": Specify a transition effect with a slow start, fast intermediate and slow end.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("@callback")]),this._v(", callback is a function called after the completion of animation. In iOS platform, you can use function to get information of animation execution.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Animatable properties of @style")]),a("ul",[a("li",[a("strong",[a("code",[t._v("width")])]),t._v(", the "),a("code",[t._v("width")]),t._v(" applied to the component after the animation finished. Set "),a("code",[t._v("needLayout")]),t._v(" to true if you want the change to be persistence. The default value is "),a("code",[t._v("computed width")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("height")])]),t._v(", the "),a("code",[t._v("height")]),t._v(" applied to the component after the animation finished. Set "),a("code",[t._v("needLayout")]),t._v(" to true if you want the change to be persistence. The default value is "),a("code",[t._v("computed height")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("backgroundColor")])]),t._v(", the "),a("code",[t._v("backgroundColor")]),t._v(" applied to the component after the animation finished. The default value is "),a("code",[t._v("computed backgroundColor")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("opacity")])]),t._v(", the "),a("code",[t._v("opacity")]),t._v(" applied to the component after the animation finished. The default value is "),a("code",[t._v("computed opacity")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("transformOrigin")])]),t._v(", the "),a("code",[t._v("transformOrigin")]),t._v(" indicate the pivot of the element being animated. The possible values for "),a("code",[t._v("x-axis")]),t._v(" are "),a("code",[t._v("left")]),t._v("/"),a("code",[t._v("center")]),t._v("/"),a("code",[t._v("right")]),t._v("/length or percent, and possible values of "),a("code",[t._v("y-axis")]),t._v(" are "),a("code",[t._v("top")]),t._v("/"),a("code",[t._v("center")]),t._v("/"),a("code",[t._v("bottom")]),t._v("/ length or percent. The default value is "),a("code",[t._v("center center")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("transform")])]),t._v(", transform object, which may include "),a("code",[t._v("rotate")]),t._v(", "),a("code",[t._v("translate")]),t._v(", "),a("code",[t._v("scale")]),t._v(" and etc. The detail of  transform is illustrated below.\n"),a("ul",[a("li",[a("code",[t._v("translate/translateX/translateY")]),t._v(": Specify the location which the element will be translated to.The unit is number or percent and the default value is 0.")]),a("li",[a("code",[t._v("rotate/rotateX/rotateY")]),a("strong",[t._v("v0.14+")]),t._v(": Specify the angle of which the element will be rotated. The unit is "),a("strong",[t._v("degree")]),t._v(" and the default value is 0.")]),a("li",[a("code",[t._v("perspective")]),a("strong",[t._v("v0.16+")]),t._v(": The distance between the z=0 plane and the user. Supported for "),a("strong",[t._v("Android 4.1")]),t._v(" and above. The unit is number and the default value is positive infinity.")]),a("li",[a("code",[t._v("scale/scaleX/scaleY")]),t._v(": Stretch or shrink the element. The unit is number and the default value is 1.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("ul",[a("li",[t._v("On iOS platform you can get animation's message about completion, there are two types of parameters with "),a("code",[t._v("result")]),t._v(", is "),a("code",[t._v("Success")]),t._v("and "),a("code",[t._v("Fail")]),t._v(", Android can not support until now.")]),a("li",[t._v("Android doesn't support the result parameter.")])])])}],!1,null,null,null);e.default=s.exports}}]);