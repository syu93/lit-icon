# \<lit-icon\>
**\<lit-icon\>** is a simple Web Component to display an icon from a set of SVG icons. Inspired by Polymer iron-icon.

<div align="center">
	<a href="https://bundlephobia.com/result?p=lit-icon"><img src="https://badgen.net/bundlephobia/minzip/lit-icon" alt="size"></a>
	<a href="https://www.npmjs.com/package/lit-icon"><img src="https://badgen.net/npm/v/lit-icon" alt="version"></a>
</div>

## Features

* Dependency free
* Really small

## Important note

Before including SVG's path into your application, I recommend you take a look at [Jake Archibald SVG OMG](https://jakearchibald.github.io/svgomg/) SVG minification app to reduce the size of your SVG icons.

## Installation

```bash
$ npm i lit-icon
```

## Import

The **lit-icon** package comes with 2 custom elements, **\<lit-icon\>**, which is the element that display an icon.
And **\<lit-iconset\>**, in which we will define our SVG icons.

### Full import

To import all two classes, just import lit-icon global package :

```javascript
import 'lit-icon';
```

### Import as you use

You can also only import what you need :

```javascript
import 'lit-icon/pkg/dist-src/lit-icon.js';
import 'lit-icon/pkg/dist-src/lit-iconset.js';
```

## Usage

NOTE : For great quality icons take a look at these libraries
* https://poly-icon.appspot.com/
* https://material.io/resources/icons/
* https://ionicons.com/
  
**Know another great icon source ? feel free to submit.**

```javascript
// my-app.js
import { LitElement, html, css } from "lit-element";
import 'lit-icon/pkg/dist-src/lit-icon.js';
import 'lit-icon/pkg/dist-src/lit-iconset.js';

// ...

class MyApp extends LitElement {
  render() {
    return html`
      <lit-icon icon="add" iconset="iconset"></lit-icon>
        <lit-iconset iconset="iconset">
          <svg><defs>
            <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
          </defs></svg>
      </lit-iconset>
    `;
  }
}
```

## API

### LitIcon

#### Properties

**icon**			`string`		*''*
The **icon** to display

**iconset**		`string`		*'iconset'*
The name the **iconset** in which look for the icon to display

**size**				`number`		24
The **size** of an icon to display

### LitIconset

#### Properties

**iconset**		`string`		*'iconset'*
The name the **iconset** in which look for the icon to display
