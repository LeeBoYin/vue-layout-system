# LayoutFlexColumn

`LayoutFlexColumn` divides a vertical space into 3 sections, where you can place contents at top, bottom and the remaining space.

<Doc-LayoutFlexColumnDoc />

## Usage

- Place your contents inside 3 slots of `LayoutFlexColumn`
  1. `top`
  1. `remain`
  1. `bottom`
- The content in the `remain` slot will fill the remaining vertical space
- Any content not wrapped in the `<template>` tags will be placed in the `remain` slot
- You may use all the 3 slots or just 2 of them
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
- [padding props](/components/#padding-props)

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| gap | gap size between slots | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align contents | String | stretch | left, center, right, stretch |
| isRemainScrollable | show scrollbar in the remaining space when content overflow | Boolean | false | true, false |
