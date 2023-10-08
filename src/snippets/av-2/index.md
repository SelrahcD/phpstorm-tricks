---
name: av
description: Generate an actual variable for tests.
type: Custom Postfix Template
tags:
  - Testing
  - Test assertion
---

```js
.av : Create an expected variable
    ANY -> \$actual$var:capitalize(groovyScript("if(_1) { _1.substring(1) } else { _1 }", phpSuggestVariableName()))$ = $expr$;$END$
```