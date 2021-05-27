# Utility Class

Vue Layout System comes with a bunch of utility class, they are necessary for building layouts in some cases. 

## Content Fill Height

In HTML, block elements expand horizontally by default, taking up the width of the parent element. However, things get complicated when it comes to vertical space.

`layout-u-content-fill-height` is an utility class for solving the expanding problem in vertical space. When it is added to an element, the children elements will expand vertically, taking up the height of the available space in the parent element. 

```vue live
<div class="layout-u-content-fill-height" style="height: 100px">
	<div style="border: 1px solid;"></div>
</div>
```

### Use with LayoutAlign

`layout-u-content-fill-height` is often used in combination with `LayoutAlign` when you are aligning content vertically.

See demo in [LayoutAlign](/components/LayoutAlign/).

```vue
<div class="layout-u-content-fill-height" style="height: 100px">
	<LayoutAlign vertical-align="center">
		...
	</LayoutAlign>
</div>
```

### Use with LayoutFlexColumn

`layout-u-content-fill-height` is often used in combination with `LayoutFlexColumn` when you are diving a vertical space into top, bottom and remaining spaces.

See demo in [LayoutFlexColumn](/components/LayoutFlexColumn/).

```vue
<div class="layout-u-content-fill-height" style="height: 100px">
	<LayoutFlexColumn>
		...
	</LayoutFlexColumn>
</div>
```

## Relative Position

`layout-u-position-relative` simply set an element's position to relative.

### Use with LayoutAbsolute

`layout-u-position-relative` is usually used in combination with `LayoutAbsolute`, since `LayoutAbsolute` must be placed in a relative positioned element to work properly.

See demo in [LayoutAbsolute](/components/LayoutAbsolute/).

```vue
<div class="layout-u-position-relative">
	<LayoutAbsolute>
		...
	</LayoutAbsolute>
</div>
```

## Padding

Padding utility classes let you add padding to elements. Directions and spacing scales are set in this format:

`layout-u-p${ direction }-${ spacing scale }`

```vue
<div class="layout-u-p-${ spacing scale }"></div>
<div class="layout-u-px-${ spacing scale }"></div>
<div class="layout-u-py-${ spacing scale }"></div>
<div class="layout-u-pt-${ spacing scale }"></div>
<div class="layout-u-pb-${ spacing scale }"></div>
<div class="layout-u-pl-${ spacing scale }"></div>
<div class="layout-u-pr-${ spacing scale }"></div>
```

## Margin

Margin utility classes let you add margin to elements. Directions and spacing scales are set in this format:

`layout-u-m${ direction }-${ spacing scale }`

```vue
<div class="layout-u-m-${ spacing scale }"></div>
<div class="layout-u-mx-${ spacing scale }"></div>
<div class="layout-u-my-${ spacing scale }"></div>
<div class="layout-u-mt-${ spacing scale }"></div>
<div class="layout-u-mb-${ spacing scale }"></div>
<div class="layout-u-ml-${ spacing scale }"></div>
<div class="layout-u-mr-${ spacing scale }"></div>
```

## Highlight Layouts

`layout-u-debug` is a debugging tool class that helps you check alignments and debug layout problems. When `layout-u-debug` is added to an element, all descendant layout components of that element will be highlighted with colors. Hovering on each layout component shows you the spacing and the child elements.

```vue
<div class="layout-u-debug">
	...
</div>
```
