<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutList v-bind="propsValue">
					<GreyBox v-for="i in 5" :key="i" :size="['s', 'm'][i % 2]" :name="i" />
				</LayoutList>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutList from '@layout-system-components/LayoutList';
import { paddingPropsValue, paddingPropsConfig, gapValue, gapConfig, horizontalAlignConfig } from './playgroundProps';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutList,
	},
	data() {
		return {
			propsValue: {
				...paddingPropsValue,
				...gapValue,
				horizontalAlign: 'center',
			},
			propsConfig: {
				...paddingPropsConfig,
				...gapConfig,
				...horizontalAlignConfig,
			},
		};
	},
}
</script>
