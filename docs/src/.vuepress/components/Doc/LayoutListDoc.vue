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
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutList,
	},
	data() {
		return {
			propsValue: {
				paddingX: 5,
				paddingY: 5,
				gap: 5,
				horizontalAlign: 'center',
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
				gap: {
					name: 'gap',
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
			},
		};
	},
}
</script>
