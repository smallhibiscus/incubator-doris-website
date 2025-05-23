---
{
    "title": "DAYS_DIFF",
    "language": "en"
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

## days_diff
### description
#### Syntax

`INT days_diff(DATETIME enddate, DATETIME startdate)`

The difference between the start time and the end time is a few days, the date judgment is accurate to seconds and rounded down to an integer. This is different from date_diff function, which only provides accuracy up to days."

### example

```
mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');
+---------------------------------------------------------+
| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |
+---------------------------------------------------------+
|                                                       1 |
+---------------------------------------------------------+

mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');
+---------------------------------------------------------+
| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |
+---------------------------------------------------------+
|                                                       0 |
+---------------------------------------------------------+
```

### keywords

    days_diff
