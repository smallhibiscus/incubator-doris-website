---
{
    "title": "SHOW TABLET STORAGE FORMAT",
    "language": "zh-CN"
}
---

<!-- 
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->


## 描述

该语句用于显示 Backend 上的存储格式信息（仅管理员使用）

### 语法

SHOW TABLET STORAGE FORMAT [VERBOSE]

## 示例

    ```sql
    MySQL [(none)]> show tablet storage format;
    +-----------+---------+---------+
    | BackendId | V1Count | V2Count |
    +-----------+---------+---------+
    | 10002     | 0       | 2867    |
    +-----------+---------+---------+
    1 row in set (0.003 sec)

    MySQL [test_query_qa]> show tablet storage format verbose;
    +-----------+----------+---------------+
    | BackendId | TabletId | StorageFormat |
    +-----------+----------+---------------+
    | 10002     | 39227    | V2            |
    | 10002     | 39221    | V2            |
    | 10002     | 39215    | V2            |
    | 10002     | 39199    | V2            |
    +-----------+----------+---------------+
    4 rows in set (0.034 sec)
    ```

### 关键字

SHOW, TABLET, STORAGE, FORMAT

