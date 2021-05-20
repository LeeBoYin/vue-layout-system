<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox inline>
				<LayoutListInline v-bind="propsValue">
					<GreyBox name="Lorem" size="m" />
					<GreyBox name="ipsum" size="s" />
					<GreyBox name="dolor" size="m" />
					<GreyBox name="sit" size="s" />
					<GreyBox name="amet" size="m" />
					<GreyBox name="elit" size="s" />
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
