<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutListInline v-bind="propsValue">
					<GreyBox v-for="i in 10" :key="i" :size="['s', 'm'][i % 2]" :name="i" />
				</LayoutListInline>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutListInline,
	},
	data() {
		const propsName = ['padding', 'gapXY', 'horizontalAlign', 'verticalAlign'];
		return {
			propsValue: {
				...getDefaultPropsValue(propsName),
				wrap: true,
			},
			propsConfig: {
				...getPropsConfig(propsName),
				wrap: {
					type: 'boolean',
				},
			},
		};
	},
}
</script>
