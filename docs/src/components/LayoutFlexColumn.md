# LayoutFlexColumn

`LayoutFlexColumn` divides one space into 3 sections vertically, letting you place contents at top, bottom and the remaining space.

<Doc-LayoutFlexColumnDoc />

## Usage

- Place your contents inside 3 slots of `LayoutFlexColumn`
  1. `top`
  1. `remain`
  1. `bottom`
- The content in the `remain` slot will fill the remaining vertical space
- You may use all of the 3 slots or just 2 of them
- When the height of the parent element is determined, you may add `layout-u-content-fill-height` utility class to the parent element to make `LayoutFlexColumn` expand vertically

```vue live
<LayoutFlexColumn
	padding-x="5"
	padding-y="5"
	gap="5"
	horizontal-align="center"
	style="border: 1px solid; min-height: 200px;"
>
	<template #top>
		😊
	</template>
	<template #remain>
		<div style="background-color: #dddddd;">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</div>
	</template>
	<template #bottom>
		<button>👍</button>
	</template>
</LayoutFlexColumn>
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
| gap | gap size between slots | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
