(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{400:function(t,a,s){"use strict";s.r(a);var e=s(14),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://codefun2000.com/p/P1314",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1314"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"题目内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目内容"}},[t._v("#")]),t._v(" 题目内容")]),t._v(" "),a("p",[t._v("塔子哥是一个不那么严谨的经验主义者，他在使用Stable Diffusion“图生图”功能来画好康的图片时总想要选出上一轮最好看的那几张图片作为下一次“图生图”绘画的参考。")]),t._v(" "),a("p",[t._v("更一般的，“图生图”功能绘画的结果是若干张好康的图片，按照生成的先后顺序由1开始向后编号；同时，塔子哥在心里给它们打了一个分数（不同图片分数可能相同），由于AI绘图实在是不稳定，塔子哥决定删掉分数不大于20分的图片；随后塔子哥会根据他阅图无数的经验得到一个经验值，然后选择图片分数排名小于或等于该经验值的图片作为下一次“图生图”绘画的参考。（注意，这里排名采用dense_rank的方式，即相同分数排名相同，排名的序号连续）")]),t._v(" "),a("p",[t._v("塔子哥希望你帮他找出可以作为“图生图”绘画参考的图片中，排序最靠后的那张或那些图片的编号，以便于设置绘图的其他参数。")]),t._v(" "),a("h1",{attrs:{id:"解答要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答要求"}},[t._v("#")]),t._v(" 解答要求")]),t._v(" "),a("p",[t._v("时间限制: C/C++ 1000ms，其他语言: 2000ms\n内存限制:C/C++256MB，其他语言:512MB")]),t._v(" "),a("h1",{attrs:{id:"输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),a("p",[t._v("第一行输入为“图生图”绘制的结果中图片的张数"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("\n第二行输入为塔子哥自认为的经验值"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("Y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Y")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")])])])]),t._v(":")]),t._v(" "),a("p",[t._v("第三行输入为塔子哥给所有图片的评分，评分值以空格分隔。")]),t._v(" "),a("ul",[a("li",[t._v("1\\leq Y \\leq 未被删除的图片数量 \\leq 图片总数 \\leq 10^4:")]),t._v(" "),a("li",[t._v("0\\leq 评分分值 \\leq 100")])]),t._v(" "),a("h1",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("p",[t._v("排序最靠后的那些图片的分数和编号以空格分隔。")]),t._v(" "),a("h1",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1\n5 \n98\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("98 1\n")])])]),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("塔子哥的经验值"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("Y")]),a("mo",[t._v("=")]),a("mn",[t._v("5")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Y=5")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("5")])])])]),t._v("，所有图片按照评分编号为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("的图片被保留，分数为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("9")]),a("mn",[t._v("8")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("98")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("9")]),a("span",{staticClass:"mord mathrm"},[t._v("8")])])])]),t._v("。因此排序最靠后的那张图片的评分为排位第"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("、编号为1的入围作品，但是很显然这就是排序最靠后那张图片，那么输出 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("9")]),a("mn",[t._v("8")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("98")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("9")]),a("span",{staticClass:"mord mathrm"},[t._v("8")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])])]),t._v(" "),a("h1",{attrs:{id:"样例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例2"}},[t._v("#")]),t._v(" 样例2")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("14\n1\n11 45 14 19 19 81 0 11 45 14 19 19 81 0\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("81 6 13\n")])])]),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("被保留的图片编号分别为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("9")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("9")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("9")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("13")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v("，排序最靠后的那些图片有两张，分别是编号为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v("和编号为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("13")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v("的图片，因此输出"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("8")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("81")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("8")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("13")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" "),a("img",{attrs:{src:"/split.png",alt:"split"}}),t._v("\n题解不存在")])])}),[],!1,null,null,null);a.default=i.exports}}]);