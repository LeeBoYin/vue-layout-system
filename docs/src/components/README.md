# Overview
Vue Layout System is a pack of Vue components, where each one layout component solves one specific problem while sharing similar pattern with the others. 

- Your contents are always placed inside `slots`
- Padding, gap size and alignment are set with corresponding `props`
- Layout components can be nested in other layout components. Just like LEGO bricks, combination is the key to creating various types of layout.

Here's an example.

```vue live
<LayoutList gap="5">
    <LayoutFlexRow
        v-for="i in 5"
        :key="i"
        gap="5"
        vertical-align="top"
    >
        <template #left>
            <img :src="`https://i.pravatar.cc/60?img=${ i }`">
        </template>
        <template #remain>
            <LayoutList gap="3">
                <b>Lorem ipsum</b>
                <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
            </LayoutList>
        </template>
        <template #right>
            <LayoutListInline gap="3">
                <button>😍️</button>
                <button>😆</button>
                <button>😢</button>
            </LayoutListInline>
        </template>
    </LayoutFlexRow>
</LayoutList>
```

## Layout Components
- [LayoutAbsolute](/components/LayoutAbsolute) lets you place contents at 9 absolute positions in a relative position element.
- [LayoutAlign](/components/LayoutAlign) lets you align contents both horizontally and vertically.
- [LayoutColumns](/components/LayoutColumns) divide a space evenly into columns, arranging contents into the columns in order.
- [LayoutFlexColumn](/components/LayoutFlexColumn) divides a vertical space into 3 sections, where you can place contents at top, bottom and the remaining space.
- [LayoutFlexRow](/components/LayoutFlexRow) divides a horizontal space into 3 sections, where you can place contents at left, right and the remaining space.
- [LayoutList](/components/LayoutList) arranges contents vertically.
- [LayoutListInline](/components/LayoutListInline) arranges contents horizontally.

## Spacing System
Vue Layout System uses a finite set of spacing scales for all spacing needs, such as padding around the contents and gaps between contents. This is a vital foundation for consistent and precise control of the spacing.

The default spacing scales are integers from `0` to `10`, where smaller numbers represent smaller space and larger numbers represent larger space.

You can easily customize the spacing scales by using either Sass variables or CSS custom properties. See more details in [Customize](/customize/).

<Doc-SpacingSystemDoc />

## Padding Props
Padding generates space around a layout's content. All layout components share the same padding props.

| Property | Description | Type | Default | Value |
| --- | --- | --- | --- | --- |
| padding | padding size of all sides | Number, String | 0 | spacing scale, padding shorthand |
| paddingX | padding size of left and right sides | Number, String | 0 | spacing scale |
| paddingY | padding size of top and bottom sides | Number, String | 0 | spacing scale |
| paddingTop | padding size of the top side | Number, String | 0 | spacing scale |
| paddingBottom | padding size of the bottom side | Number, String | 0 | spacing scale |
| paddingLeft | padding size of the left side | Number, String | 0 | spacing scale |
| paddingRight | padding size of the right side | Number, String | 0 | spacing scale |

### Padding on all sides
When space around all sides needs to be the same, simply set the `padding` props.

```vue
<LayoutListInline padding="8">
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding="8">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>

### Padding on opposite sides
When the padding sizes on opposite sides need to be symmetric, it is easy to complete with `paddingX` and `paddingY`.

```vue
<LayoutListInline padding-x="8" padding-y="4">
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding-x="8" padding-y="4">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>

### Padding on each side
You can also set padding size for each side of a layout component.

```vue
<LayoutListInline
	padding-top="8"
	padding-bottom="4"
	padding-left="2"
	padding-right="0"
>
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding-top="8" padding-bottom="4" padding-left="2" padding-right="0">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>

### Padding shorthand
To shorten the code, it is possible to specify space of all sides in the `padding` props, similar to writing padding shorthand in css.


<b>top: 8, right: 4, bottom: 8, left: 4</b>
```vue
<LayoutListInline padding="8 4">
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding="8 4">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>


<b>top: 8, right: 4, bottom: 2, left: 4</b>
```vue
<LayoutListInline padding="8 4 2">
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding="8 4 2">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>


<b>top: 8, right: 4, bottom: 2, left: 0</b>
```vue
<LayoutListInline padding="8 4 2 0">
	...
</LayoutListInline>
```

<GreyBox inline>
<LayoutListInline padding="8 4 2 0">
<GreyBox v-for="i in 3" :key="i" size="s" />
</LayoutListInline>
</GreyBox>
