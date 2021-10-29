# LayoutListInline

`LayoutListInline` arranges contents horizontally.

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
- [padding props](/components/#padding-props)

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| gap | gap size between contents | Number, String | 0 | spacing scale, gap shorthand |
| gapX | horizontal gap size between contents | Number, String | 0 | spacing scale |
| gapY | vertical gap size between contents | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align contents (when contents wrapped) | String | left | left, center, right |
| verticalAlign | vertical align contents (when the heights of contents differ) | String | stretch | top, center, bottom, stretch |
| wrap | wrap contents into multiple lines | Boolean | true | true, false |
