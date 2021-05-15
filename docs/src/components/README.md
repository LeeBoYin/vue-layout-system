# Overview
Vue Layout System is a pack of Vue components, where each one layout component solves one specific problem while sharing similar pattern with the others. 

- Your contents are always placed inside `slots`
- Padding, gap size and alignment are set with corresponding `props`
- Layout components can be nested in other layout components. Just like LEGO bricks, combination is the key to creating various types of layout.
 

## Padding Props
Padding generates space around a layout's content. All layout components share the same padding props.

| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| padding | padding size of all sides | Number, String | 0 | spacing scale, padding shorthand |
| paddingX | padding size of left and right sides | Number, String | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number, String | 0 | spacing scale |
| paddingTop | padding size of the top side | Number, String | 0 | spacing scale |
| paddingBottom | padding size of the bottom side | Number, String | 0 | spacing scale |
| paddingLeft | padding size of the left side | Number, String | 0 | spacing scale |
| paddingRight | padding size of the right side | Number, String | 0 | spacing scale |

### Padding on all sides
When space around all sides needs to be the same, simply set the `padding` props.

```vue
<LayoutList padding="5">
	...
</LayoutList>
```

### Padding on opposite sides
When the padding sizes on opposite sides need to be symmetric, it is easy to complete with `paddingX` and `paddingY`.

```vue
<LayoutList padding-x="5" padding-y="3">
	...
</LayoutList>
```

### Padding on each side
You can also set padding size for each side of a layout component.

```vue
<LayoutList
	padding-top="5"
	padding-bottom="3"
	padding-left="2"
	padding-right="1"
>
	...
</LayoutList>
```

### Padding shorthand
To shorten the code, it is possible to specify space of all sides in the `padding` props, similar to writing padding shorthand in css.

```vue
<!-- top: 5, right: 3, bottom: 5, left: 3 -->
<LayoutList padding="5 3">
	...
</LayoutList>

<!-- top: 5, right: 3, bottom: 2, left: 3 -->
<LayoutList padding="5 3 2">
	...
</LayoutList>

<!-- top: 5, right: 3, bottom: 2, left: 1 -->
<LayoutList padding="5 3 2 1">
	...
</LayoutList>
```
