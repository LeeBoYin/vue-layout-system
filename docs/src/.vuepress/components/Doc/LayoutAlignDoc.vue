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
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAlign,
	},
	data() {
		return {
			propsValue: {
				paddingX: 5,
				paddingY: 5,
				horizontalAlign: 'left',
				verticalAlign: 'top',
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
				horizontalAlign: {
					name: 'horizontal-align',
					type: 'select',
					options: ['default', 'left', 'center', 'right'],
				},
				verticalAlign: {
					name: 'vertical-align',
					type: 'select',
					options: ['default', 'top', 'center', 'bottom'],
				},
			},
		};
	},
}
</script>
