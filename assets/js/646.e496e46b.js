(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{928:function(a,t,s){"use strict";s.r(t);var e=s(14),v=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://codefun2000.com/p/P1810",target:"_blank",rel:"noopener noreferrer"}},[a._v("在线评测链接:P1810"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),t("p",[a._v("塔子哥在一个广场上散步，广场上有 n x n 个格子。每个格子都有一个箭头，")]),a._v(" "),t("p",[a._v("'^'表示走到这个格子后要向上走，'v'表示走到这个格子后要向下走，'<'表示走到这个格子后要向左走，'>'表示走到这个格子后要向右走。")]),a._v(" "),t("p",[a._v("塔子哥每次离开一个格子后，离开的那个格子的箭头方向就会变成反向，即'^'变成'v'，'v'变成'^','<'变成'>'，'>'变'<'。")]),a._v(" "),t("p",[a._v("给出塔子哥当前的位置，她想知道她需要走多少步能走出广场?")]),a._v(" "),t("p",[a._v("若塔子哥永远走不出广场，则输出 -1。")]),a._v(" "),t("h2",{attrs:{id:"输入描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[a._v("#")]),a._v(" 输入描述")]),a._v(" "),t("p",[a._v("第一行输入一个整数n(1<n<100)表示广场大小。")]),a._v(" "),t("p",[a._v("接下来 n 行，每行输入一个长度为 n 的只由'^', 'v', '>', '<'组成的字符串表示广场上的格子。")]),a._v(" "),t("p",[a._v("接下来一行，输入两个整数x,y(1 <= x,y <= n)表示塔子哥当前的位置。")]),a._v(" "),t("h2",{attrs:{id:"输出描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[a._v("#")]),a._v(" 输出描述")]),a._v(" "),t("p",[a._v("输出一个整数表示答案。")]),a._v(" "),t("h2",{attrs:{id:"样例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[a._v("#")]),a._v(" 样例")]),a._v(" "),t("p",[t("strong",[a._v("输入")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("2\n>v\n^<\n1 1\n")])])]),t("p",[t("strong",[a._v("输出")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("5\n")])])]),t("p",[t("strong",[a._v("说明")])]),a._v(" "),t("p",[a._v("塔子哥走第1步后，塔子哥在格子(1,2)，格子(1,1)变成反向，地图变成:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<v \n^<\n")])])]),t("p",[a._v("塔子哥走第2步后，塔子哥在格子(2,2)，格子(1,2)变成反向，地图变成:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<^ \n^<\n")])])]),t("p",[a._v("塔子哥走第3步后，塔子哥在格子(2,1)，格子(2,2)变成反向， 地图变成:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<^ \n^>\n")])])]),t("p",[a._v("塔子哥走第4步后，塔子哥在格子(1,1)，格子(2,1)变成反向， 地图变成:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<^ \nv>\n")])])]),t("p",[a._v("塔子哥走第5步后，塔子哥走出广场，格子(1,1)变成反向，地图变成:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(">^ \nv>\n")])])]),t("p",[t("img",{attrs:{src:"/split.png",alt:"split"}})]),a._v(" "),t("h2",{attrs:{id:"题目思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目思路"}},[a._v("#")]),a._v(" 题目思路")]),a._v(" "),t("p",[a._v("直接模拟，维护当前的位置以及走过的格子数量，越过边界即可以退出。对于四角边界，只要其第一次经过的时候没有出去，那么第二次到达必然出去，由于不可能存在不经过四角边界的循环，所以一定有解。")]),a._v(" "),t("p",[a._v("这里可以用到一个方便的技巧，将每个符号映射为下标0,1,2,3，其中0和1相反，2和3相反，每次下标x取反只需要x和1异或。")]),a._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[a._v("#")]),a._v(" 代码")]),a._v(" "),t("p",[a._v("ac代码(C++/Python/Java)请进入OJ(本文章顶部的超链接)查看")])])}),[],!1,null,null,null);t.default=v.exports}}]);