---
name: "asseq"
description: Generate a call to assert equals already calling expected and actual variables.
type: Live template
tags:
  - Testing
  - Test assertion
---
```xml
<template name="asseq" value="$$this-&gt;assertEquals($$expected$VAR1$, $$actual$VAR2$);" description="" toReformat="true" toShortenFQNames="true">
    <variable name="VAR1" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <variable name="VAR2" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <context>
        <option name="PHP Statement" value="true" />
    </context>
</template>
```
