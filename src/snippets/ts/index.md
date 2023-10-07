---
name: "@ts"
description: Generate an empty skipped PhpUnit test with the `@test` annotation.
type: Live template
tags:
    - Testing
    - Generate test
---

```xml
<template name="@ts" value="/**&#10;* @test&#10;*/&#10;public function $NAME$(): void {&#10;&#9;$this-&gt;markTestSkipped('Not implemented yet.');&#10;}&#10;&#10; $END$" description="Add a test function" toReformat="true" toShortenFQNames="true">
  <variable name="NAME" expression="" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="PHP Class Member" value="true" />
  </context>
</template>
```
