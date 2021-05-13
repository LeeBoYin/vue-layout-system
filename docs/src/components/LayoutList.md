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
- [padding props](/components/#padding-props)

| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| gap | gap size between contents | Number, String | 0 | spacing scale |
| horizontalAlign | horizontal align | String | default | default, left, center, right |
