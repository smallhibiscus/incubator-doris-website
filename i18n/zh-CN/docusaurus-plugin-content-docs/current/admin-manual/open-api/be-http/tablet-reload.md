---
{
    "title": "重加载 tablet",
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


## 请求路径

`GET /api/reload_tablet?tablet_id={int}&schema_hash={int}&path={string}"`

## 描述

该功能用于重加载 tablet 数据。

## 请求参数

* `tablet_id`
    需要重加载的 table 的 id

* `schema_hash`
    schema hash      

* `path`
    文件路径     


## 请求体

无

## 响应

    ```shell
    load header succeed
    ```
## 示例


    ```shell
    curl "http://127.0.0.1:8040/api/reload_tablet?tablet_id=123456&schema_hash=1111111&path=/abc"

    ```

