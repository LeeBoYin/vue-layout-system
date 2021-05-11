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
import {
	paddingPropsValue,
	paddingPropsConfig,
	horizontalAlignConfig,
	verticalAlignConfig
} from './playgroundProps';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAlign,
	},
	data() {
		return {
			propsValue: {
				...paddingPropsValue,
				horizontalAlign: 'left',
				verticalAlign: 'top',
			},
			propsConfig: {
				...paddingPropsConfig,
				...horizontalAlignConfig,
				...verticalAlignConfig,
			},
		};
	},
}
</script>
