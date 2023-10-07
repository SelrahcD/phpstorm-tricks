---
name: "$uuid$"
description: Generate an UUID.
type: Live template
tags:
  - Data generation
---
```xml
<template name="$uuid$" value="'$uuid$'$END$" description="Generate an UUID" toReformat="false" toShortenFQNames="true">
    <variable name="uuid" expression="groovyScript(&quot;UUID.randomUUID().toString()&quot;) " defaultValue="" alwaysStopAt="false" />
    <context>
        <option name="PHP Expression" value="true" />
    </context>
</template>
```
