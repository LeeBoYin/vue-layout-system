# LayoutColumns

`LayoutColumns` divide a space evenly into columns, arranging contents into the columns in order, from left to right and from top to bottom.

<Doc-LayoutColumnsDoc />

## Usage

- Place your contents between `<LayoutColumns>` tags 

```vue live
<LayoutColumns
	min-width="100"
	gap-x="3"
	gap-y="5"
>
	<button>Save</button>
	<button>Cancel</button>
	<button>OK</button>
</LayoutColumns>
```

## Props

- [padding props](/components/#padding-props)

| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| minWidth | minimum width of contents | Number, String | 0 | |
| gap | gap size between contents | Number, String | 0 | spacing scale, gap shorthand |
| gapX | horizontal gap size between contents | Number, String | 0 | spacing scale |
| gapY | vertical gap size between contents | Number, String | 0 | spacing scale |
| verticalAlign | vertical align (when the heights of contents differ) | String | default | default, top, center, bottom |
