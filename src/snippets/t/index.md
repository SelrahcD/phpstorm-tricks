---
name: "@t"
description: Generate an empty PhpUnit test with the `@test` annotation.
type: Live template
tags:
  - Testing
  - Generate test
---
```xml
<template name="@t" value="/**&#10;* @test&#10;*/&#10;public function $NAME$(): void {&#10;    $END$&#10;}" description="Add a test function" toReformat="true" toShortenFQNames="true">
  <variable name="NAME" expression="" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="PHP Class Member" value="true" />
  </context>
</template>
```
