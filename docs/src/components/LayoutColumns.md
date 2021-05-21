# LayoutColumns

`LayoutColumns` divide a space evenly into columns, arranging contents into the columns in order.

<Doc-LayoutColumnsDoc />

## Usage

- Place your contents between `<LayoutColumns>` tags
- Divide space into columns by either `columnCount` or `contentMinWidth`. When divided by `columnCount`, the width of contents will be evenly distributed. When divided by `contentMinWidth`, the number of columns will be dynamic.
- Set the direction contents are ordered by `flowDirection`. When `flowDirection` is `row`, contents are ordered from left to right first. When `flowDirection` is `column`, contents are ordered from top to bottom first.

```vue live
<LayoutColumns
	column-count="3"
	flow-direction="row"
	vertical-align="center"
	gap-x="3"
	gap-y="5"
>
	<button>1</button>
	<button>2</button>
	<button>3</button>
	<button>4</button>
	<button>5</button>
	<button>6</button>
</LayoutColumns>
```

## Props

- [padding props](/components/#padding-props)

| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| columnCount | set number of columns, width of contents will be evenly distributed, required when contentMinWidth is not set | Number | - | positive integer |
| contentMinWidth | Set minimum width of contents, number of columns will be dynamic, ignored when columnCount is set | Number, String | 0 | |
| flowDirection | the direction contents are ordered | String | row | row, column |
| verticalAlign | vertical align contents (when the heights of contents differ), ignored when flowDirection is column | String | default | default, top, center, bottom |
| gap | gap size between contents | Number, String | 0 | spacing scale, gap shorthand |
| gapX | horizontal gap size between contents | Number, String | 0 | spacing scale |
| gapY | vertical gap size between contents | Number, String | 0 | spacing scale |
