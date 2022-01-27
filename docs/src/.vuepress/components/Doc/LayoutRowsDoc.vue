<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox style="overflow: auto">
				<LayoutRows v-bind="filteredPropsValue">
					<GreyBox
						v-for="i in 20"
						:name="i"
						:size="propsValue.identicalContentsSize ? 'm' : ['s', 'm'][i % 2]"
						show-size
					/>
				</LayoutRows>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutRows from '@layout-system-components/LayoutRows';
import { getDefaultPropsValue, getPropsConfig, verticalAlignSelectConfig, horizontalAlignSelectConfig } from './playgroundProps';
import { pickBy } from 'lodash-es';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutRows,
	},
	data() {
		return {
			propsValue: {
				identicalContentsSize: false,
				rowCount: 3,
				flowDirection: 'row',
				...getDefaultPropsValue(['padding', 'gapXY', 'verticalAlign']),
				horizontalAlign: 'left',
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
				identicalContentsSize: {
					title: 'identical contents size',
					type: 'switch',
				},
				rowCount: {
					type: 'range',
					min: 1,
					max: 10,
					step: 1,
				},
				flowDirection: {
					type: 'select',
					options: [
						'row',
						'column',
					],
				},
				verticalAlign: verticalAlignSelectConfig,
				horizontalAlign: {
					...horizontalAlignSelectConfig,
					options: ['left', 'center', 'right'],
				},
				...getPropsConfig(['padding', 'gapXY']),
			};
		},
	},
}
</script>
