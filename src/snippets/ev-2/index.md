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
    ANY -> \$expected$var:capitalize(groovyScript("if(_1) { _1.substring(1) } else { _1 }", phpSuggestVariableName()))$ = $expr$;$END$
```