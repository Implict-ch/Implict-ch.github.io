(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{808:function(t,s,a){"use strict";a.r(s);var e=a(14),i=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://codefun2000.com/p/P1709",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1709"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("塔子哥是一个卡牌游戏主播。他经常去网络上发布关于游戏的卡牌研究攻略。游戏中有一张牌叫做碾压墙，可以消灭敌方最左边和最右边的随从，另一张牌做致命射击，可以随机消灭一个敌方随从。\n如果塔子哥使用两张致命射击恰好消灭了敌方最左边和最右边的随从(恰好造成了一张碾压墙的效果)，就会有人在评论区发布“碾压墙”，注意:两张致命射击的结算有先后顺序，即两张致命射击不会消灭同一个敌方随从。\n现在有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("个敌方随从，塔子哥想知道她使用两张致命射击后，恰好造成一张碾压墙的效果的概率是多少，你的答案请四舍五入保留10位小数。")]),t._v(" "),s("h1",{attrs:{id:"输入描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),s("p",[t._v("第一行一个正整数"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"输出描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),s("p",[t._v("一个保留10位小数的答案")]),t._v(" "),s("h1",{attrs:{id:"样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1.0000000000\n")])])]),s("p",[s("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),s("p",[t._v("这题是个签到题难度。")]),t._v(" "),s("p",[t._v("首先对于 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("=")]),s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n = 2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" 的情况特殊判断，因为一定成立。")]),t._v(" "),s("p",[t._v("对于其他情况，一定是一个选最左边 (概率 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mfrac",[s("mrow",[s("mn",[t._v("1")])],1),s("mrow",[s("mi",[t._v("n")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac{1}{n}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.845108em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.190108em","vertical-align":"-0.345em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord reset-textstyle textstyle uncramped"},[s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{staticClass:"mfrac"},[s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.345em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")])])])]),s("span",{staticStyle:{top:"-0.22999999999999998em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{staticStyle:{top:"-0.394em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])]),t._v(")，选完之后，一个选最右边 (概率 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mfrac",[s("mrow",[s("mn",[t._v("1")])],1),s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac{1}{n - 1}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.845108em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.2484389999999999em","vertical-align":"-0.403331em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord reset-textstyle textstyle uncramped"},[s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{staticClass:"mfrac"},[s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.345em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),s("span",{staticStyle:{top:"-0.22999999999999998em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{staticStyle:{top:"-0.394em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])]),t._v(")。")]),t._v(" "),s("p",[t._v("最终的答案还要乘上 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msubsup",[s("mi",[t._v("A")]),s("mrow",[s("mn",[t._v("2")])],1),s("mrow",[s("mn",[t._v("2")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A_{2}^{2}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.0622159999999998em","vertical-align":"-0.24810799999999997em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.24810799999999997em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),s("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("p",[t._v("ac代码(C++/Python/Java)请进入OJ(本文章顶部的超链接)查看")])])}),[],!1,null,null,null);s.default=i.exports}}]);