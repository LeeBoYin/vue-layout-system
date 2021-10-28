<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox inline>
				<LayoutListInline v-bind="propsValue">
					<GreyBox name="Lorem" size="m" show-size />
					<GreyBox name="ipsum" size="s" show-size />
					<GreyBox name="dolor" size="m" show-size />
					<GreyBox name="sit" size="s" show-size />
					<GreyBox name="amet" size="m" show-size />
					<GreyBox name="elit" size="s" show-size />
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
				horizontalAlign: 'left',
				wrap: true,
			},
			propsConfig: {
				...getPropsConfig(propsName),
				horizontalAlign: {
					type: 'select',
						options: ['left', 'center', 'right'],
				},
				wrap: {
					type: 'boolean',
				},
			},
		};
	},
}
</script>
