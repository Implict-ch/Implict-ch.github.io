(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{786:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://codefun2000.com/p/P1745",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1745"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("塔子哥每次查看他的题解数据，发现都会有一篇题解的赞数+1，并且之后赞数增加的，必是另一篇题解。")]),t._v(" "),s("p",[t._v("塔子哥想知道，当某一篇题解赞数最多时，所有题解赞数和的最小值是多少？")]),t._v(" "),s("h1",{attrs:{id:"输入描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),s("p",[t._v("输入包含2行。")]),t._v(" "),s("p",[t._v("第一行两个正整数n(1≤n≤10^5)，表示塔子哥的题解的数量")]),t._v(" "),s("p",[t._v("第二行"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("个正整数a_i(1≤a_i≤10^9)，表示塔子哥每个笔记的点赞数。")]),t._v(" "),s("h1",{attrs:{id:"输出描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),s("p",[t._v("输出"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("行，每行输出一个整数，代表第i个笔记变成所有笔记赞数最多时，此时所有的笔记赞数之和的最小值。")]),t._v(" "),s("p",[t._v("特殊的，如果第"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v("个笔记永远无法变成赞数最多，则输出-1.")]),t._v(" "),s("h1",{attrs:{id:"样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("3\n3 1 4\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("9\n15\n8\n")])])]),s("p",[s("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),s("h2",{attrs:{id:"题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),s("p",[t._v("对于这种答案需要求 "),s("strong",[t._v("最大/最小值")]),t._v(" 的问题，如果不知道怎么下手，并且题目是有区间性质的时候，可以尝试使用二分答案。")]),t._v(" "),s("blockquote",[s("p",[t._v("可以发现对于当前帖子，要让当前帖子的点赞数最快的达到最大值，一定是当前帖子点一下，然后找到其他帖子(点赞数最小的那个)点一下，重复这个操作即可。")])]),t._v(" "),s("p",[t._v("记所有帖子的总和为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("u")]),s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"mord mathit"},[t._v("u")]),s("span",{staticClass:"mord mathit"},[t._v("m")])])])]),t._v(" ，当前帖子的点赞数为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v("，总共有 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v(" 个帖子 。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("依次枚举每个点赞数为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" 的帖子，二分出当前能达到的最大值 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("x")])])])]),t._v(" 。")])]),t._v(" "),s("li",[s("p",[t._v("记当前帖子点赞量 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" 到达 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("x")])])])]),t._v(" 的次数为  "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("c")]),s("mi",[t._v("n")]),s("msub",[s("mi",[t._v("t")]),s("mn",[t._v("1")])],1),s("mo",[t._v("=")]),s("mi",[t._v("x")]),s("mo",[t._v("−")]),s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("cnt_1 = x - val")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.84444em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("c")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("t")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])])])]),t._v(" "),s("li",[s("p",[t._v("假设其他帖子都到达 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("x")])])])]),t._v(" ，那么点赞次数为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("c")]),s("mi",[t._v("n")]),s("msub",[s("mi",[t._v("t")]),s("mn",[t._v("2")])],1),s("mo",[t._v("=")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",[t._v(")")]),s("mo",[t._v("∗")]),s("mi",[t._v("x")]),s("mo",[t._v("−")]),s("mo",[t._v("(")]),s("mi",[t._v("s")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mo",[t._v("−")]),s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("cnt_2 = (n - 1) * x - (sum - val)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("c")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("t")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"mord mathit"},[t._v("u")]),s("span",{staticClass:"mord mathit"},[t._v("m")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),s("li",[s("p",[t._v("因为要次数最小，那么最后一次点赞应该是点在当前帖子。")])])]),t._v(" "),s("p",[t._v("因此对于当前的 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("x")])])])]),t._v(" ，如果 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("c")]),s("mi",[t._v("n")]),s("msub",[s("mi",[t._v("t")]),s("mn",[t._v("1")])],1),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",[t._v("<")]),s("mo",[t._v("=")]),s("mi",[t._v("c")]),s("mi",[t._v("n")]),s("msub",[s("mi",[t._v("t")]),s("mn",[t._v("2")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("cnt_1 - 1 <= cnt_2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.79444em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("c")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("t")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit"},[t._v("c")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("t")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 成立，那么说明最大值可以 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("<")]),s("mo",[t._v("=")]),s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("<= x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit"},[t._v("x")])])])]),t._v("，否则最大值要 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v(">")]),s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v(">x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mrel"},[t._v(">")]),s("span",{staticClass:"mord mathit"},[t._v("x")])])])])]),t._v(" "),s("p",[t._v("记 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("a")]),s("mi",[t._v("n")]),s("mi",[t._v("s")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("ans")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v(" 为当前二分出来的答案，那么最小的点赞总和为："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mo",[t._v("+")]),s("mo",[t._v("(")]),s("mi",[t._v("a")]),s("mi",[t._v("n")]),s("mi",[t._v("s")]),s("mo",[t._v("−")]),s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")]),s("mo",[t._v(")")]),s("mo",[t._v("∗")]),s("mn",[t._v("2")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum + (ans - val) * 2 - 1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"mord mathit"},[t._v("u")]),s("span",{staticClass:"mord mathit"},[t._v("m")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])])]),t._v(" "),s("ul",[s("li",[t._v("Tips: 特殊情况是当 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("=")]),s("mo",[t._v("=")]),s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n == 2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" 时，如果当前的 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("v")]),s("mi",[t._v("a")]),s("mi",[t._v("l")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),s("span",{staticClass:"mord mathit"},[t._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" 不是最大值，答案为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("−")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("-1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])])])]),t._v(" "),s("h2",{attrs:{id:"ac代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ac代码"}},[t._v("#")]),t._v(" AC代码")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Python")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmaxv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i\n    maxv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" maxv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" maxv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        \n        L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maxv\n        R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);