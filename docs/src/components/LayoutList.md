# LayoutList

`LayoutList` arranges contents vertically

<Doc-LayoutListDoc />

## Usage

- Place your contents between `<LayoutList>` tags

```vue live
<LayoutList
	padding-x="5"
	padding-y="5"
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
| padding | padding size of all sides | Number, String | 0 | spacing scale, padding shorthand |
| paddingX | padding size of left and right sides | Number, String | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number, String | 0 | spacing scale |
| paddingTop | padding size of the top side | Number, String | 0 | spacing scale |
| paddingBottom | padding size of the bottom side | Number, String | 0 | spacing scale |
| paddingLeft | padding size of the left side | Number, String | 0 | spacing scale |
| paddingRight | padding size of the right side | Number, String | 0 | spacing scale |
| gap | gap size between contents | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
