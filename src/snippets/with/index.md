---
name: "with"
description: Generate a "wither" method for builders.
type: Live template
tags:
  - Builders
---

```xml
<template name="with" value="public function with$NAME$($PARAMETER_TYPE$ $$$PARAMETER_NAME$): self&#10;{&#10;&#9;$clone = clone $this;&#10;&#9;&#10;&#9;$clone-&gt;$PARAMETER_NAME$$END$ = $$$PARAMETER_NAME$;&#10;&#9;&#10;&#9;return $clone;&#10;}" description="Create a wither" toReformat="false" toShortenFQNames="true">
    <variable name="PARAMETER_TYPE" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <variable name="PARAMETER_NAME" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <variable name="NAME" expression="" defaultValue="capitalize(PARAMETER_NAME)" alwaysStopAt="false" />
    <context>
        <option name="PHP Class Member" value="true" />
    </context>
</template>
```
