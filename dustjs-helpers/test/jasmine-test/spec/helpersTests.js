var helpersTests = [
  {
    name:     "replace",
    source:   "Hello {name}! You have {count} new messages.",
    context:  { name: "Mick", count: 30 },
    expected: "Hello Mick! You have 30 new messages.",
    message: "should test a basic replace"
  },
	{
    name:     "if helper without else",
    source:   '{@if cond="{x}<{y}"}<div> X < Y </div>{/if}',  
    context:  { x: 2, y: 3 },
    expected: "<div> X < Y </div>",
    message: "should test if helper without else"
  },
  {
    name:     "if helper with else block",
    source:   '{@if cond=" \'{x}\'.length && \'{y}\'.length "}<div> X and Y exists </div>{:else}<div> X and Y does not exists </div>{/if}',  
    context:  {},
    expected: "<div> X and Y does not exists </div>",
    message: "should test if helper with else block"
  },
  {
    name:     "if helper with else using the or condition",
    source:   '{@if cond=" \'{x}\'.length || \'{y}\'.length "}<div> X or Y exists </div>{:else}<div> X or Y does not exists </div>{/if}',  
    context:  { x: 1},
    expected: "<div> X or Y exists </div>",
    message: "should test if helper with else using the or condition"
  },
  {
    name:     "if helper with else using the and conditon",
    source:   '{@if cond="( \'{x}\'.length ) && ({x}<3)"}<div> X exists and is 1 </div>{:else}<div> x is not there </div>{/if}',  
    context:  { x : 1},
    expected: "<div> X exists and is 1 </div>",
    message: "should test if helper with else usingt he and conditon"
  },
  {
    name:     "if helper using $idx",
    source:   '{#list}{@if cond="( {$idx} == 1 )"}<div>{y}</div>{/if}{/list}',  
    context:  { x : 1, list: [ { y: 'foo' }, { y: 'bar'} ]},
    expected: "<div>bar</div>",
    message: "should test the if helper using $idx"
  },
  {
    name:     "select helper with a constant string and condition eq",
    source:   ["{@select key=\"foo\"}",
                 "{@eq value=\"foo\"}foo{/eq}",
               "{/select}"
              ].join("\n"),
    context:  {},
    expected: "foo",
    message: "should test select helper with a constant string and condition eq"
  },
  {
    name:     "select helper with a variable string and condition eq",
    source:   ["{@select key=\"{foo}\"}",
                 "{@eq value=\"foo\"}foo{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { "foo": "foo" },
    expected: "foo",
    message: "should test select helper with a variable string and condition eq"
  },
  {
    name:     "select helper with variable and one condition eq",
    source:   ["{@select key=foo}",
                 "{@eq value=10}foobar{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition eq"
  },
  {
    name:     "select helper with string variable compared to a number and one condition eq",
    source:   ["{@select key=foo}",
                 "{@eq value=10}foobar{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with string variable compared to a number and one condition eq"
  },
  
  {
    name:     "select helper with variable and one condition lt",
    source:   ["{@select key=foo}",
                 "{@lt value=20}foobar{/lt}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition lt"
  },
  {
    name:     "select helper with one condition lte",
    source:   ["{@select key=foo}",
                 "{@lte value=10}foobar{/lte}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with one condition lte"
  },
  {
    name:     "select helper with with variable and one condition lte",
    source:   ["{@select key=foo}",
                 "{@lte value=11}foobar{/lte}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition lte"
  },
  {
    name:     "select helper with variable and one condition gt",
    source:   ["{@select key=foo}",
                 "{@gt value=5}foobar{/gt}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition gt"
  },
  {
    name:     "select helper with variable and one condition gte",
    source:   ["{@select key=foo}",
                 "{@gte value=10}foobar{/gte}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition gte"
  },
  {
    name:     "select helper with variable and one condition gte",
    source:   ["{@select key=foo}",
                 "{@gte value=5}foobar{/gte}",
               "{/select}"
              ].join("\n"),
    context:  { foo: 10 },
    expected: "foobar",
    message: "should test select helper with variable and one condition gte"
  },
  
  {
    name:     "select helper with variable of type string and eq condition",
    source:   ["{@select key=\"{foo}\"}",
                 "{@eq value=\"bar\"}foobar{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { "foo": "bar" },
    expected: "foobar",
    message: "should test select helper with variable of type string and eq condition"
  },
  {
    name:     "select helper with two conditions",
    source:   ["{@select key=\"{foo}\"}",
                 "{@eq value=\"bar\"}foobar{/eq}",
                 "{@eq value=\"baz\"}foobaz{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { "foo": "baz" },
    expected: "foobaz",
    message: "should test select helper works with two conditions"
  },
  {
    name:     "select helper with three conditions and default case",
    source:   ["{@select key=\"{foo}\"}",
                 "{@eq value=\"bar\"}foobar{/eq}",
                 "{@eq value=\"baz\"}foobaz{/eq}",
                 "{@eq value=\"foobar\"}foofoobar{/eq}",
                 "{@default value=\"foo\"}foofoo{/default}",
               "{/select}"
              ].join("\n"),
    context:  { "foo": "foo" },
    expected: "foofoo",
    message: "should test select helper with three conditions and default case"
  },
  {
    name:     "select helper with no matching conditions",
    source:   ["{@select key=\"{foo}\"}",
                 "{@eq value=\"bar\"}foobar{/eq}",
                 "{@eq value=\"baz\"}foobaz{/eq}",
               "{/select}"
              ].join("\n"),
    context:  { "foo": "foo" },
    expected: "",
    message: "should test select helper with no matching conditions"
  },
  {
    name:     "select helper with variable and type string with 2 conditions",
    source:   ['{@select key=test}',
                '{@eq value="{y}"}<div>FOO</div>{/eq}',
                '{@eq value="{x}"}<div>BAR</div>{/eq}',
              '{/select}'].join("\n"),  
    context:  { "test":"foo", "y": "foo", "x": "bar" },
    expected: "<div>FOO</div>",
    message: "should test select helper with variable and type string with 2 conditions"
  },
  {
    name:     "select helper with variable and type string in a nested object",
    source:   "{@select key=x.key}{@eq value=10}foobar{/eq}{/select}",
    context:  {"x": {"key" : 10}},
    expected: "foobar",
    message: "should test select helper with variable and type string in a nested object"
  },
  {
    name:     "select helper with variable and type string in a nested objects",
    source:   "{@select key=\"{x.b.foo}\"}{@eq value=\"a\"}foobar{/eq}{/select}",
    context:  { x : {b : { "foo" : "a"}}},
    expected: "foobar",
    message: "should test select helper with variable and type string in a nested objects"
  },
  
  {
    name:     "select helper with missing key in the context and hence no output",
    source:   ["{#b}{@select key=y}",
               " {@eq value=\"{z}\"}<div>FOO</div>{/eq}",
               " {@eq value=\"{x}\"}<div>BAR</div>{/eq}",
               " {@default}foofoo{/default}",
               "{/select}{/b}"].join("\n"),
    context:  { b : { z: "foo", x: "bar" } },
    expected: "",
    message: "should test select helper with missing key in the context and hence no output"
  },
  {
    name:     "select helper wih key matching the else condition",
    source:   ["{#b}{@select key=\"{x}\"}",
               " {@eq value=\"{y}\"}<div>BAR</div>{/eq}",
               " {@eq value=\"{z}\"}<div>BAZ</div>{/eq}",
               " {@default value=\"foo\"}foofoo{/default}",
               "{/select}{/b}"].join("\n"),
    context:  { b : { "x": "foo", "y": "bar", "z": "baz" } },
    expected: "foofoo",
    message: "should test select helper with key matching the else condition"
  },
  {
    name:     "select helper inside a array with .",
    source:   ["{#skills}{@select key=.}",
               "{@eq value=\"java\"}JAVA,{/eq}",
               "{@eq value=\"js\"}JS,{/eq}",
               "{@default value=\"foo\"}UNKNOWN{/default}",
               "{/select}{/skills}"].join("\n"),
    context:  { "skills" : [ "java", "js" , "unknown"] },
    expected: "JAVA,JS,UNKNOWN",
    message: "should test a select helper inside a array with ."
  },
  {
    name:     "select helper inside a array with {.}",
    source:   ["{#skills}{@select key=\"{.}\"}",
               "{@eq value=\"java\"}JAVA,{/eq}",
               "{@eq value=\"js\"}JS,{/eq}",
               "{@default value=\"foo\"}UNKNOWN{/default}",
               "{/select}{/skills}"].join("\n"),
    context:  { "skills" : [ "java", "js" , "unknown"] },
    expected: "JAVA,JS,UNKNOWN",
    message: "should test select helper inside a array with {.}"
  },
  {
  	name:     "partial within a array",
    source:   '{#n}{>replace name=. count="30"/}{@sep} {/sep}{/n}',
    context:  { n: ["Mick", "Tom", "Bob"] },
    expected: "Hello Mick! You have 30 new messages. Hello Tom! You have 30 new messages. Hello Bob! You have 30 new messages.",
    message: "should test partial within an array"
  },
  {
    name:     "async_iterator",
    source:   "{#numbers}{#delay}{.}{/delay}{@sep}, {/sep}{/numbers}",
    context:  {
                numbers: [3, 2, 1],
                delay: function(chunk, context, bodies) {
                  return chunk.map(function(chunk) {
                    setTimeout(function() {
                      chunk.render(bodies.block, context).end();
                    }, Math.ceil(Math.random()*10));
                  });
                }
              },
    expected: "3, 2, 1",
    message: "should test async iterator"
  },
  {
    name:     "tapHelper: Plain text string literal",
    source:   'plain text. {@tapper value="plain text"/}',
    context:  {},
    expected: "plain text. plain text",
    message: "should test if tap Helper is working properly when the value is plain text"
  },
  {
    name:     "tapHelper: string literal that includes a string-valued {context variable}",
    source:   'a is {a}. {@tapper value="a is {a}"/}',
    context:  { a : "Alpha" },
    expected: "a is Alpha. a is Alpha",
    message: "should test if tap Helper is working properly when the value is a text that inclues a string-valued {context variable}"
  },
  {
    name:     "tapHelper: reference to string-valued context variable",
    source:   '{a}. {@tapper value=a/}',
    context:  { a : "Alpha" },
    expected: "Alpha. Alpha",
    message: "should test if tap Helper is working properly when it makes referece to string-valued context variable"
  },
  {
    name:     "tapHelper: string literal that includes a string-valued {context function}",
    source:   'b is {b}. {@tapper value="b is {b}"/}',
    context:  { "b" : function() { return "beta"; } },
    expected: "b is beta. b is beta",
    message: "should test if tap Helper is working properly when the value is a string literal that includes a string-valued {context function}"
  },
  {
    name:     "tapHelper: reference to a a string-valued {context function}",
    source:   '{b}. {@tapper value=b/}',
    context:  { "b" : function() { return "beta"; } },
    expected: "beta. beta",
    message: "should test if tap Helper is working properly when it makes reference to a a string-valued {context function}"
  },
  {
    name:     "tapHelper: string literal that includes an object-valued {context variable}",
    source:   'a.foo is {a.foo}. {@tapper value="a.foo is {a.foo}"/}',
    context:  { "a" : {"foo":"bar"} },
    expected: "a.foo is bar. a.foo is bar",
    message: "should test if tap Helper is working properly when the value is a string literal that includes an object-valued {context variable}"
  },
  {
    name:     "tapHelper: reference to an object-valued {context variable}",
    source:   '{a.foo}. {@tapper value=a.foo/}',
    context:  { "a" : {"foo":"bar"} },
    expected: "bar. bar",
    message: "should test if tap Helper is working properly when it makes reference to an object-valued {context variable}"
  },
  {
    name:     "tapHelper: string literal that calls a function within an object-valued {context variable}",
    source:   'a.foo is {a.foo}. {@tapper value="a.foo is {a.foo}"/}',
    context:  { "a" : {"foo" : function() { return "bar"; } } },
    expected: "a.foo is bar. a.foo is bar",
    message: "should test if tap Helper is working properly when the value is string literal that calls a function within an object-valued {context variable}"
  },
  {
    name:     "tapHelper: reference to a function within an object-valued {context variable}",
    source:   '{a.foo} {@tapper value=a.foo/}',
    context:  { "a" : {"foo" : function() { return "bar"; } } },
    expected: "bar bar",
    message: "should test if tap Helper is working properly when it makes reference to a function within an object-valued {context variable}"
  },
  {
     name:     "array: reference $idx in iteration on objects",
     source:   "{#names}({$idx}).{title} {name}{~n}{/names}",
     context:  { title: "Sir", names: [ { name: "Moe" }, { name: "Larry" }, { name: "Curly" } ] },
     expected: "(0).Sir Moe\n(1).Sir Larry\n(2).Sir Curly\n",
     message: "array: reference $idx in iteration on objects"
  },
  {
      name:     "array: reference $len in iteration on objects",
      source:   "{#names}Size=({$len}).{title} {name}{~n}{/names}",
      context:  { title: "Sir", names: [ { name: "Moe" }, { name: "Larry" }, { name: "Curly" } ] },
      expected: "Size=(3).Sir Moe\nSize=(3).Sir Larry\nSize=(3).Sir Curly\n",
      message: "test array: reference $len in iteration on objects"
  },
  {
     name:     "array reference $idx in iteration on simple type",
     source:   "{#names}({$idx}).{title} {.}{~n}{/names}",
     context:  { title: "Sir", names: [ "Moe", "Larry", "Curly" ] },
     expected: "(0).Sir Moe\n(1).Sir Larry\n(2).Sir Curly\n",
     message: "test array reference $idx in iteration on simple types"
  },
  {
      name:     "array reference $len in iteration on simple type",
      source:   "{#names}Size=({$len}).{title} {.}{~n}{/names}",
      context:  { title: "Sir", names: [ "Moe", "Larry", "Curly" ] },
      expected: "Size=(3).Sir Moe\nSize=(3).Sir Larry\nSize=(3).Sir Curly\n",
      message: "test array reference $len in iteration on simple types"
  },
  {
      name:     "array reference $idx/$len on empty array case",
      source:   "{#names}Idx={$idx} Size=({$len}).{title} {.}{~n}{/names}",
      context:  { title: "Sir", names: [ ] },
      expected: "",
      message: "test array reference $idx/$len on empty array case"
  },
  {
      name:     "array reference $idx/$len on single element case",
      source:   "{#names}Idx={$idx} Size={$len} {.}{/names}",
      context:  { names: "Just one name" },
      expected: "Idx=0 Size=1 Just one name",
      message: "test array reference $idx/$len on single element case"
  },
  {
      name:     "array reference $idx/$len {#.} section case",
      source:   "{#names}{#.}{$idx}{.} {/.}{/names}",
      context:  { names:  ["Moe", "Larry", "Curly"] },
      expected: "0Moe 1Larry 2Curly ",
      message: "test array reference $idx/$len {#.} section case"
  },
  {
      name:     "array reference $idx/$len nested loops",
      source:   "{#A}A loop:{$idx}-{$len},{#B}B loop:{$idx}-{$len}C[0]={.C[0]} {/B}A loop trailing: {$idx}-{$len}{/A}",
      context:  {"A": [ {"B": [ {"C": ["Ca1", "C2"]}, {"C": ["Ca2", "Ca22"]} ] }, {"B": [ {"C": ["Cb1", "C2"]}, {"C": ["Cb2", "Ca2"]} ] } ] },
      expected: "A loop:0-2,B loop:0-2C[0]=Ca1 B loop:1-2C[0]=Ca2 A loop trailing: 0-2A loop:1-2,B loop:0-2C[0]=Cb1 B loop:1-2C[0]=Cb2 A loop trailing: 1-2",
      message: "test array reference $idx/$len nested loops"
  }
];

if (typeof module !== "undefined" && typeof require !== "undefined") {
    module.exports = helpersTests; // We're on node.js
} else {
    window.helpersTests = helpersTests; // We're on the browser
}
