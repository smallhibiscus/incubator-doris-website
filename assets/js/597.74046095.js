(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1049:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-table-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-table-creation"}},[e._v("#")]),e._v(" SHOW TABLE CREATION")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This statement is used to show the execution of the specified Iceberg Database table creation task\nSyntax.\n    SHOW TABLE CREATION [FROM db_name] [LIKE table_name_wild];\n    \nDescription.\n    1. Usage Notes\n        1) If db_name is not specified, the current default db is used.\n        2) If you use LIKE, it will match the table creation task with table_name_wild in the table name\n    2. The meaning of each column\n        1) Database: the name of the database\n        2) Table: the name of the table to be created\n        3) Status: the creation status of the table, `success`/`fail`.\n        4) CreateTime: the time to perform the task of creating the table\n        5) Error Msg: Error message of the failed table creation, or empty if it succeeds.\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. Show all the table creation tasks in the default Iceberg db\n    SHOW TABLE CREATION;\n\n    mysql> show table creation;\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg                                                |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |                                                          |\n    | default_cluster:iceberg_db | logs   | fail    | 2022-01-24 19:42:45 | Cannot convert Iceberg type[list<string>] to Doris type. |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n\n2. Show the table creation tasks in the specified Iceberg db\n    SHOW TABLE CREATION FROM example_db;\n\n    mysql> show table creation from iceberg_db;\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg                                                |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |                                                          |\n    | default_cluster:iceberg_db | logs   | fail    | 2022-01-24 19:42:45 | Cannot convert Iceberg type[list<string>] to Doris type. |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    \n3. Show table creation tasks for the specified Iceberg db with the string "log" in the table name\n    SHOW TABLE CREATION FROM example_db LIKE \'%log%\';\n    \n    mysql> show table creation from iceberg_db like "%1";\n    +----------------------------+--------+---------+---------------------+-----------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg |\n    +----------------------------+--------+---------+---------------------+-----------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |           |\n    +----------------------------+--------+---------+---------------------+-----------+\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("SHOW,TABLE CREATION\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);