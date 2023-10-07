---
name: "@tl"
description: Generate an empty PhpUnit test with the `@test` annotation and a fake name.
type: Live template
tags:
  - Testing
  - Generate test
---

```xml
<template name="@tl" value="/**&#10;* @test&#10;*/&#10;public function TODO_RENAME_$LINE_NUMBER$(): void {&#10;    $END$&#10;}" description="Add a lazy named test" toReformat="true" toShortenFQNames="true">
  <variable name="LINE_NUMBER" expression="lineNumber()" defaultValue="" alwaysStopAt="false" />
  <context>
    <option name="PHP Class Member" value="true" />
  </context>
</template>
```