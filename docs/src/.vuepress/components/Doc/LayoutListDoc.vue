<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>
				<LayoutList v-bind="propsValue">
					<GreyBox name="Lorem" size="s" width="initial" show-size />
					<GreyBox name="ipsum" size="s" width="initial" show-size />
					<GreyBox name="dolor" size="s" width="initial" show-size />
					<GreyBox name="sit" size="s" width="initial" show-size />
					<GreyBox name="amet" size="s" width="initial" show-size />
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
