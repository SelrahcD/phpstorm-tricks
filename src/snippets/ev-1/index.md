---
name: ev
description: Generate an expected variable for tests
type: Live template
tags:
  - Testing
  - Test assertion
---

```xml
<template name="ev" value="$$expected$COMPLETE$ = $EXPECTEDVALUE$;" description="Expected variable assignation" toReformat="false" toShortenFQNames="true">
    <variable name="EXPECTEDVALUE" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <variable name="COMPLETE" expression="capitalize(regularExpression(phpSuggestVariableName(), &quot;\\$&quot;, &quot;&quot;))" defaultValue="" alwaysStopAt="true" />
    <context>
        <option name="PHP Expression" value="true" />
    </context>
</template>
```