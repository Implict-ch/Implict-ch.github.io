(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{941:function(t,s,a){"use strict";a.r(s);var i=a(14),e=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"线性dp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性dp"}},[t._v("#")]),t._v(" 线性dp")]),t._v(" "),s("p",[t._v("这里的线性dp指的是在线性结构/序列上的动态规划。这里先看一个入门的例子")]),t._v(" "),s("h3",{attrs:{id:"例1-物品放置问题-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例1-物品放置问题-一"}},[t._v("#")]),t._v(" 例1:物品放置问题(一)")]),t._v(" "),s("p",[t._v("给定"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("个位置，每个位置上可放置0~1个物品。有多少种放置方案满足条件:任意两个物品不相邻。")]),t._v(" "),s("h4",{attrs:{id:"思路1-从递归-记忆化搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路1-从递归-记忆化搜索"}},[t._v("#")]),t._v(" 思路1:从递归 -> 记忆化搜索")]),t._v(" "),s("p",[s("strong",[t._v("一般的套路：考虑最后一个位置放或不放物品，")])]),t._v(" "),s("p",[t._v("1.放置了，那么第"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n-1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("位就不能放，而"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n-2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v("不受限制，则这种情况方案数为:"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("2")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(n-2)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("p",[t._v("2.没放置,那么"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n-1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("位不受限制，则这种情况方案数为:"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(n-1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("p",[t._v("那么递归式:"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v(")")]),s("mo",[t._v("=")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",[t._v(")")]),s("mo",[t._v("+")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("2")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(n) = f(n-1) + f(n-2)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。")]),t._v(" "),s("p",[t._v("实现代码:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n")])])]),s("p",[t._v("画出递归式如下：")]),t._v(" "),s("p",[t._v("G")]),t._v(" "),s("p",[t._v("发现重叠子问题！ 自然的我们希望每个状态只计算一次，那么就引出记忆化搜索技巧")]),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("h4",{attrs:{id:"思路2-递推"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路2-递推"}},[t._v("#")]),t._v(" 思路2:递推")]),t._v(" "),s("p",[t._v("这种方案注意边界条件的处理。")]),t._v(" "),s("h4",{attrs:{id:"思路3-数学分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路3-数学分析"}},[t._v("#")]),t._v(" 思路3:数学分析")]),t._v(" "),s("h5",{attrs:{id:"_1-观察特定例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-观察特定例子"}},[t._v("#")]),t._v(" 1.观察特定例子")]),t._v(" "),s("p",[t._v("给定"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("=")]),s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n=3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" , 那么所有可能的方案:S=\\{\\empty , \\{1\\} , \\{2\\} , \\{3\\} , \\{1,3\\}\\}")]),t._v(" "),s("h5",{attrs:{id:"_2-划分集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-划分集合"}},[t._v("#")]),t._v(" 2.划分集合")]),t._v(" "),s("p",[t._v("按集合中是否含有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" , 分成两个集合:")]),t._v(" "),s("p",[t._v("s_1=\\{\\empty , \\{1\\} , \\{2\\}\\}")]),t._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("s")]),s("mn",[t._v("2")])],1),s("mo",[t._v("=")]),s("mo",[t._v("{")]),s("mo",[t._v("{")]),s("mn",[t._v("3")]),s("mo",[t._v("}")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mo",[t._v("{")]),s("mn",[t._v("1")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mn",[t._v("3")]),s("mo",[t._v("}")]),s("mo",[t._v("}")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_2=\\{\\{3\\} , \\{1,3\\}\\}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mopen"},[t._v("{")]),s("span",{staticClass:"mopen"},[t._v("{")]),s("span",{staticClass:"mord mathrm"},[t._v("3")]),s("span",{staticClass:"mclose"},[t._v("}")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mopen"},[t._v("{")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathrm"},[t._v("3")]),s("span",{staticClass:"mclose"},[t._v("}")]),s("span",{staticClass:"mclose"},[t._v("}")])])])])]),t._v(" "),s("p",[t._v("假设问题方案数"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("3")]),s("mo",[t._v(")")]),s("mo",[t._v("=")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mi",[t._v("S")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(3) = |S|")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("3")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("∣")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord mathrm"},[t._v("∣")])])])]),t._v(" , 那么不难看出"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("2")]),s("mo",[t._v(")")]),s("mo",[t._v("=")]),s("msub",[s("mi",[t._v("s")]),s("mn",[t._v("1")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(2) = s_1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),s("p",[t._v("而对于"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("s")]),s("mn",[t._v("2")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，我们需要做一个"),s("strong",[t._v("一一映射")]),t._v("的技巧，一个在组合数学中经常要使用到的技巧:")]),t._v(" "),s("p",[t._v("因为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("s")]),s("mn",[t._v("2")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 的特征是:所有集合中都含有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" , 所以我们可以将集合中的所有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v("都去掉，"),s("strong",[t._v("方案数是不变的")]),t._v(" 。 s2'=\\{\\empty,\\{1\\}\\}")]),t._v(" "),s("p",[t._v("这个时候就不难看出来:"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msubsup",[s("mi",[t._v("s")]),s("mn",[t._v("2")]),s("mrow",[s("mi",{attrs:{mathvariant:"normal"}},[t._v("′")])],1)],1),s("mo",[t._v("=")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("1")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_2'=f(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.751892em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.001892em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.24810799999999997em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("′")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("p",[t._v("所以"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("3")]),s("mo",[t._v(")")]),s("mo",[t._v("=")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("2")]),s("mo",[t._v(")")]),s("mo",[t._v("+")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mn",[t._v("1")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(3) = f(2) + f(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("3")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("h5",{attrs:{id:"推广"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推广"}},[t._v("#")]),t._v(" 推广")]),t._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v(")")]),s("mo",[t._v("=")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",[t._v(")")]),s("mo",[t._v("+")]),s("mi",[t._v("f")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("2")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(n) = f(n-1) + f(n-2)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("h5",{attrs:{id:"图示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图示"}},[t._v("#")]),t._v(" 图示")]),t._v(" "),s("p",[t._v("本质上是一个划分集合的思想：先把集合给枚举出来，然后尝试将集合划分成若干不重不漏的子集(划分的手段不限，但是需要尽量简单。子集为更小的原问题。")]),t._v(" "),s("h3",{attrs:{id:"共性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共性"}},[t._v("#")]),t._v(" 共性")]),t._v(" "),s("p",[t._v("都是优先考虑最后一个位置 xxxx 。 这样可以正确划分成更小的子问题。 而考虑中间常常会把问题搞砸。")])])}),[],!1,null,null,null);s.default=e.exports}}]);