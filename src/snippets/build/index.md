---
name: "build"
description: Generate the build method for builders.
type: Live template
tags:
  - Builders
---

```xml
<template name="build" value="public function build(): $TYPE$&#10;{&#10;    return new $TYPE$($PARAMETERS$$END$);&#10;}" description="Build method" toReformat="true" toShortenFQNames="true">
    <variable name="TYPE" expression="" defaultValue="regularExpression(phpClassName(), &quot;Builder&quot;, &quot;&quot;)" alwaysStopAt="false" />
    <variable name="PARAMETERS" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <context>
        <option name="PHP Class Member" value="true" />
    </context>
</template>
```
