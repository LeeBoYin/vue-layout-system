# LayoutListInline

`LayoutListInline` arranges contents horizontally

<Doc-LayoutListInlineDoc />

## Usage

- Place your contents between `<LayoutListInline>` tags

```vue live
<LayoutListInline
	padding-x="5"
	padding-y="5"
	gap-x="5"
	gap-y="5"
	horizontal-align="left"
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
| padding | padding size of all sides | Number, String | 0 | spacing scale, padding shorthand |
| paddingX | padding size of left and right sides | Number, String | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number, String | 0 | spacing scale |
| paddingTop | padding size of the top side | Number, String | 0 | spacing scale |
| paddingBottom | padding size of the bottom side | Number, String | 0 | spacing scale |
| paddingLeft | padding size of the left side | Number, String | 0 | spacing scale |
| paddingRight | padding size of the right side | Number, String | 0 | spacing scale |
| gap | gap size between contents | Number, String | 0 | spacing scale, gap shorthand |
| gapX | horizontal gap size between contents | Number, String | 0 | spacing scale |
| gapY | vertical gap size between contents | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align (when contents wrapped) | String | default | default, left, center, right |
| verticalAlign | vertical align | String | default | default, top, center, bottom |
| wrap | wrap contents into multiple lines | Boolean | true ||
