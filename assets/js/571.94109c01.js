(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{846:function(n,t,i){"use strict";i.r(t);var a=i(14),s=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"思路-贪心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路-贪心"}},[n._v("#")]),n._v(" 思路：贪心")]),n._v(" "),t("p",[n._v("可以从两个角度来思考这个贪心问题。")]),n._v(" "),t("h3",{attrs:{id:"角度一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角度一"}},[n._v("#")]),n._v(" 角度一")]),n._v(" "),t("p",[n._v("从算力需求最小的任务开始。\n对于一个算力需求小的任务，如果找不到一个服务器算力满足其算力需求，那么对于算力需求大于这个任务的其他任务，必然也不能被完成。")]),n._v(" "),t("p",[n._v("此外，每个任务应该找到大于其算力需求的服务器，但是这个服务器的算力也应该尽可能小。留着算力更大的服务器给算力需求更大的任务。")]),n._v(" "),t("h3",{attrs:{id:"角度二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角度二"}},[n._v("#")]),n._v(" 角度二")]),n._v(" "),t("p",[n._v("从服务器算力最大的任务开始。\n对于一个服务器算力大的服务器，如果找不到一个任务满足算力需求小于服务器算力，则对应算力更小的服务器，必然也找不到算力需求小于其算力的任务。")]),n._v(" "),t("p",[n._v("此外，每个服务器应该找到算力需求小于其服务器算力的任务，但是这个任务的算力也应该尽可能大。留着算力需求更小的任务给服务器算力更小的服务器。")]),n._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 角度一\n#include<bits/stdc++.h>\nusing namespace std;\n\nvoid solve() {\n    int n, m;\n    cin >> n >> m;\n    vector<int> a(n), b(m);\n    // a 表示服务器算力\n    for (int i = 0; i < n; ++i) cin >> a[i];\n    // b 表示每个任务需要的算力\n    for (int i = 0; i < m; ++i) cin >> b[i];\n\n    // 从小到大排序\n    sort(a.begin(), a.end());\n    sort(b.begin(), b.end());\n\n    int ans = 0;\n    for (int i = 0, j = 0; i < m; ++i) {\n        while (j < n && a[j] <= b[i]) {\n            j += 1;\n        }\n        if (j < n) {\n            ans += 1;\n            j += 1;\n        }\n    }\n\n    cout << ans << "\\n";\n}\n\nint main(){\n\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int T;\n    cin >> T;\n\n    for (int ca = 1; ca <= T; ++ca) {\n        solve();\n    }\n\n    return 0;\n}\n')])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 角度二\n#include<bits/stdc++.h>\nusing namespace std;\n\nvoid solve() {\n    int n, m;\n    cin >> n >> m;\n    vector<int> a(n), b(m);\n    // a 表示服务器算力\n    for (int i = 0; i < n; ++i) cin >> a[i];\n    // b 表示每个任务需要的算力\n    for (int i = 0; i < m; ++i) cin >> b[i];\n\n    // 从小到大排序\n    sort(a.begin(), a.end());\n    sort(b.begin(), b.end());\n\n    // 从算力最大的服务器开始，找到一个任务所需算力小于这个服务器的\n    int ans = 0;\n    for (int i = n - 1, j = m - 1; i >= 0; --i) {\n        // 排除所有算力需要大于等于当前服务器算力的任务\n        // 这些任务不可能被完成\n        while (j >= 0 && b[j] >= a[i]) {\n            j -= 1;\n        }\n        // 如果找到一个任务\n        if (j >= 0) {\n            // 答案 + 1\n            ans += 1;\n            // 该任务已被完成\n            j -= 1;\n        }\n    }\n\n    cout << ans << "\\n";\n}\n\nint main(){\n\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int T;\n    cin >> T;\n\n    for (int ca = 1; ca <= T; ++ca) {\n        solve();\n    }\n\n    return 0;\n}\n')])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("p",[n._v("本题属于经典贪心题，考察是否掌握基本的贪心思想，属于简单题")])])}),[],!1,null,null,null);t.default=s.exports}}]);