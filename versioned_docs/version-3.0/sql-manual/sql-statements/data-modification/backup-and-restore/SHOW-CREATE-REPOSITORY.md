---
{
    "title": "SHOW CREATE REPOSITORY",
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


## Description

This statement is used to demonstrate the creation statement of a repository.

grammar:

```sql
SHOW CREATE REPOSITORY for repository_name;
```

illustrate:
-  `repository_name`: repository name

## Example

1. Show the creation statement of the specified repository

    ```sql
    SHOW CREATE REPOSITORY for test_repository
    ```

## Keywords

    SHOW, CREATE, REPOSITORY

## Best Practice

