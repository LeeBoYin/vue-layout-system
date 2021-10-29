# LayoutFlexRow

`LayoutFlexRow` divides a horizontal space into 3 sections, where you can place contents at left, right and the remaining space.

<Doc-LayoutFlexRowDoc />

## Usage

- Place your contents inside 3 slots of `LayoutFlexRow`
  1. `left`
  1. `remain`
  1. `right`
- The content in the `remain` slot will fill the remaining horizontal space
- Any content not wrapped in the `<template>` tags will be placed in the `remain` slot
- You may use all the 3 slots or just 2 of them

```vue live
<LayoutFlexRow
	padding-x="5"
	padding-y="5"
	gap="5"
	vertical-align="center"
	style="border: 1px solid;"
>
	<template #left>
		😊
	</template>
	<template #remain>
		<div style="background-color: #dddddd;">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</div>
	</template>
	<template #right>
		<button>👍</button>
	</template>
</LayoutFlexRow>
```

## Props
- [padding props](/components/#padding-props)

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| gap | gap size between slots | Number, String | 0 | spacing scale |
| verticalAlign | vertical align contents | String | top | top, center, bottom, stretch |
| isRemainScrollable | show scrollbar in the remaining space when content overflow | Boolean | false | true, false |
