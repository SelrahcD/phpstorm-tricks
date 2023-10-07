---
name: ret
description: Return current expression
type: Custom Postfix Template
tags:
  - Return
---

```js
.ret : Return expression
    ANY -> return $expr$;
```