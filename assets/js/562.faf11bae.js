(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{831:function(n,t,s){"use strict";s.r(t);var a=s(14),e=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://codefun2000.com/p/P1890",target:"_blank",rel:"noopener noreferrer"}},[n._v("在线评测链接:P1890"),t("OutboundLink")],1)]),n._v(" "),t("h1",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),t("p",[n._v("小友在部门团建中参与了一款消消乐游戏，该游戏规则如下:")]),n._v(" "),t("ul",[t("li",[n._v('桌子上有一排动物图案，分别是猫"C"，狗"D"，狮子"L"，猴子"M"，鸟"B"。')]),n._v(" "),t("li",[n._v("小友的手里有一些对应的动物图案，小友的日标是清空桌子上的所有图案")]),n._v(" "),t("li",[n._v("每一回合，从小友手中的图案中任选一个，插入桌子的图案中，可以插入在两个图案之间或一排图案的两端")]),n._v(" "),t("li",[n._v("在插入图案之后，如果有出现三个或者三个以上图案相同且相连的情况，则将他们移除")]),n._v(" "),t("li",[n._v("如果移除图案后，再次出现三个或者三个以上图案相同且相连的情况，则可以继续移除这些图案，直到不再满条件")]),n._v(" "),t("li",[n._v("如果桌面上的图案均被移除，则认为小友获得了胜利")]),n._v(" "),t("li",[n._v("重复上述过程，直至图案全被移除或小友手中没有图案")])]),n._v(" "),t("p",[n._v("给定两个字符串，分别表示桌面上初始图案排布情况和小友手里的图案，请你帮小友计算如果按照上还步骤移除桌面上所有的图案，所需要最少的图享数量，如果无法移除所有的图案，则返回-1")]),n._v(" "),t("h1",{attrs:{id:"输入描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入描述"}},[n._v("#")]),n._v(" 输入描述")]),n._v(" "),t("p",[n._v("输入共有两行")]),n._v(" "),t("p",[n._v("第一行表示桌面上初始图案分布排列情况")]),n._v(" "),t("p",[n._v("第二行表示小友手中图案情况")]),n._v(" "),t("p",[n._v("字符串均由“C”、“D”、“L”、“M”、“B”组成")]),n._v(" "),t("h1",{attrs:{id:"输出描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出描述"}},[n._v("#")]),n._v(" 输出描述")]),n._v(" "),t("p",[n._v("输出需要移除桌面上所有图案所需要最少的图案数量，若无法移除，则返回-1")]),n._v(" "),t("h1",{attrs:{id:"样例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[n._v("#")]),n._v(" 样例")]),n._v(" "),t("p",[t("strong",[n._v("输入")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("BBCCLLBB\nBCLCB\n")])])]),t("p",[t("strong",[n._v("输出")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("2\n")])])]),t("p",[t("img",{attrs:{src:"/split.png",alt:"split"}})]),n._v(" "),t("h2",{attrs:{id:"思路-搜索-剪枝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路-搜索-剪枝"}},[n._v("#")]),n._v(" 思路：搜索+剪枝")]),n._v(" "),t("p",[n._v("原题详见"),t("a",{attrs:{href:"https://leetcode.cn/problems/zuma-game/solutions/1091905/gong-shui-san-xie-yi-ti-shuang-jie-sou-s-3ftb/",target:"_blank",rel:"noopener noreferrer"}},[n._v("祖玛游戏"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <bits/stdc++.h>\nusing namespace std;\n\n// 哈希表，用于记忆化搜索，避免重复计算\nunordered_map<string, int> memo;\n\n// 删除连续三个及以上相同字符的子串\nstring reduceString(const string &input) {\n    string result;\n    vector<pair<char, int>> stack;\n\n    // 遍历字符串input中的每个字符\n    for (auto ch : input) {\n        // 如果栈不为空且当前字符与栈顶字符不同且栈顶字符的数量>=3，则弹出栈顶元素\n        while (!stack.empty() && ch != stack.back().first && stack.back().second >= 3) {\n            stack.pop_back();\n        }\n        // 如果栈为空或当前字符与栈顶字符不同，则将当前字符压入栈\n        if (stack.empty() || ch != stack.back().first) {\n            stack.push_back({ch, 1});\n        } else {\n            // 否则，增加栈顶字符的数量\n            stack.back().second++;\n        }\n    }\n\n    // 处理最后一个字符组，如果数量>=3，则弹出\n    if (!stack.empty() && stack.back().second >= 3) {\n        stack.pop_back();\n    }\n\n    // 将栈中剩余的字符按顺序拼接成结果字符串\n    for (int i = 0; i < stack.size(); ++i) {\n        for (int j = 0; j < stack[i].second; ++j) {\n            result.push_back(stack[i].first);\n        }\n    }\n    return result;\n}\n\n// 深度优先搜索函数，尝试在不同位置插入手中的球\nint search(const string &state, const string &balls) {\n    // 如果当前棋盘为空，表示已经清空，返回0步数\n    if (state.empty()) {\n        return 0;\n    }\n\n    // 记忆化搜索，避免重复计算\n    if (memo.count(state + " " + balls)) {\n        return memo[state + " " + balls];\n    }\n\n    int minSteps = 6;  // 初始化结果为6，因为最多只能使用5步\n\n    // 遍历手中的每个球\n    for (int i = 0; i < balls.size(); ++i) {\n        // 剪枝1: 如果当前球的颜色和前一个球相同，跳过\n        if (i > 0 && balls[i] == balls[i - 1]) {\n            continue;\n        }\n\n        // 遍历棋盘中的每个位置，尝试插入当前的球\n        for (int j = 0; j <= state.size(); ++j) {\n            // 剪枝2: 只在连续相同颜色球的开头插入新球\n            if (j > 0 && state[j - 1] == balls[i]) {\n                continue;\n            }\n\n            bool canInsert = false;\n            // 剪枝3: 只在两种情况放置新球\n            // 情况1: 当前球颜色与后面的球颜色相同\n            if (j < state.size() && state[j] == balls[i]) {\n                canInsert = true;\n            }\n            // 情况2: 前后颜色相同且与当前球颜色不同时放置球\n            if (j > 0 && j < state.size() && state[j - 1] == state[j] && state[j] != balls[i]) {\n                canInsert = true;\n            }\n\n            // 如果满足放置球的条件\n            if (canInsert) {\n                // 新的棋盘状态，插入球并清理\n                string newState = reduceString(state.substr(0, j) + balls[i] + state.substr(j));\n                // 新的手牌状态，移除已经使用的球\n                string newBalls = balls.substr(0, i) + balls.substr(i + 1);\n                // 递归调用search，更新最小步数\n                minSteps = min(minSteps, search(newState, newBalls) + 1);\n            }\n        }\n    }\n\n    // 将结果存入哈希表\n    memo[state + " " + balls] = minSteps;\n    return minSteps;\n}\n\n// 主函数，找到最小的步骤数\nint calculateMinSteps(string state, string balls) {\n    // 手中的球按颜色排序，方便剪枝\n    sort(balls.begin(), balls.end());\n    int result = search(state, balls);\n    // 如果结果小于等于5，返回结果，否则返回-1表示无法完成\n    return result <= 5 ? result : -1;\n}\n\nint main() {\n    // 提高输入输出效率\n    std::ios::sync_with_stdio(false);\n    string board, hand;\n    // 输入棋盘和手中的球\n    cin >> board >> hand;\n    // 调用calculateMinSteps函数并输出结果\n    cout << calculateMinSteps(board, hand);\n\n    return 0;\n}\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);