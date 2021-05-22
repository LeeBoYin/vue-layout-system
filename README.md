# vue-layout-system

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
