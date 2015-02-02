---
title: DustJS | Using Filters
layout: guides
permalink: /guides/using-filters/
---

# Filters

Filters are used to transform a variable before outputting it. You can attach one or many filters to a variable, and you can add your own filters to augment the ones built-in to Dust.

## Using Filters

Filters are attached to a Dust reference by adding a pipe `|` and the filter name after the reference name. You can chain filters by adding multiple pipes. The filters will be run from left-to-right.

<dust-demo template-name="loop">
<dust-demo-template>{title}
{title|s}
{title|j}</dust-demo-template>
<dust-demo-json>{
  "title": '"All is &lt;Fair&gt; in Love & War"'
}</dust-demo-json>
</dust-demo>

## Built-In Filters

* `h` HTML-encode
* `s` turn off automatic HTML encoding
* `j` Javascript string encode
* `u` encodeURI
* `uc` encodeURIComponent
* `js` JSON.stringify
* `jp` JSON.parse

Dust applies the `h` filter to all references by default, ensuring that variables are HTML-escaped. You can undo this autoescaping by appending the `s` filter.

## Creating a new filter

See [the filter API](/docs/filter-api).