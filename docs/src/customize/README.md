# Customize

Vue Layout System applies a consistent spacing rule across all layout components. It is built on top of Sass variables and CSS custom properties. To match the design of your products, you may customize spacing scales and values by overriding either CSS custom properties or Sass variables.

## CSS custom properties

If your project doesn't have a build process, you still can easily customize the space values by overriding the default values of the CSS custom properties. Simply set your own space values after the css file link.

```html
<link rel="stylesheet" href="https://unpkg.com/vue-layout-system/dist/vue-layout-system.css">
<style>
    :root {
        --layout-spacing-0: 0px;
        --layout-spacing-1: 2px;
        --layout-spacing-2: 4px;
        --layout-spacing-3: 6px;
        --layout-spacing-4: 8px;
        --layout-spacing-5: 12px;
        --layout-spacing-6: 16px;
        --layout-spacing-7: 24px;
        --layout-spacing-8: 32px;
        --layout-spacing-9: 40px;
        --layout-spacing-10: 60px;
    }
</style>
```


## Sass variables

With the power of Sass pre-processor, You can easily override default spacing values by setting your own `$layout-spacing-map` before importing `main.scss` from the module. You may also set less or more scales depending on your need, or even use any names other then integers for spacing scales.

### Override default sass spacing values

```scss
$layout-spacing-map: (
	0: 0px,
	1: 2px,
	2: 4px,
	3: 6px,
	4: 8px,
	5: 12px,
	6: 16px,
	7: 24px,
	8: 32px,
	9: 40px,
	10: 60px,
);
@import 'node_modules/vue-layout-system/src/scss/main.scss';
```

```scss
$layout-spacing-map: (
	0: 0px,
	1: 5px,
	2: 10px,
	3: 15px,
	4: 20px,
	5: 25px,
	6: 30px,
	7: 40px,
	8: 50px,
);
@import 'node_modules/vue-layout-system/src/scss/main.scss';
```

### Use string as spacing scales

You may set spacing scale from `xxs` to `xxl`

```scss
$layout-spacing-map: (
	none: 0px,
	xxs: 2px,
	xs: 4px,
	s: 6px,
	m: 8px,
	l: 12px,
	xl: 16px,
	xxl: 24px,
);
@import 'node_modules/vue-layout-system/src/scss/main.scss';
```

and use them in layout components.

```vue
<LayoutList padding="xs" gap="xl">
    ...
</LayoutList>
```

You may set spacing scale from `tightest` to `loosest`

```scss
$layout-spacing-map: (
	none: 0px,
	tightest: 2px,
	tighter: 4px,
	tight: 6px,
	normal: 8px,
	loose: 12px,
	looser: 16px,
	loosest: 24px,
);
@import 'node_modules/vue-layout-system/src/scss/main.scss';
```

and use them in layout components.

```vue
<LayoutList padding="loose" gap="tight">
    ...
</LayoutList>
```
