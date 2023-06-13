module.exports = {
    base : '/Implict-ch.github.io/',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
      ],
    extendMarkdown(md) {
        md.set({ html: true });
        md.use(require("markdown-it-katex"));
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'CodeFun2000在线评测系统',
                link : 'https://www.codefun2000.com'
            }],
        // 侧边栏配置
        sidebar: [
            {
                title: '本站必读',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "本站必读", path: "/" }
                ]
            },
            {
                title: "美团",
                path: '/company/mt', // 默认激活的选项
                collapsable: true , 
                children: [
                    {
                        title: "2023年3月18日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-塔子哥抓敌人" , path : "/company/mt/3-18/P1087.html" , sidebar:false},
                            {title : "第二题-k彩色区间" , path : "/company/mt/3-18/P1088.html" , sidebar:false},
                            {title : "第三题-塔子哥的回文串" , path : "/company/mt/3-18/P1089.html" , sidebar:false},
                            {title : "第四题-提瓦特商店" , path : "/company/mt/3-18/P1090.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年4月1日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-调整" , path : "/company/mt/4-01/P1137.html" , sidebar:false},
                            {title : "第二题-塔子哥的代数题" , path : "/company/mt/4-01/P1138.html" , sidebar:false},
                            {title : "第三题-塔子哥的收藏夹" , path : "/company/mt/4-01/P1139.html" , sidebar:false},
                            {title : "第四题-倒水魔法" , path : "/company/mt/4-01/P1140.html" , sidebar:false},
                            {title : "第五题-染色の树" , path : "/company/mt/4-01/P1141.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年4月8日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-换座位" , path : "/company/mt/4-08/P1166.html" , sidebar:false},
                            {title : "第二题-必经之路" , path : "/company/mt/4-08/P1167.html" , sidebar:false},
                            {title : "第三题-玩具打包" , path : "/company/mt/4-08/P1168.html" , sidebar:false},
                            {title : "第四题-田地行走" , path : "/company/mt/4-08/P1169.html" , sidebar:false},
                            {title : "第五题-RGB树" , path : "/company/mt/4-08/P1170.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年4月15日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-字符串前缀" , path : "/company/mt/4-15/P1235.html" , sidebar:false},
                            {title : "第二题-分糖果" , path : "/company/mt/4-15/P1236.html" , sidebar:false},
                            {title : "第三题-交通规划" , path : "/company/mt/4-15/P1237.html" , sidebar:false},
                            {title : "第四题-俄罗斯套娃" , path : "/company/mt/4-15/P1238.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年4月23日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-申请奖学金" , path : "/company/mt/4-23/P1245.html" , sidebar:false},
                            {title : "第二题-制作骰子" , path : "/company/mt/4-23/P1246.html" , sidebar:false},
                            {title : "第三题-农场大亨" , path : "/company/mt/4-23/P1247.html" , sidebar:false},
                            {title : "第四题-01串的代价" , path : "/company/mt/4-23/P1248.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年4月29日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-选课" , path : "/company/mt/4-29/P1266.html" , sidebar:false},
                            {title : "第二题-限行" , path : "/company/mt/4-29/P1267.html" , sidebar:false},
                            {title : "第三题-酒王" , path : "/company/mt/4-29/P1268.html" , sidebar:false},
                            {title : "第四题-SSTF算法" , path : "/company/mt/4-29/P1269.html" , sidebar:false}
                        ]
                    },
                    {
                        title: "2023年5月13日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-塔子哥的数字" , path : "/company/mt/5-13/P1286.html" , sidebar:false},
                            {title : "第二题-南北对决" , path : "/company/mt/5-13/P1287.html" , sidebar:false},
                            {title : "第三题-火车调度" , path : "/company/mt/5-13/P1288.html" , sidebar:false},
                            {title : "第四题-沙堡" , path : "/company/mt/5-13/P1289.html" , sidebar:false}
                        ]
                    },
                ],
            },
            {
                title: "华为",
                path: '/company/hw', // 默认激活的选项
                collapsable: true , 
                children: [
                    {
                        title: "2022年9月23日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-最佳检测顺序" , path : "/company/hw/22-9-23/P1163.html" , sidebar:false},
                            {title : "第二题-DNS本地缓存" , path : "/company/hw/22-9-23/P1164.html" , sidebar:false},
                            {title : "第三题-最省出游方案" , path : "/company/hw/22-9-23/P1165.html" , sidebar:false},
                        ]
                    },
                    {
                        title: "2022年10月12日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-D路通信" , path : "/company/hw/22-10-12/P1216.html" , sidebar:false},
                        ]
                    },
                ],
            },
            {
                title: "阿里巴巴",
                path: '/company/alibaba', // 默认激活的选项
                collapsable: true , 
                children: [
                    {
                        title: "2023年3月15日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-满二叉树计数" , path : "/company/alibaba/23-3-15/P1082.html" , sidebar:false},
                            {title : "第二题-极差三元组计数" , path : "/company/alibaba/23-3-15/P1083.html" , sidebar:false},
                            {title : "第三题-k次操作最小化极差" , path : "/company/alibaba/23-3-15/P1084.html" , sidebar:false},
                        ]
                    },
                    {
                        title: "2023年3月21日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "开发-第一题-数组重排" , path : "/company/alibaba/23-3-21/P1100.html" , sidebar:false},
                            {title : "开发-第二题-最大化01串中1的个数" , path : "/company/alibaba/23-3-21/P1101.html" , sidebar:false},
                            {title : "开发-第三题-数数" , path : "/company/alibaba/23-3-21/P1102.html" , sidebar:false},
                            {title : "算法-第一题-加1减1" , path : "/company/alibaba/23-3-21/P1103.html" , sidebar:false},
                            {title : "算法-第二题-任务分配" , path : "/company/alibaba/23-3-21/P1104.html" , sidebar:false},
                            {title : "算法-第三题-二叉树染色(Ⅱ)" , path : "/company/alibaba/23-3-21/P1105.html" , sidebar:false},
                        ]
                    },
                    {
                        title: "2023年3月26日场", 
                        path: "" ,
                        collapsable : true , 
                        children : [
                            {title : "第一题-切割环形数组" , path : "/company/alibaba/23-3-26/P1117.html" , sidebar:false},
                            {title : "第二题-报数字" , path : "/company/alibaba/23-3-26/P1118.html" , sidebar:false},
                            {title : "第三题-数组之和最小值" , path : "/company/alibaba/23-3-26/P1119.html" , sidebar:false},
                        ]
                    },
                ],
            }
        ]
    }
}
