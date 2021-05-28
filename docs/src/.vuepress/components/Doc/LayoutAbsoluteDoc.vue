<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox class="layout-u-position-relative">
				<img src="https://picsum.photos/1200/800?grayscale" style="aspect-ratio: 4 / 3; width: 100%;">
				<LayoutAbsolute v-bind="propsValue">
					<template slot="topLeft">
						<GreyBox size="m" solid name="topLeft" show-size />
					</template>
					<template slot="top">
						<GreyBox size="m" solid name="top" show-size />
					</template>
					<template slot="topRight">
						<GreyBox size="m" solid name="topRight" show-size />
					</template>
					<template slot="right">
						<GreyBox size="m" solid name="right" show-size />
					</template>
					<template slot="bottomRight">
						<GreyBox size="m" solid name="bottomRight" show-size />
					</template>
					<template slot="bottom">
						<GreyBox size="m" solid name="bottom" show-size />
					</template>
					<template slot="bottomLeft">
						<GreyBox size="m" solid name="bottomLeft" show-size />
					</template>
					<template slot="left">
						<GreyBox size="m" solid name="left" show-size />
					</template>
					<template slot="center">
						<GreyBox size="m" solid name="center" show-size />
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
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAbsolute,
	},
	data() {
		const propsName = ['padding'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
