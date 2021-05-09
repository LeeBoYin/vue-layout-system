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
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutListInline,
	},
	data() {
		return {
			propsValue: {
				indentX: 5,
				indentY: 5,
				gapX: 5,
				gapY: 5,
				horizontalAlign: 'default',
				verticalAlign: 'default',
				wrap: true,
			},
			propsConfig: {
				indentX: {
					name: 'indent-x',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				indentY: {
					name: 'indent-y',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				gapX: {
					name: 'gap-x',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				gapY: {
					name: 'gap-y',
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
				wrap: {
					name: 'wrap',
					type: 'boolean',
				},
			},
		};
	},
}
</script>
