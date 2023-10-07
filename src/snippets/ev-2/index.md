---
name: ev
description: Generate an expected variable for tests
type: Custom Postfix Template
tags:
  - Testing
  - Test assertion
---

```js
.ev : Create an expected variable
    ANY -> \$expected$var:capitalize(groovyScript("_1.substring(1)", phpSuggestVariableName()))$ = $expr$;$END$
```