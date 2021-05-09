# LayoutList

`LayoutList` arranges contents vertically

<Doc-LayoutListDoc />

## Usage

- Place your contents between `<LayoutList>` tags

```vue live
<LayoutList
	indent-x="5"
	indent-y="5"
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
| indent | indent size of all sides | Number | 0 | spacing scale |
| indentX | indent size of left and right sides | Number | 0 | spacing scale |
| indentY | indent size of top and bottom sides | Number | 0 | spacing scale |
| gap | gap size between contents | Number | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
