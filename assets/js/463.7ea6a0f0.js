(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{906:function(e,n,a){"use strict";a.r(n);var r=a(52),l=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"explode-json-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explode-json-array"}},[e._v("#")]),e._v(" "),a("code",[e._v("explode_json_array")])]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Table functions must be used in conjunction with Lateral View.")]),e._v(" "),a("p",[e._v("Expand a json array. According to the array element type, there are three function names. Corresponding to integer, floating point and string arrays respectively.")]),e._v(" "),a("p",[e._v("grammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explode_json_array_int(json_str)\nexplode_json_array_double(json_str)\nexplode_json_array_string(json_str)\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Original table data:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select k1 from example1 order by k1;\n+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n")])])]),a("p",[e._v("Lateral View:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select k1, e1 from example1 lateral view explode_json_array_int('[]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[1,2,3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 |    1 |\n|    1 |    3 |\n|    2 | NULL |\n|    2 |    1 |\n|    2 |    3 |\n|    3 | NULL |\n|    3 |    1 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('{\"a\": 3}') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,2,3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1.0,2.0,3.0]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('{\"a\": 3}') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[1.0,2.0,3.0]') tmp1 as e1 order by k1, e1;\n+------+----------+\n| k1   | e1       |\n+------+----------+\n|    1 | 1.000000 |\n|    1 | 2.000000 |\n|    1 | 3.000000 |\n|    2 | 1.000000 |\n|    2 | 2.000000 |\n|    2 | 3.000000 |\n|    3 | 1.000000 |\n|    3 | 2.000000 |\n|    3 | 3.000000 |\n+------+----------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | 1    |\n|    1 | 3    |\n|    1 | b    |\n|    2 | 1    |\n|    2 | 3    |\n|    2 | b    |\n|    3 | 1    |\n|    3 | 3    |\n|    3 | b    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | a    |\n|    1 | b    |\n|    1 | c    |\n|    2 | a    |\n|    2 | b    |\n|    2 | c    |\n|    3 | a    |\n|    3 | b    |\n|    3 | c    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('{\"a\": 3}') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("explode_json_array")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);