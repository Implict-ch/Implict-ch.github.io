(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{293:function(t,a,s){"use strict";s.r(a);var m=s(14),r=Object(m.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://codefun2000.com/p/P1882",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1882"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("在一个 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mo",[t._v("×")]),a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m \\times n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v(" 的二维网格中，我们的无人机从左上角出发飞到右下角。无人机初始电量是一个正整数，如果电量降低到0或以下，那么会立即炸机坠毁。路径经过的所有网格有不同的物理特性，导致无人机经过时消耗的电量不一样（负整数代表消耗的电量）；有些网格如此奇妙，对无人机来说如果瞬间通过不消耗电量（网格数值为0）；还有一些网格无人机经过会增加电量（正整数代表增加的电量）。")]),t._v(" "),a("p",[t._v("为了尽可能安全到达右下角，无人机每次只能向右或向下移动一步。请编程计算并返回能够确保无人机到达右下角的最低初始电量。")]),t._v(" "),a("h2",{attrs:{id:"输入描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),a("p",[t._v("输入为整数的二维数组。")]),t._v(" "),a("h2",{attrs:{id:"输出描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),a("p",[t._v("输出为正整数。")]),t._v(" "),a("h2",{attrs:{id:"示例输入输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例输入输出"}},[t._v("#")]),t._v(" 示例输入输出")]),t._v(" "),a("div",{staticClass:"language-input1 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("3 3\n-2 -3 3\n-5 -10 1\n10 30 -5\n")])])]),a("div",{staticClass:"language-output1 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("7\n")])])]),a("h3",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mo",[t._v("=")]),a("mo",[t._v("=")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("l")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("h")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m == \\text{grid.length}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"text mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("d")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("l")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm"},[t._v("n")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("t")]),a("span",{staticClass:"mord mathrm"},[t._v("h")])])])])])]),t._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mo",[t._v("=")]),a("mo",[t._v("=")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")])],1),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("l")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("h")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n == \\text{grid}[i].\\text{length}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"text mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("d")])]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"text mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("l")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm"},[t._v("n")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("t")]),a("span",{staticClass:"mord mathrm"},[t._v("h")])])])])])]),t._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mo",[t._v("≤")]),a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("n")]),a("mo",[t._v("≤")]),a("mn",[t._v("2")]),a("mn",[t._v("0")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m \\leq 1, n \\leq 200")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])])]),t._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mo",[t._v("≤")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")])],1),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("≤")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("-1000 \\leq \\text{grid}[i][j] \\leq 1000")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"text mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("d")])]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/split.png",alt:"split"}}),t._v("\n题解不存在")])])}),[],!1,null,null,null);a.default=r.exports}}]);