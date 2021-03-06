HTMLtoJSX
=========

HTMLtoJSX converts HTML to JSX for use with [React](facebook.github.io/react/).

Installation
============

```
npm install htmltojsx
```

Alternatively, a web-based version is available at http://facebook.github.io/react/html-jsx.html

Usage
=====
HTMLtoJSX can be used either as a command-line application or as a Node.js module. To use the command-line version, invoke the `htmltojsx` command:

```
$ htmltojsx --help
Converts HTML to JSX for use with React.
Usage: htmltojsx [-c ComponentName] file.htm

Examples:
  htmltojsx -c AwesomeComponent awesome.htm    Creates React component "AwesomeComponent" based on awesome.htm


Options:
  --className, -c  Create a React component (wraps JSX in React.createClass call)
  --help           Show help
```

To use the Node.js module, `require('htmltojsx')` and create a new instance. This is the same interface as the web-based version:

```js
var HTMLtoJSX = require('htmltojsx');
var converter = new HTMLtoJSX({
  indent: '\t',
  hideComment: true,
  createClass: true,
  outputClassName: 'AwesomeComponent'
});
var output = converter.convert('<div>Hello world!</div>');
```

__参数说明__

1. indent
   缩进填充符, 默认俩空格.
1. hideComment
   传 `true` 时将不会将原文中的注释生成到译文中.
1. createClass
   传 `true` 时将会在 jsx 外再创建一层 `React.createClass` 进行包裹.
1. outputClassName
   仅当 `createClass` 为 `true` 时有效, 将会在 `React.createClass` 前再加一个变量 `var xxx = ` 来保存这个组件.

TODO
=========

1. Complete the CLI tool.
1. Complete the test cases.

Changelog
=========

0.5.0 - 27th June 2017
-------------------------

1. Support SVG convert.
1. Fixed the bug of lost container when there're a DOM element and a comment element both on the root node.

_中文说明_

1. 支持 SVG;
1. 修正了当最外层根节点为一个注释与一个 DOM 节点时不会添加 container 的 bug.

0.3.0 - 11th January 2017
-------------------------

1. Added hide comment ability to HTMLtoJSX, pass `true` to parameter `hideComment` to use it.
1. Removed the extra spaces while `createElement` option is `false`.
1. Found the no instruction option `indent` which can set the indent space of output.
1. Fixed the bugs of the incorrect out put when the `<thead>` `<tr>` tags were the outermost layers.
1. The `outputClassName` will be capitalized by default.
1. Updated the React and ReactDOM version of HTMLtoJSX (0.14.x -> 15.x.x).
1. Added supports of attributes of SVG tags.

_中文说明_

1. 参数里 `hideComment` 传 `true` 就可以不再把注释也生成到 jsx 里去了;
1. 去掉了不创建包裹类的时候多余的空格;
1. 找到了作者没有标注出来的用于修改缩进填充字符的 `indent` 属性.
1. `<thead>` `<tr>` 放在最外层的时候不会被干掉了.
1. 输入的 `outputClassName` 总是会被变成首字母大写.
1. 更新了 HTMLtoJSX 所依赖的 React 和 ReactDOM 版本 (0.14.x -> 15.x.x).
1. 支持转换 SVG 标签的属性.


0.2.5 - 26th October 2015
-------------------------
 - [#33](https://github.com/reactjs/react-magic/issues/33) - Correctly handle `<textarea>`s and `<pre>`s
 - [#35](https://github.com/reactjs/react-magic/issues/35) - Handle internal stylesheets (`<style>` tags). *Thanks to [Trevor Copeland](https://github.com/sickslives)*


0.2.4 - 6th August 2015
-----------------------
 - [#31](https://github.com/reactjs/react-magic/issues/31) - Fixed `jsdom`
   dependency

0.2.3 - 5th August 2015
-----------------------
 - [#8](https://github.com/reactjs/react-magic/issues/8) - Handle
   case-insensitive attributes and style names
 - [#29](https://github.com/reactjs/react-magic/pull/29) - Switch to
   `jsdom-no-contextify` to support older versions of Node.js

0.2.2 - 4th May 2015
--------------------
 - [#21](https://github.com/reactjs/react-magic/issues/21) - Allow output of
   React classes without class name
 - [#25](https://github.com/reactjs/react-magic/pull/25) - Update version of
   JSDOM

0.2.1 - 1st February 2015
-------------------------
 - [#10](https://github.com/reactjs/react-magic/pull/10) - Handle inline CSS
   shorthand style values
 - [#13](https://github.com/reactjs/react-magic/pull/13) - Maintain valueless
   attributes handled by JSX
 - [#15](https://github.com/reactjs/react-magic/pull/15) - Use uncontrolled
   input fields so they can still be edited
 - [#11](https://github.com/reactjs/react-magic/issues/11) - Ensure HTML
   entities are handled correctly

0.2.0 - 7th September 2014
--------------------------
 - Initial release
