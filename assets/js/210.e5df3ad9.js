(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{494:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://codefun2000.com/p/P1673",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1673"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("塔子哥是一个善于寻找快乐的人。")]),t._v(" "),s("p",[t._v("对于一个字符串，塔子哥认为它是“快乐的”当且仅当其包含以下任意一个连续子串:")]),t._v(" "),s("ul",[s("li",[t._v("cheerful")]),t._v(" "),s("li",[t._v("glad")]),t._v(" "),s("li",[t._v("happy")]),t._v(" "),s("li",[t._v("pleased")])]),t._v(" "),s("p",[t._v("对于输入的字符串，请你判断这个字符串是否是“快乐的”。")]),t._v(" "),s("h2",{attrs:{id:"输入描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),s("p",[t._v("本题中，每个测试点包含多组测试数据。")]),t._v(" "),s("p",[t._v("第一行一个整数 ，表示数据的组数。")]),t._v(" "),s("p",[t._v("对于每组数据:")]),t._v(" "),s("p",[t._v("输入仅一行，包含一个字符串。")]),t._v(" "),s("p",[t._v("数据保证字符串的长度不超过10000，且仅由小写字母构成。")]),t._v(" "),s("h2",{attrs:{id:"输出描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),s("p",[t._v("对于每组数据，如果 是“快乐的”，请输出Yes，否则请输出No。")]),t._v(" "),s("h2",{attrs:{id:"示例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[t._v("#")]),t._v(" 示例1")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2\nhappydays\nsaddays\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Yes\nNo\n")])])]),s("p",[s("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),s("h2",{attrs:{id:"思路-模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路-模拟"}},[t._v("#")]),t._v(" 思路:模拟")]),t._v(" "),s("p",[t._v("暴力寻找子串即可")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cheerful"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glad"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"happy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pleased"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);