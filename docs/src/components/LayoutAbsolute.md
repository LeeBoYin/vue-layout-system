# LayoutAbsolute

`LayoutAbsolute` lets you place contents at 9 absolute positions in a relative position element. 

<Doc-LayoutAbsoluteDoc />

## Usage

- `LayoutAbsolute` must be placed in a relative position element
- Place your contents inside corresponding slots of 9 absolute positions
  1. `topLeft`
  1. `top`
  1. `topRight`
  1. `right`
  1. `bottomRight`
  1. `bottom`
  1. `bottomLeft`
  1. `left`
  1. `center`
- You can use multiple slots within one `LayoutAbsolute` at the same time

```vue live
<div style="position: relative;">
	<img
		src="https://picsum.photos/600/400?grayscale"
		style="vertical-align: middle;"
	>
	<LayoutAbsolute
        padding-x="5"
        padding-y="5"
    >
		<template slot="topLeft">
			<button>topLeft</button>
		</template>
		<template slot="top">
			<button>top</button>
		</template>
		<template slot="topRight">
			<button>topRight</button>
		</template>
		<template slot="right">
			<button>right</button>
		</template>
		<template slot="bottomRight">
			<button>bottomRight</button>
		</template>
		<template slot="bottom">
			<button>bottom</button>
		</template>
		<template slot="bottomLeft">
			<button>bottomLeft</button>
		</template>
		<template slot="left">
			<button>left</button>
		</template>
		<template slot="center">
			<button>center</button>
		</template>
	</LayoutAbsolute>
</div>
```

## Props
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| padding | padding size of all sides | Number, String | 0 | spacing scale, padding shorthand |
| paddingX | padding size of left and right sides | Number, String | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number, String | 0 | spacing scale |
| paddingTop | padding size of the top side | Number, String | 0 | spacing scale |
| paddingBottom | padding size of the bottom side | Number, String | 0 | spacing scale |
| paddingLeft | padding size of the left side | Number, String | 0 | spacing scale |
| paddingRight | padding size of the right side | Number, String | 0 | spacing scale |
