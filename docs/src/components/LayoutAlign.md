# LayoutAlign

將內容放置於左右、上下、置中、加上內縮。

<Doc-LayoutAlignDoc />

## Usage
- horizontal-align 設定水平位置：置左、置中、置右
- 當 parent element 有明確高度時，用 vertical-align 設定垂直位置：置頂、置中、置底

```vue live
<LayoutAlign
	indent-x="5"
	indent-y="5"
	horizontal-align="right"
	vertical-align="bottom"
	style="border: 1px solid; min-height: 200px;"
>
	<button>Cancel</button>
	<button>Save</button>
</LayoutAlign>
```

## Props
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
| horizontal-align | 水平位置 | String | default | default, left, center, right |
| vertical-align | 垂直位置 | String | default | default, top, center, bottom |
