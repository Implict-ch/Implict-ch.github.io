(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{712:function(t,a,s){"use strict";s.r(a);var e=s(14),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://codefun2000.com/p/P1276",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1276"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("有一天塔子哥去朋友家玩，发现朋友的弟弟在玩一个有趣的棋盘。")]),t._v(" "),a("p",[t._v("这个棋盘上是按类似于国际象棋的方法来标记的，从左到右依次为A~G，从上到下是数字，每个格子都可以用 字母+数字 来表示，如图：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("B1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("C1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("B2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("C2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("B3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("C3")])])])]),t._v(" "),a("p",[t._v("棋盘上被朋友的弟弟写满一些数字和公式，塔子哥检查整个棋盘发现：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("每个格子中只写了两种内容，数字或公式；")])]),t._v(" "),a("li",[a("p",[t._v("格子里的数字全是非负整数，例如 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" 、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("7")]),a("mn",[t._v("7")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("77")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mord mathrm"},[t._v("7")])])])]),t._v(" ；")])]),t._v(" "),a("li",[a("p",[t._v("格子里的公式固定以=开头，仅包含下面三种情况：")]),t._v(" "),a("p",[t._v("（1）等于另外某个格子的值，例如"),a("code",[t._v("=B12")]),t._v("；")]),t._v(" "),a("p",[t._v("（2）等于另外两个格子的加减运算 (仅为+或-),例如"),a("code",[t._v("=C1-C2")]),t._v("、"),a("code",[t._v("=C3+B2")]),t._v("；")]),t._v(" "),a("p",[t._v("（3）等于其它格子和数字的加减运算(仅为+或-),例如"),a("code",[t._v("=B1+1")]),t._v("、"),a("code",[t._v("=100-B2")]),t._v("；")])])]),t._v(" "),a("p",[t._v("塔子哥十分好奇，通过询问，他明白了这个棋盘的作用。两个人提前将棋盘写满，一个人指定棋盘上的某个矩形，另一个人快速计算这个矩形范围中所有格子的和。谁的用时短谁就赢。")]),t._v(" "),a("p",[t._v("塔子哥觉得这个游戏很有意思，就想在电脑上把它复刻出来。")]),t._v(" "),a("p",[t._v("为了保证游戏的正常运行，塔子哥为游戏添加了这些限制：")]),t._v(" "),a("p",[t._v("1.公式内容都是合法的,保证没有错误，例如不存在"),a("code",[t._v("=C+1")]),t._v("、"),a("code",[t._v("=C1-C2+B3")]),t._v(","),a("code",[t._v("=5")]),t._v("、"),a("code",[t._v("=3+5")]),t._v("；\n2.不会出现循环引用,例如当 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("A")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("A")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" 位置是"),a("code",[t._v("=B1+C1")]),t._v("、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("C")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" 位置上是"),a("code",[t._v("=A1+B2")]),t._v("时，这是非法的；")]),t._v(" "),a("p",[t._v("现在塔子哥生成了一个游戏棋盘，他想找人测试一下这个游戏，于是他找到了你。")]),t._v(" "),a("h1",{attrs:{id:"输入描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),a("p",[t._v("第一行两个整数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" , "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])]),t._v(" ( "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("≤")]),a("mi",[t._v("N")]),a("mo",[t._v("≤")]),a("mn",[t._v("3")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1  \\leq  N \\leq 30")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8193em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v(","),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("≤")]),a("mi",[t._v("M")]),a("mo",[t._v("≤")]),a("mn",[t._v("2")]),a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1 \\leq M \\leq 26")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8193em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v("),表示给定棋盘区域的行数和列数,。")]),t._v(" "),a("p",[t._v("接下来 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 行，每行 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])]),t._v(" 个以空格分隔的字符串，表示给定棋盘的单元格内容。")]),t._v(" "),a("p",[t._v("最后一行输入的字符串，表示给定的矩形范围，形如"),a("code",[t._v("A1：C2")]),t._v("，冒号左边表示矩形左上角的棋盘格，冒号右边表示矩形右下角的棋盘格。")]),t._v(" "),a("p",[t._v("输入保证合法。")]),t._v(" "),a("h1",{attrs:{id:"输出描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),a("p",[t._v("一个整数sum,表示给定矩形范围中所有格子所代表的值的累加总和")]),t._v(" "),a("p",[t._v("范围是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("−")]),a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("1")]),a("mn",[t._v("4")]),a("mn",[t._v("7")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("4")]),a("mn",[t._v("8")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("6")]),a("mn",[t._v("4")]),a("mn",[t._v("8")]),a("mo",[t._v("≤")]),a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mo",[t._v("≤")]),a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("1")]),a("mn",[t._v("4")]),a("mn",[t._v("7")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("4")]),a("mn",[t._v("8")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("6")]),a("mn",[t._v("4")]),a("mn",[t._v("8")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("-2,147,483,648 \\leq sum \\leq 2,147,483,648")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("8")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("6")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("8")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("8")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("6")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("8")])])])]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"样例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例1"}},[t._v("#")]),t._v(" 样例1")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("3 3\n=9+B1 =3+B2 =A2+A3\n=C2-8 =C3+C3 =C3\n=B3+B3 =C3 12\nB3:C3\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("24\n")])])]),a("p",[t._v("棋盘情况:")]),t._v(" "),a("p",[t._v("36 27 28")]),t._v(" "),a("p",[t._v("4 24 12")]),t._v(" "),a("p",[t._v("24 12 12")]),t._v(" "),a("h1",{attrs:{id:"样例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例2"}},[t._v("#")]),t._v(" 样例2")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("3 3\n=86-A2 =43+A2 =B2+99\n=C3+B2 =C2+88 =A3-66\n=B3 9 97\nB1:B2\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("202\n")])])]),a("p",[t._v("棋盘情况:")]),t._v(" "),a("p",[t._v("-42 171 130")]),t._v(" "),a("p",[t._v("128 31 -57")]),t._v(" "),a("p",[t._v("9 9 97")]),t._v(" "),a("p",[a("img",{attrs:{src:"/split.png",alt:"split"}}),t._v("\n题解不存在")])])}),[],!1,null,null,null);a.default=i.exports}}]);