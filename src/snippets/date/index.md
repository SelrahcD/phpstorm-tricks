---
name: "$date$"
description: Get the current date.
type: Live template
tags:
  - Data generation
---
```xml
<template name="$date$" value="'$date$'$END$" description="Generate the current date" toReformat="false" toShortenFQNames="true">
    <variable name="date" expression="date(&quot;yyyy-MM-dd'T'HH:mm:ss.SSSz&quot;)" defaultValue="" alwaysStopAt="false" />
    <context>
        <option name="PHP Expression" value="true" />
    </context>
</template>
```
