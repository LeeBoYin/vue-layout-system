# LayoutListInline

`LayoutList` arranges contents horizontally

<Doc-LayoutListInlineDoc />

## Usage

- Place your contents between `<LayoutListInline>` tags

```vue live
<LayoutListInline
	indent-x="5"
	indent-y="5"
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
| indent | indent size of all sides | Number | 0 | spacing scale |
| indentX | indent size of left and right sides | Number | 0 | spacing scale |
| indentY | indent size of top and bottom sides | Number | 0 | spacing scale |
| gap | gap size between contents | Number | 0 | spacing scale |
| gapX | horizontal gap size between contents | Number | 0 | spacing scale |
| gapY | vertical gap size between contents | Number | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
| verticalAlign | vertical align | String | default | default, top, center, bottom |
| wrap | wrap contents into multiple lines | Boolean | true ||
