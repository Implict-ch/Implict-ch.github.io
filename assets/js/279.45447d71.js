(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{552:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://codefun2000.com/p/P1091",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1091"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"题目内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目内容"}},[t._v("#")]),t._v(" 题目内容")]),t._v(" "),s("p",[t._v("塔子哥是一个热爱破解密码的年轻人，他喜欢挑战各种难度的密码。有一天，他收到了一封神秘的邮件，邮件中只有一个由小写字母组成的字符串。他猜测这个字符串可能是某个密码的一部分，于是开始尝试将其解密。")]),t._v(" "),s("p",[t._v("他通过分析字符串的特征，发现这个字符串的字母顺序可能不太对，于是他决定进行一次交换相邻字母的操作，以使得字符串的字典序尽可能大。")]),t._v(" "),s("p",[t._v("请你输出最终生成的字符串。")]),t._v(" "),s("h1",{attrs:{id:"输入描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),s("p",[t._v("一个仅由小写字母组成的字符串，长度不小于 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" ，不超过 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("2")]),s("mn",[t._v("0")]),s("mn",[t._v("0")]),s("mn",[t._v("0")]),s("mn",[t._v("0")]),s("mn",[t._v("0")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("200000")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v(" 。")]),t._v(" "),s("h1",{attrs:{id:"输出描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),s("p",[t._v("操作后的字符串。")]),t._v(" "),s("h1",{attrs:{id:"样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ba\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ab\n")])])]),s("p",[s("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),s("h2",{attrs:{id:"题目思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目思路"}},[t._v("#")]),t._v(" 题目思路")]),t._v(" "),s("p",[t._v("贪心。")]),t._v(" "),s("p",[t._v("1.由于需要让字典序变大。所以如果存在"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("s")]),s("mi",[t._v("i")])],1),s("mo",[t._v("<")]),s("msub",[s("mi",[t._v("s")]),s("mrow",[s("mi",[t._v("i")]),s("mo",[t._v("+")]),s("mn",[t._v("1")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_i < s_{i+1}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.747431em","vertical-align":"-0.208331em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" ,那么就优先翻转。如果有多个，就优先反转"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v("尽量小的。")]),t._v(" "),s("p",[t._v("2.如果不存在，那么就找"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("s")]),s("mi",[t._v("i")])],1),s("mo",[t._v("=")]),s("mo",[t._v("=")]),s("msub",[s("mi",[t._v("s")]),s("mrow",[s("mi",[t._v("i")]),s("mo",[t._v("+")]),s("mn",[t._v("1")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s_i == s_{i+1}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.638891em","vertical-align":"-0.208331em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("s")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 的，这样至少不会让字典序变小。")]),t._v(" "),s("p",[t._v("3.如果相等都不存在，那么不管怎么交换，字典序必定减小。所以反转"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v("尽量大的位置.使得字典序降的尽量少。")]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("p",[t._v("python代码")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n                \ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);