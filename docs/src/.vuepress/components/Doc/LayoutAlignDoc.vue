<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox height="250" class="layout-u-content-fill-height">
				<LayoutAlign v-bind="propsValue">
					<GreyBox size="m" name="content" />
				</LayoutAlign>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutAlign from '@layout-system-components/LayoutAlign';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAlign,
	},
	data() {
		const propsName = ['padding', 'horizontalAlign', 'verticalAlign'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
