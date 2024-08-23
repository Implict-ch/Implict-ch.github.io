(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{412:function(t,a,s){"use strict";s.r(a);var i=s(14),m=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://codefun2000.com/p/P1829",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线评测链接:P1829"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("塔子哥需要多个业务节点之间选择最快的逃生节点集，并考虑每个节点的剩余业务容量。业务节点之间的关系可以看作一个图。塔子哥有一个网络时延表，表示每个节点到其他节点的通信延迟，即塔子哥从某节点逃到另一节点所需要的时间;还有一个剩余业务容量表，表示每个节点的剩余业务容量。在一个节点故障时，需要选择一个或多个逃生节点，确保逃生路径的时延最小，并且逃生节点集各节点剩余容量的总和足够容纳故障节点的业务量，当故障节点与多个节点最短距离相同，优先选择编号较小的节点容灾，如果逃生节点集中多个节点最短距离相同时按编号从小到大的顺序排列。")]),t._v(" "),a("h1",{attrs:{id:"输入描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),a("p",[t._v("第1行n表示业务节点数， 2<=n<=10000，节点编号从 0 开始，依次递增；")]),t._v(" "),a("p",[t._v("第2到1+n行表示业务节点间的网络时延矩阵表 delayMatrix，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("delayMatrix[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 表示节点 i 到节点 j 的通信时延;")]),t._v(" "),a("p",[t._v("1）如果节点 i 和节点 j 之间没有直接相连的边，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("delayMatrix[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 为 -1，第i个节点和它自己也没有边，所以"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("delayMatrix[i][i]=-1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])])]),t._v(" "),a("p",[t._v("2）节点间有边时延范围为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1<=delayMatrix[i][j]<=1000")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("，矩阵元素间使用空格分割\n另，输入保证 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mo",[t._v("=")]),a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("l")]),a("mi",[t._v("a")]),a("mi",[t._v("y")]),a("mi",[t._v("M")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("delayMatrix[i][j] == delayMatrix[j][i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" "),a("p",[t._v("第2+n行表示各业务节点的剩余容量表 remainingCapacity，其中 remainingCapacity[i] 表示节点 i 的剩余业务容量，业务量的范围"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("r")]),a("mi",[t._v("e")]),a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("i")]),a("mi",[t._v("n")]),a("mi",[t._v("i")]),a("mi",[t._v("n")]),a("mi",[t._v("g")]),a("mi",[t._v("C")]),a("mi",[t._v("a")]),a("mi",[t._v("p")]),a("mi",[t._v("a")]),a("mi",[t._v("c")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("y")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1<=remainingCapacity[i]<=100")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("c")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("，数组元素间使用空格分割；")]),t._v(" "),a("p",[t._v("第3+n行表示故障业务节点编号 faultyNode，表示发生故障的节点，取值范围为 0<=faultyNode<=n−1 ；")]),t._v(" "),a("p",[t._v("第4+n行表示受损业务节点需要迁移的业务量, 受损业务量的范围 (0−1000] 。")]),t._v(" "),a("h1",{attrs:{id:"输出描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),a("p",[t._v("返回符合条件的逃生路径节点编号列表，用空格分隔。当所有节点都不够故障节点业务容灾时候，输出所有容灾节点。")]),t._v(" "),a("h1",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("4\n-1 5 -1 8\n5 -1 1 3\n-1 1 -1 4\n8 3 4 -1\n10 20 15 25\n2\n12\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1\n")])])]),a("p",[a("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("h2",{attrs:{id:"华为题库已更新至-华为实习-秋招真题题库-请移步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#华为题库已更新至-华为实习-秋招真题题库-请移步。"}},[t._v("#")]),t._v(" 华为题库已更新至:"),a("a",{attrs:{href:"https://codefun2000.com/d/HWHW/",target:"_blank",rel:"noopener noreferrer"}},[t._v("华为实习&秋招真题题库"),a("OutboundLink")],1),t._v("，请移步。")]),t._v(" "),a("h2",{attrs:{id:"于2024年8月21日之前的-已开通半年及以上会员的同学请联系塔子哥-wx-codingyes-免费赠送华为题库。-不够半年的同学可补差价转半年。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#于2024年8月21日之前的-已开通半年及以上会员的同学请联系塔子哥-wx-codingyes-免费赠送华为题库。-不够半年的同学可补差价转半年。"}},[t._v("#")]),t._v(" 于2024年8月21日之前的，已开通半年及以上会员的同学请联系塔子哥(wx:codingyes)，免费赠送华为题库。 不够半年的同学可补差价转半年。")])])}),[],!1,null,null,null);a.default=m.exports}}]);