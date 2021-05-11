<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox class="layout-u-position-relative">
				<img src="https://picsum.photos/1200/800?grayscale">
				<LayoutAbsolute v-bind="propsValue">
					<template slot="topLeft">
						<GreyBox size="m" solid name="topLeft" />
					</template>
					<template slot="top">
						<GreyBox size="m" solid name="top" />
					</template>
					<template slot="topRight">
						<GreyBox size="m" solid name="topRight" />
					</template>
					<template slot="right">
						<GreyBox size="m" solid name="right" />
					</template>
					<template slot="bottomRight">
						<GreyBox size="m" solid name="bottomRight" />
					</template>
					<template slot="bottom">
						<GreyBox size="m" solid name="bottom" />
					</template>
					<template slot="bottomLeft">
						<GreyBox size="m" solid name="bottomLeft" />
					</template>
					<template slot="left">
						<GreyBox size="m" solid name="left" />
					</template>
					<template slot="center">
						<GreyBox size="m" solid name="center" />
					</template>
				</LayoutAbsolute>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutAbsolute from '@layout-system-components/LayoutAbsolute';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAbsolute,
	},
	data() {
		return {
			propsValue: {
				paddingX: 5,
				paddingY: 5,
			},
			propsConfig: {
				paddingX: {
					name: 'padding-x',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				paddingY: {
					name: 'padding-y',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
			},
		};
	},
}
</script>
