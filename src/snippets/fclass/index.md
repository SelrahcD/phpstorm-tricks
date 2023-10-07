---
name: fclass
description: Generate a final class.
type: Live template
tags:
  - Class generation
---
```xml
<template name="fclass" value="final class $CLASS_NAME$ {&#10;&#9;$END$&#10;}" description="final class" toReformat="false" toShortenFQNames="true">
    <variable name="CLASS_NAME" expression="" defaultValue="" alwaysStopAt="true" />
    <context>
        <option name="PHP" value="true" />
    </context>
</template>
```
