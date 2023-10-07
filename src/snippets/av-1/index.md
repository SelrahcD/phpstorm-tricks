---
name: av
url: https://media.giphy.com/media/MoaQ9bwKYeWJ6qynbz/giphy-downsized-large.gif
description: Generate an actual variable for tests.
type: Live template
tags:
  - Testing
  - Test assertion
---

```xml
<template name="av" value="$$actual$COMPLETE$ = $EXPECTEDVALUE$;" description="Actual variable assignation" toReformat="true" toShortenFQNames="true">
    <variable name="EXPECTEDVALUE" expression="complete()" defaultValue="" alwaysStopAt="true" />
    <variable name="COMPLETE" expression="capitalize(regularExpression(phpSuggestVariableName(), &quot;\\$&quot;, &quot;&quot;))" defaultValue="" alwaysStopAt="true" />
    <context>
        <option name="PHP Expression" value="true" />
    </context>
</template>
```