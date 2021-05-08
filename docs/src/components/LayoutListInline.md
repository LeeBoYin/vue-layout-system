# LayoutListInline

將多項內容做橫向排列的 layout component。

<Doc-LayoutListInlineDoc />

## Usage

- 將需要排列的內容放置在 LayoutListInline tags 之間
- 以 props 調整排列格式
  - gap 調整內容上下左右間距，可以分開設定水平間距及垂直間距
  - vertical-align 設定垂直對齊方向：置頂、置中、置底
  - horizontal-align 設定水平對齊方向：置左、置中、置右
  - wrap 設定超過一行時是否折行

```vue live
<LayoutListInline
	indent-x="5"
	indent-y="5"
	gap-x="5"
	gap-y="5"
	horizontal-align="center"
	vertical-align="center"
	:wrap="true"
	style="border: 1px solid;"
>
	<button>OK</button>
	<button>Cancel</button>
	<button>Save</button>
	<button>Submit</button>
	<button>Confirm</button>
	<button>Accept</button>
	<button>Join</button>
	<button>Update</button>
	<button>Done</button>
</LayoutListInline>
```

## Props
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
| gap | 上下左右間距 | Number | 0 | spacing scale |
| gapX | 左右間距 | Number | 0 | spacing scale |
| gapY | 上下間距 | Number | 0 | spacing scale |
| horizontal-align | 左右對齊 | String | default | default, left, center, right |
| vertical-align | 上下對齊 | String | default | default, top, center, bottom |
| wrap | 超過一行是否折行 | Boolean | true ||

## Note
- LayoutListInline 使用 inline-flex 排列內容。
- 內容之間的 gap 是使用 margin 互相隔開，LayoutListInline root element 再用負 margin 抵銷最外圈內容的 margin，確保 LayoutListInline 保持與外層及其他元件之間相同的距離，不會受到 gap 的影響。
