<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutColumns v-bind="propsValue">
					<GreyBox name="Lorem" size="m" width="initial" />
					<GreyBox name="ipsum" />
					<GreyBox name="dolor" size="m" width="initial" />
					<GreyBox name="sit" />
					<GreyBox name="amet" size="m" width="initial" />
					<GreyBox name="consectetur" />
					<GreyBox name="adipiscing" size="m" width="initial" />
					<GreyBox name="elit" />
				</LayoutColumns>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutColumns from '@layout-system-components/LayoutColumns';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutColumns,
	},
	data() {
		const propsName = ['padding', 'gapXY', 'verticalAlign'];
		return {
			propsValue: {
				minWidth: 200,
				...getDefaultPropsValue(propsName),
			},
			propsConfig: {
				minWidth: {
					type: 'range',
					min: 0,
					max: 400,
					step: 50,
				},
				...getPropsConfig(propsName),
			},
		};
	},
}
</script>
