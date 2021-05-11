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
| padding | padding size of all sides | Number | 0 | spacing scale |
| paddingX | padding size of left and right sides | Number | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
| verticalAlign | vertical align | String | default | default, top, center, bottom |
