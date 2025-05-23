---
{
    "title": "ATAN2",
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

Returns the arc tangent of 'y' / 'x'.

## Syntax

```sql
ATAN2(<y>, <x>)
```

## Parameters  

| Parameter | Description |  
| -- | -- |  
| `<x>` | The value representing the horizontal distance (coordinate) from the origin (0,0) along the x-axis. |  
| `<y>` | The value representing the vertical distance (coordinate) from the origin (0,0) along the y-axis. |  

## Return Value  

The atan2 value of parameter `y` / `x`. 

## Example

```sql
select atan2(0.1, 0.2);
```

```text
+---------------------+
| atan2(0.1, 0.2)     |
+---------------------+
| 0.46364760900080609 |
+---------------------+
```

```sql
select atan2(1.0, 1.0);
```

```text
+---------------------+
| atan2(1.0, 1.0)     |
+---------------------+
| 0.78539816339744828 |
+---------------------+
```
