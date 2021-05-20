<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutColumns v-bind="filteredPropsValue">
					<GreyBox v-for="i in 20" :name="i" :size="[null, 'm'][i % 2]" width="initial" />
				</LayoutColumns>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutColumns from '@layout-system-components/LayoutColumns';
import { getDefaultPropsValue, getPropsConfig, verticalAlignSelectConfig } from './playgroundProps';
import { pickBy } from 'lodash-es';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutColumns,
	},
	data() {
		return {
			propsValue: {
				divideBy: 'columnCount',
				contentMinWidth: 200,
				columnCount: 4,
				flowDirection: 'row',
				...getDefaultPropsValue(['padding', 'gapXY', 'verticalAlign']),
			},

		};
	},
	computed: {
		filteredPropsValue() {
			return pickBy(this.propsValue, (value, key) => {
				return !this.propsConfig[key].disabled;
			});
		},
		propsConfig() {
			return {
				divideBy: {
					title: 'divide by',
					type: 'select',
					options: [
						'contentMinWidth',
						'columnCount',
					],
				},
				contentMinWidth: {
					type: 'range',
					min: 0,
					max: 400,
					step: 50,
					disabled: this.propsValue.divideBy === 'columnCount',
				},
				columnCount: {
					type: 'range',
					min: 1,
					max: 12,
					step: 1,
					disabled: this.propsValue.divideBy === 'contentMinWidth',
				},
				flowDirection: {
					type: 'select',
					options: [
						'row',
						'column',
					],
				},
				verticalAlign: {
					...verticalAlignSelectConfig,
					disabled: this.propsValue.flowDirection === 'column',
				},
				...getPropsConfig(['padding', 'gapXY']),
			};
		},
	},
}
</script>
