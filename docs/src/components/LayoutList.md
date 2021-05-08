# LayoutList

將多項內容做垂直排列的 layout component。

<Doc-LayoutListDoc />

## Usage

- 將需要排列的內容放置在 LayoutList tags 之間
- 以 props 調整排列格式
  - gap 調整內容上下間距
  - horizontal-align 設定對齊方向：置左、置中、置右

```vue live
<LayoutList
	indent-x="5"
	indent-y="5"
	gap="5"
	horizontal-align="center"
	style="border: 1px solid;"
>
	<button>OK</button>
	<button>Cancel</button>
	<button>Save</button>
</LayoutList>
```

## Props
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
| gap | 上下間距 | Number | 0 | spacing scale |
| horizontal-align | 左右對齊 | String | default | default, left, center, right |

## Note
- LayoutList 使用 CSS grid 排列內容，第一層 children 內容為 grid items。
- 內容之間的 gap 是使用 grid gap 互相隔開。
