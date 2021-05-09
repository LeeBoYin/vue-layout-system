# LayoutFlexRow

`LayoutFlexRow` divides one space into 3 sections horizontally, letting you place contents at left, right and the remaining space.

<Doc-LayoutFlexRowDoc />

## Usage

- Place your contents inside 3 slots of `LayoutFlexRow`
  1. `left`
  1. `remain`
  1. `right`
- The content in the `remain` slot will fill the remaining horizontal space
- You may use all of the 3 slots or just 2 of them

```vue live
<LayoutFlexRow
	indent-x="5"
	indent-y="5"
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
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | indent size of all sides | Number | 0 | spacing scale |
| indentX | indent size of left and right sides | Number | 0 | spacing scale |
| indentY | indent size of top and bottom sides | Number | 0 | spacing scale |
| gap | gap size between slots | Number | 0 | spacing scale |
| verticalAlign | vertical align | String | default | default, top, center, bottom |
