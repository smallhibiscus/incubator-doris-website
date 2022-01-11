(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{442:function(t,n,a){"use strict";a.r(n);var e=a(43),i=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("#BITMAP")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("TO_BITMAP(expr)")]),t._v(" : Convert TINYINT,SMALLINT,INT type column to Bitmap.")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_UNION(expr)")]),t._v(" : Calculate the union of Bitmap, return the serialized Bitmap value.")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_COUNT(expr)")]),t._v(" : Calculate the distinct value number of a Bitmap.")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_UNION_INT(expr)")]),t._v(" : Calculate the distinct value number of TINYINT,SMALLINT and INT type column. Same as COUNT(DISTINCT expr)")]),t._v(" "),a("p",[t._v("Notice：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. TO_BITMAP function only receives TINYINT,SMALLINT,INT.\n2. BITMAP_UNION only receives following types of parameter:\n\t- Column with BITMAP_UNION aggregate type in AGGREGATE KEY mode.\n\t- TO_BITMAP function.\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE `bitmap_udaf` (\n  `id` int(11) NULL COMMENT "",\n  `id2` int(11)\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10;\n\nmysql> select bitmap_count(bitmap_union(to_bitmap(id2))) from bitmap_udaf;\n+----------------------------------------------+\n| bitmap_count(bitmap_union(to_bitmap(`id2`))) |\n+----------------------------------------------+\n|                                            6 |\n+----------------------------------------------+\n\nmysql> select bitmap_union_int (id2) from bitmap_udaf;\n+-------------------------+\n| bitmap_union_int(`id2`) |\n+-------------------------+\n|                       6 |\n+-------------------------+\n\n\nCREATE TABLE `bitmap_test` (\n  `id` int(11) NULL COMMENT "",\n  `id2` varchar(0) bitmap_union NULL  // NOTICE: bitmap_union\'s varchar length must be 0.\n) ENGINE=OLAP\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10;\n\nmysql> select bitmap_count(bitmap_union(id2)) from bitmap_test;\n+-----------------------------------+\n| bitmap_count(bitmap_union(`id2`)) |\n+-----------------------------------+\n|                                 8 |\n+-----------------------------------+\n\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("BITMAP,BITMAP_COUNT,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);