(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{634:function(E,_,n){"use strict";n.r(_);var P=n(14),a=Object(P.a)({},(function(){var E=this,_=E._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":E.$parent.slotKey}},[_("p",[_("a",{attrs:{href:"https://codefun2000.com/p/P1675",target:"_blank",rel:"noopener noreferrer"}},[E._v("在线评测链接:P1675"),_("OutboundLink")],1)]),E._v(" "),_("h2",{attrs:{id:"题目描述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[E._v("#")]),E._v(" 题目描述")]),E._v(" "),_("p",[E._v("塔子哥公司的员工信息是人力资源管理的重要组成部分，请根据提供的员工信息表和最近的员工信息更新表，更新员工的职位信息。")]),E._v(" "),_("p",[E._v("员工信息表EMPLOYEE_INFO示例如下，其中 EMPLOYEE_ID 是员编号，POSITION 是员工职位，LAST_UPDATE_DT是最后一次职位信息更新时间。")]),E._v(" "),_("p",[E._v("员工信息更新表EMPLOYEE_UPDATE示例如下，其中EMPLOYEE_ID是员工编号，UPDATE_DT是信息更新时间，NEW_POSITION 是员工新职位。")]),E._v(" "),_("p",[E._v("但是现在遇到的问题是，EMPLOYEE_INFO表和EMPLOYEE_UPDATE表的信息不是一一匹配了。\n你现在需要结合这2个表，输出一个最新的员工职位信息和更新时间。\n遵循以下原则:\n"),_("strong",[E._v("对于每个员工，首先在更新表EMPLOYEE UPDATE中找到每个员工最晚的UPDATE_DT。")]),E._v(" "),_("strong",[E._v("1.如果更新表EMPLOYEE_UPDATE中最晚的UPDATE_DT”晚于EMPLOYEE_INFO表中的”LAST_UPDATE_DT“，则输出的职位信息和更新时间=更新表中的职位和时间。")]),E._v(" "),_("strong",[E._v("2.否则的话，则输出的职位信息和更新时间=EMPLOYEE_INFO表中的职位和时间。最后的输出结果最后结果按照EMPLOYEE_ID升序排序.")])]),E._v(" "),_("p",[E._v("示例输出如下:")]),E._v(" "),_("p",[E._v("EMPLOYEE_ID|POSITION|LAST_UPDATE_DT "),_("br"),E._v("\nEMP001|Manager|2022-03-15 "),_("br"),E._v("\nEMP002|Senior Manager|2022-03-17 "),_("br"),E._v("\nEMP003|Manager|2023-01-01")]),E._v(" "),_("p",[E._v("EMP001在更新表里的最晚UPDAT_EDT为2022-03-15，和\nEMPLOYEE_INFO里的一样，输出EMPLOYEE_INFO表中的职位和时间。")]),E._v(" "),_("p",[E._v("EMP001在更新表里的最晚UPDATE_DT为2022-03-15，和EMPLOYEE_INFO里的一样，输出EMPLOYEE_INFO表中的职位和时间")]),E._v(" "),_("p",[E._v("EMP002在更新表里的最晚UPDATE_DT为2022-03-16，晚于 EMPLOYEE_INFO里的LAST_UPDATE_DT，输出EMPLOYEE_UPDATE表中的职位和时间")]),E._v(" "),_("p",[E._v("EMP003在更新表里的最晚UPDATE_DT为2022-03-16，早于\nEMPLOYEE_INFO的LAST_UPDATE_DT，输出EMPLOYEE_INFO表中 的职位和时间")]),E._v(" "),_("h2",{attrs:{id:"示例1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[E._v("#")]),E._v(" 示例1")]),E._v(" "),_("p",[_("strong",[E._v("输入")])]),E._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[E._v("drop table if exists EMPLOYEE INFO\nCREATE TABLE EMPLOYEE_INFO(\nEMPLOYEE_ID VARCHAR(10)PRIMARY KEY\nPOSITION VARCHAR(50)\nLAST_UPDATE_DT_DATE\nINSERT INTO EMPLOYEE_INFO(EMPLOYEE_ID，POSITION.\nLAST_UPDATE_DT)\nVALUES\n('EMP001','Manager',\"2022-03-15'),\n('EMP002','Sales Associate','2022-03-16'),\n('EMP003',Manager,2023-01-01);\n\n\ndrop table if exists EMPLOYEE_UPDATE\nCREATE TABLE EMPLOYEE_UPDATE (\nEMPLOYEE_ID VARCHAR(10)\nUPDATE_DT DATE,\nNEW POSITION VARCHAR(50)\n);\nINSERT INTO EMPLOYEE_UPDATE(EMPLOYEE_ID.UPDATE_DT\nNEW_POSITION)\nVALUES\n('EMP001','2022-03-13','Director'),\n('EMP002','2022-03-14','Senior Associate'),\n('EMP001','2022-03-15','Senior Director'),\n('EMP002','2022-03-16','Associate Manager'),\n('EMP003','2022-03-16','Associate Manager'),\n('EMP002','2022-03-17','Senior Manager');\n")])])]),_("p",[_("strong",[E._v("输出")])]),E._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[E._v("输出\nEMPLOYEE_ID|POSITION|LAST_UPDATE_DT\nEMP001|Manager|2022-03-15\nEMP002|Senior Manager|2022-03-17\nEMP003|Manager|2023-01-01\n")])])]),_("p",[_("img",{attrs:{src:"/split.png",alt:"split"}}),E._v("\n题解不存在")])])}),[],!1,null,null,null);_.default=a.exports}}]);