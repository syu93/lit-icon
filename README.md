# lit-icon

LitIcon is a simple Web Component to display an icon from a set of svg icons. Inspired by Polymer iron-icon

## Important note

Before including SVG's path into your application, I recommend you take a look at [Jake Archibald SVG OMG](https://jakearchibald.github.io/svgomg/) SVG minification app to reduce the size of your SVG icons.


## Installation

```bash
$ npm i @syu93/lit-icon
```



## Import

The **lit-icon** package comes with 2 custom elements, **lit-icon**, which is the element that display an icon.
And **lit-iconset**, in which we will define our svg icons. 

### Full import

To import all two classes, just import lit-router global package :

```javascript
import '@syu93/lit-icon';
```

### Import as you use

You can also only import what you need :

```javascript
import '@syu93/lit-icon/pkg/dist-src/lit-icon.js';
import '@syu93/lit-icon/pkg/dist-src/lit-iconset.js';
```



## Usage

```javascript
// my-app.js
import { LitElement, html, css } from "lit-element";
import '@syu93/lit-icon/pkg/dist-src/lit-icon.js';
import '@syu93/lit-icon/pkg/dist-src/lit-iconset.js';

// ...

class MyApp extends LitElement {
  render() {
  	return html`
	  <lit-icon icon="search" iconset="iconset"></lit-icon>
	  <lit-iconset iconset="iconset">
		<svg>
		  <defs>
			<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
		  </defs>
		</svg>
	  </lit-iconset>
	`;
  }
}
```

## API

### LitIcon

#### Properties

**icon **			`string`		*''*
The **icon** to display

**iconset**		`string`		*'iconset'*
The name the **iconset** in which look for the icon to display

**size**				`number`		24
The **size** of an icon to display

### LitIconset

#### Properties

**iconset**		`string`		*'iconset'*
The name the **iconset** in which look for the icon to display

