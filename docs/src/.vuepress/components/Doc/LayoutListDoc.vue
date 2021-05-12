<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutList v-bind="propsValue">
					<GreyBox
						v-for="i in 5"
						:key="i"
						:size="['s', 'm'][i % 2]"
						:name="i"
					/>
				</LayoutList>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutList from '@layout-system-components/LayoutList';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutList,
	},
	data() {
		const propsName = ['padding', 'gap', 'horizontalAlign'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
