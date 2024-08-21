(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{368:function(t,a,s){"use strict";s.r(a);var e=s(14),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("塔子哥最近对在开发一个简单的操作系统，今天他的任务是为操作系统的动态内存管理模块实现内存块的合并功能。")]),t._v(" "),a("p",[t._v('介绍一下操作系统的内存管理模块:操作系统的动态内存管理模块是操作系统中非常重要的一部分，其主要功能是在程序运行时动态地分配和释放内存。动态内存管理模块根据程序的内存需求，调用物理内存管理模块，对内存进行分配或者释放。为了使得内存的分配更加高效，动态内存管理模块通常会实现内存池的机制。内存池就是一个预先分配好一定数量的内存块的集合，程序运行时可以从内存池中获取内存块，而不必动态地去分配内存空间。这样可以极大地提高内存分配的速度。动态内存管理模块还负责内存的回收和整理。当程序不再使用某些内存空间时，动态内存管理模块将这些空间标记为可回收空间，并把它们加入内存释放队列。在适当的时候，动态内存管理模块就会回收这些空间，并重新整理内存空间，以便留出更大的连续内存块来给后续的内存分配操作使用。"')]),t._v(" "),a("p",[t._v("塔子哥考虑这个模块可以根据用户需求分配任意大小的内存块，并在用户释放内存时将其回收到内存池中以供其他用户使用，他把这个任务安排给了小G同学。"),a("strong",[t._v("小G同学需要设计并实现这个回收合并模块，这个模块在每次释放内存块后返回当前最大的连续内存块的起始位置和长度。如果存在多个最大连续内存块，返回起始位置最小的内存块。")])]),t._v(" "),a("h1",{attrs:{id:"输入描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[t._v("#")]),t._v(" 输入描述")]),t._v(" "),a("p",[t._v('输入是一组释放的内存块编号，用逗号分隔。例如，输入 "'),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("5")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1,3,2,5")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("5")])])])]),t._v('" 表示释放了四个内存块，它们的编号分别为 1、3、2 和 '),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("5")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("5")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("5")])])])]),t._v("。每个内存块的大小为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" 个单位。请注意，函数执行前所有内存块都已被申请完毕，没有空闲内存块。不需要考虑重复释放内存块。")]),t._v(" "),a("p",[t._v("内存块编号: "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("≤")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\leq")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mrel"},[t._v("≤")])])])]),t._v(" 编号 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("≤")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\leq")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mrel"},[t._v("≤")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mrow",[a("mn",[t._v("3")]),a("mn",[t._v("1")])],1)],1),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{31} - 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])])]),t._v(" "),a("p",[t._v("单词释放的内存块个数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("≤")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\leq")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mrel"},[t._v("≤")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("10000")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])])]),t._v(" "),a("h1",{attrs:{id:"输出描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[t._v("#")]),t._v(" 输出描述")]),t._v(" "),a("p",[t._v('输出是一个由两个整数组成的元组，表示经过回收处理后当前可用的最大连续内存块的起始编号和长度。例如，输出 "'),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1,3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v('" 表示合并后的连续内存块的起始编号是 '),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("，长度为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v("。如果存在多个最大连续内存块，则返回起始编号最小的那个。")]),t._v(" "),a("h1",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2,4,3,7,6\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2,3\n")])])]),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("4")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("7")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2 ,4, 3, 7 ,6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v(" 表示释放了 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("5")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("5")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("5")])])])]),t._v(" 块内存，内存块编号分别为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("4")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("7")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2, 4, 3 ,7, 6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v(" .")]),t._v(" "),a("p",[t._v("经过回收合并后，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("4")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2,3,4")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("4")])])])]),t._v(" 三块内存连续，可以合并为一块大内存、大小为  "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v(" 个单位")]),t._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("6")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("7")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("6 ,7")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("6")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("7")])])])]),t._v(" 两块内存连续，合并后连续内存大小为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" 。")]),t._v(" "),a("p",[t._v("因此返回此时的最大连续内存的起始位置为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" ，内存大小为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])])])]),t._v(" "),a("h2",{attrs:{id:"样例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例2"}},[t._v("#")]),t._v(" 样例2")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1,3,7,9,8,6\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("6,4\n")])])]),a("p",[a("img",{attrs:{src:"/split.png",alt:"split"}})]),t._v(" "),a("h1",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("h2",{attrs:{id:"华为题库已更新至-华为实习-秋招真题题库-请移步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#华为题库已更新至-华为实习-秋招真题题库-请移步。"}},[t._v("#")]),t._v(" 华为题库已更新至:"),a("a",{attrs:{href:"https://codefun2000.com/d/HWHW/",target:"_blank",rel:"noopener noreferrer"}},[t._v("华为实习&秋招真题题库"),a("OutboundLink")],1),t._v("，请移步。")]),t._v(" "),a("h2",{attrs:{id:"于2024年8月21日之前的-已开通半年及以上会员的同学请联系塔子哥-wx-codingyes-免费赠送华为题库。-不够半年的同学可补差价转半年。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#于2024年8月21日之前的-已开通半年及以上会员的同学请联系塔子哥-wx-codingyes-免费赠送华为题库。-不够半年的同学可补差价转半年。"}},[t._v("#")]),t._v(" 于2024年8月21日之前的，已开通半年及以上会员的同学请联系塔子哥(wx:codingyes)，免费赠送华为题库。 不够半年的同学可补差价转半年。")])])}),[],!1,null,null,null);a.default=i.exports}}]);