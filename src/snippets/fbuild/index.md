---
name: "fbuild"
description: Generate the encapsulating function for builders.
type: Live template
tags:
  - Builders
---

```xml
<template name="fbuild" value="function a$FUNCTIONAME$(): $TYPE$ {&#10;&#9;return new $TYPE$();&#10;}" description="function encapsulating a builder" toReformat="true" toShortenFQNames="true">
  <variable name="TYPE" expression="complete()" defaultValue="" alwaysStopAt="true" />
  <variable name="FUNCTIONAME" expression="regularExpression(TYPE, &quot;Builder&quot;, &quot;&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="PHP Statement" value="true" />
  </context>
</template>
```
