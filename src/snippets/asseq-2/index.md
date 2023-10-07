---
name: ev
description: Generate a call to assert equals 
type: Custom Postfix Template
tags:
  - Testing
  - Test assertion
---

```js
.asseq : Assert equals
    ANY  →  \$this->assertEquals($expectedVar#1:complete()$, $expr$);
```