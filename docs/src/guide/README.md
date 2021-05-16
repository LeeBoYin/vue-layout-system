# Get Started

## Overview
Vue Layout System is a pack of components that solve daily layout problems.
Simply drop your contents into slots, configure options with props, Vue Layout system will take care of all CSS challenges for you.

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

Next, learn how [Layout Components](/components) work to solve layout problems.
