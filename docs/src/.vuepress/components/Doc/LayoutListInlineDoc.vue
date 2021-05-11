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
import { paddingPropsValue, paddingPropsConfig, gapXYValue, gapXYConfig, horizontalAlignConfig, verticalAlignConfig } from './playgroundProps';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutListInline,
	},
	data() {
		return {
			propsValue: {
				...paddingPropsValue,
				...gapXYValue,
				horizontalAlign: 'default',
				verticalAlign: 'default',
				wrap: true,
			},
			propsConfig: {
				...paddingPropsConfig,
				...gapXYConfig,
				...horizontalAlignConfig,
				...verticalAlignConfig,
				wrap: {
					type: 'boolean',
				},
			},
		};
	},
}
</script>
