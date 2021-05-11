# LayoutAlign

`LayoutAlign` lets you align contents both horizontally and vertically.

<Doc-LayoutAlignDoc />

## Usage
- Place your contents between `<LayoutAlign>` tags
- Use `horizontal-align` to align contents left, center or right
- When the height of `LayoutAlign` is determined, use `vertical-align` to align contents top, center or bottom

```vue live
<LayoutAlign
	padding-x="5"
	padding-y="5"
	horizontal-align="right"
	vertical-align="bottom"
	style="border: 1px solid; height: 200px;"
>
	<button>Cancel</button>
	<button>Save</button>
</LayoutAlign>
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
| horizontalAlign | horizontal align | String | default | default, left, center, right |
| verticalAlign | vertical align | String | default | default, top, center, bottom |
