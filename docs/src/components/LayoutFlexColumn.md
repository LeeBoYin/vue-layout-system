# LayoutFlexColumn

三個區塊垂直排列的 layout component，也可以只使用其中兩個區塊。

<Doc-LayoutFlexColumnDoc />

## Usage

- 將內容放在 LayoutFlexColumn 的三個 slot：
  1. top：置頂
  1. remain：剩餘空間
  1. bottom：置底
- 當三個 slot 都有內容時，remain 使用中間剩餘的空間
- 也可以只使用 top 或 bottom 再加上 remain，remain 使用剩餘的空間
- 也可以只使用 top + bottom，中間 remain 留空
- 如果 LayoutFlexColumn 需要填滿外層 parent 的高度，需要在外層加上 layout-u-content-fill-height class
- 以 props 調整排列格式
  - horizontal-align 設定對齊方向：置左、置中、置右
  - gap 調整三個 slot 的左右間距

```vue live
<LayoutFlexColumn
	indent-x="5"
	indent-y="5"
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
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
| gap | 上下間距 | Number | 0 | spacing scale |
| horizontal-align | 左右對齊 | String | default | default, left, center, right |
