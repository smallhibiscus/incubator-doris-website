(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{705:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-intersect"}},[t._v("#")]),t._v(" bitmap_intersect")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios such as: calculating user retention rate.")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("BITMAP BITMAP_INTERSECT(BITMAP value)")])]),t._v(" "),a("p",[t._v("Enter a set of bitmap values, find the intersection of the set of bitmap values, and return.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("p",[t._v("Table schema")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Find the retention of users between 2020-05-18 and 2020-05-19 under different tags.\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")])])]),a("p",[t._v("Used in combination with the bitmap_to_string function to obtain the specific data of the intersection")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Who are the users retained under different tags between 2020-05-18 and 2020-05-19?\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("BITMAP_INTERSECT, BITMAP\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);