# LayoutRows

`LayoutRows` arranges contents into a number of rows.

<Doc-LayoutRowsDoc />

## Usage

- Place your contents between `<LayoutRows>` tags.
- Set row number by `rowCount`.
- Set the flow direction of contents by `flowDirection`. When `flowDirection` is `row`, contents flow from left to right first. When `flowDirection` is `column`, contents flow from top to bottom first.
- Put `LayoutRows` in an element where `overflow-x: auto` to show horizontal scrollbar.  
- When you need only one row, simply use `LayoutListInline` with `wrap` prop set to `false` instead.

```vue live
<LayoutRows
	row-count="2"
	flow-direction="column"
	gap-x="3"
	gap-y="5"
>
	<button>1</button>
	<button>2</button>
	<button>3</button>
	<button>4</button>
	<button>5</button>
	<button>6</button>
	<button>7</button>
	<button>8</button>
</LayoutRows>
```

## Props

- [padding props](/components/#padding-props)

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| rowCount | set number of rows | Number | - | positive integer |
| flowDirection | the direction contents flow first | String | row | row, column |
| horizontalAlign | horizontal align contents | String | left | left, center, right |
| verticalAlign | vertical align contents (when the heights of contents differ) | String | stretch | top, center, bottom, stretch |
| gap | gap size between contents | Number, String | 0 | spacing scale, gap shorthand |
| gapX | horizontal gap size between contents | Number, String | 0 | spacing scale |
| gapY | vertical gap size between contents | Number, String | 0 | spacing scale |
