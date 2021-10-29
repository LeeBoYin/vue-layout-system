# LayoutGrid

`LayoutGrid` divides a horizontal space into a number of columns evenly, helps align elements based on sequenced columns and rows.

<Doc-LayoutGridDoc />

## Usage

- In a `LayoutGrid`, content must be placed within `LayoutGridCell`.
- `span` of `LayoutGridCell` indicates the number of columns you’d like to use out of the columns per row.
- `LayoutGridCell` are seperated by `gap` of `LayoutGrid`.
- Place a `LayoutGridRowBreak` to break the subsequent `LayoutGridCell` into a new row.
- Only `LayoutGridCell` and `LayoutGridRowBreak` may be immediate children of `LayoutGrid`.

```vue live
<LayoutGrid
	column-count="12"
	gap-x="5"
	gap-y="5"
>
	<LayoutGridCell span="4">
		<GreyBox name="4" />
    </LayoutGridCell>
	<LayoutGridCell span="2" />
	<LayoutGridCell span="2">
		<GreyBox name="2" />
    </LayoutGridCell>

	<LayoutGridRowBreak />

	<LayoutGridCell span="3">
		<GreyBox name="3" />
    </LayoutGridCell>
	<LayoutGridCell span="3">
		<GreyBox name="3" />
    </LayoutGridCell>
	<LayoutGridCell span="6">
		<GreyBox name="6" />
    </LayoutGridCell>
</LayoutGrid>
```
## Props

### LayoutGrid
- [padding props](/components/#padding-props)

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| columnCount | number of columns | Number, String | 12 | positive integer |
| gap | gap size between columns and rows | Number, String | 0 | spacing scale |
| gapX | horizontal gap size between columns | Number, String | 0 | spacing scale |
| gapY | vertical gap size between rows | Number, String | 0 | spacing scale |
| verticalAlign | vertical align contents in rows | String | stretch | top, center, bottom, stretch |

### LayoutGridCell
| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| span | number of columns to use | Number, String | 1 | positive integer ≤ `columnCount` |
