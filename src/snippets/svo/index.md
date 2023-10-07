---
name: svo
description: Generate the body for a string value object class.
type: Live template
tags:
  - Value object
---
```xml
<template name="svo" value="&#10;    private string $$$FIELD_NAME$;&#10;&#10;    public static function fromString (string $$$FIELD_NAME$): $TYPE$ { return new $TYPE$($$$FIELD_NAME$); }&#10;&#10;    private function __construct (string $$$FIELD_NAME$) { $this-&gt;$FIELD_NAME$ = $$$FIELD_NAME$; }&#10;&#10;    public function __toString (): string { return $this-&gt;$FIELD_NAME$; }" description="Simple String Value Object" toReformat="true" toShortenFQNames="true">
    <variable name="TYPE" expression="phpClassName()" defaultValue="" alwaysStopAt="false" />
    <variable name="FIELD_NAME" expression="camelCase(TYPE)" defaultValue="" alwaysStopAt="false" />
    <context>
        <option name="PHP Class Member" value="true" />
    </context>
</template>
```
