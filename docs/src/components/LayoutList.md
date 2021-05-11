# LayoutList

`LayoutList` arranges contents vertically

<Doc-LayoutListDoc />

## Usage

- Place your contents between `<LayoutList>` tags

```vue
<LayoutList
    padding="2 3 5"
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
| padding | padding size of all sides | Number | 0 | spacing scale |
| paddingX | padding size of left and right sides | Number | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number | 0 | spacing scale |
| gap | gap size between contents | Number | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
