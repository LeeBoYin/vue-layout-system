# LayoutFlexRow

三個區塊橫向排列的 layout component，也可以只使用其中兩個區塊。

<Doc-LayoutFlexRowDoc />

## Usage

- 將內容放在 LayoutFlexRow 的三個 slot：
  1. left：置左
  1. remain：剩餘空間
  1. right：置右
- 當三個 slot 都有內容時，remain 使用中間剩餘的空間
- 也可以只使用 left 或 right 再加上 remain，remain 使用剩餘的空間
- 也可以只使用 left + right，中間 remain 留空
- 以 props 調整排列格式
  - vertical-align 設定對齊方向：置頂、置中、置底
  - gap 調整三個 slot 的左右間距

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
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
| gap | 左右間距 | Number | 0 | spacing scale |
| vertical-align | 上下對齊 | String | default | default, top, center, bottom |
