# LayoutAbsolute

在 position relative 的 element 中將內容做上下、左右、置中絕對定位。

<Doc-LayoutAbsoluteDoc />

## Usage

- LayoutAbsolute 必須放在 position relative element 裡面
- 將需要做絕對定位的內容放在 LayoutAbsolute 的九個 slot
  1. topLeft: 左上
  1. top: 上
  1. topRight: 右上
  1. right: 右
  1. bottomRight: 右下
  1. bottom: 下
  1. bottomLeft: 左下
  1. left: 左
  1. center: 中心
- 可以將多項內容同時擺放在多個位置的 slot
- 以 props 調整排列格式
  - indent 調整內容與 relative parent 的間距

```vue live
<div style="position: relative; border: 1px solid;">
	<img
		src="https://generative-placeholders.glitch.me/image?colors=74"
		style="vertical-align: middle;"
	>
	<LayoutAbsolute
        indent-x="5"
        indent-y="5"
    >
		<template slot="topLeft">
			<button>topLeft</button>
		</template>
		<template slot="top">
			<button>top</button>
		</template>
		<template slot="topRight">
			<button>topRight</button>
		</template>
		<template slot="right">
			<button>right</button>
		</template>
		<template slot="bottomRight">
			<button>bottomRight</button>
		</template>
		<template slot="bottom">
			<button>bottom</button>
		</template>
		<template slot="bottomLeft">
			<button>bottomLeft</button>
		</template>
		<template slot="left">
			<button>left</button>
		</template>
		<template slot="center">
			<button>center</button>
		</template>
	</LayoutAbsolute>
</div>
```

## Props
| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | 上下左右內縮距離 | Number | 0 | spacing scale |
| indentX | 左右內縮距離 | Number | 0 | spacing scale |
| indentY | 上下內縮距離 | Number | 0 | spacing scale |
