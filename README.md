# Vue Layout System

[![npm (scoped)](https://img.shields.io/npm/v/vue-layout-system.svg)](https://www.npmjs.com/package/vue-layout-system)

<p align="center"><img src="https://leeboyin.github.io/vue-layout-system/logo.png"></p>

Vue Layout System is a pack of Vue components that solve daily layout problems.

Lightweight and no dependencies.

Please check out the [Documentation Website](https://leeboyin.github.io/vue-layout-system/) for demo and more information.

## Overview

Vue Layout System lets you intuitively arrange your components. Simply drop your contents into slots, configure options with props, Vue Layout system will take care of all CSS challenges for you.

With Vue Layout System developers are empowered to

- Create various types of layout without writing CSS
- Arrange contents in a intuitive and predictable way
- Control space between contents precisely with one consistent spacing system

![](https://leeboyin.github.io/vue-layout-system/layout_highlight.gif)

## Layout Components

Vue Layout System is a pack of Vue components, where each one layout component solves one specific problem while sharing similar pattern with the others.

- [LayoutAbsolute](https://leeboyin.github.io/vue-layout-system/components/LayoutAbsolute/) lets you place contents at 9 absolute positions in a relative position element.
- [LayoutAlign](https://leeboyin.github.io/vue-layout-system/components/LayoutAlign/) lets you align contents both horizontally and vertically.
- [LayoutColumns](https://leeboyin.github.io/vue-layout-system/components/LayoutColumns/) divide a space evenly into columns, arranging contents into the columns in order.
- [LayoutFlexColumn](https://leeboyin.github.io/vue-layout-system/components/LayoutFlexColumn/) divides a vertical space into 3 sections, where you can place contents at top, bottom and the remaining space.
- [LayoutFlexRow](https://leeboyin.github.io/vue-layout-system/components/LayoutFlexRow/) divides a horizontal space into 3 sections, where you can place contents at left, right and the remaining space.
- [LayoutList](https://leeboyin.github.io/vue-layout-system/components/LayoutList/) arranges contents vertically.
- [LayoutListInline](https://leeboyin.github.io/vue-layout-system/components/LayoutListInline/) arranges contents horizontally.

## Spacing System

Vue Layout System uses a finite set of spacing scales for all spacing needs, such as padding around the contents and gaps between contents. This is a vital foundation for consistent and precise control of the spacing.

The default spacing scales are integers from `0` to `10`, You can easily customize the spacing scales by using either Sass variables or CSS custom properties. See more details in [Customize](https://leeboyin.github.io/vue-layout-system/customize/).

![](https://leeboyin.github.io/vue-layout-system/spacing_system.png)

## Installation

### JavaScript Package Manager 
The preferred way to use Vue Layout System is to install via JavaScript package manager.

#### Install via npm
```shell script
npm install vue-layout-system
```

#### Add to Vue
```javascript
import vueLayoutComponents from 'vue-layout-system';
import 'vue-layout-system/dist/vue-layout-system.css';

new Vue({
	components: {
		...vueLayoutComponents,
	}
});
```

### CDN
Alternatively, if your project doesn't have a build process, you can load Vue Layout System directly off of a CDN. Note that you need to load Vue before loading Vue Layout System into your project.

```html
<script src="https://unpkg.com/vue-layout-system"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-layout-system/dist/vue-layout-system.css">

<div id="app">
	<!-- Note that components use kebab-case when installed with CDN -->
	<layout-list>
		...
	</layout-list>
</div>
```

To learn how layout components work, please check out the [Documentation Website](https://leeboyin.github.io/vue-layout-system/) for demo and more information.

## Contributing
For any question or feature request please feel free to create an [issue](https://github.com/LeeBoYin/vue-layout-system/issues/new) or [pull request](https://github.com/LeeBoYin/vue-layout-system/pulls).
