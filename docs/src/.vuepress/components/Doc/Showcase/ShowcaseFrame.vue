<template>
	<div class="showcase-frame">
		<LayoutList padding-y="5" gap="5">
			<LayoutAlign horizontal-align="right">
				<LayoutListInline gap="3" vertical-align="center">
					<label>
						Highlight layouts
					</label>
					<ToggleSwitch v-model="propsValue.debug" />
				</LayoutListInline>
			</LayoutAlign>
			<PropsPlayground>
				<div
					:class="{
						'layout-u-debug': propsValue.debug,
					}"
				>
					<slot />
				</div>
			</PropsPlayground>
		</LayoutList>
	</div>
</template>

<script>
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import ToggleSwitch from '../../PropsPlaygroundForm/ToggleSwitch';
import PropsPlayground from '../../PropsPlayground';
export default {
	components: {
		LayoutAlign,
		LayoutList,
		LayoutListInline,
		ToggleSwitch,
		PropsPlayground,
	},
	data() {
		return {
			propsValue: {
				debug: false,
			},
			propsConfig: {
				debug: {
					title: 'Highlight layouts',
					type: 'switch',
				},
			},
		};
	},
};
</script>
