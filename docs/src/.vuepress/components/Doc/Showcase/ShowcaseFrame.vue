<template>
	<div class="showcase-frame">
		<LayoutList gap="5">
			<LayoutFlexRow vertical-align="bottom">
				<template #left>
					<b>{{ title }}</b>
				</template>
				<template #right>
					<LayoutListInline gap="3" vertical-align="center">
						<label>
							Highlight layouts
						</label>
						<ToggleSwitch v-model="propsValue.debug" />
					</LayoutListInline>
				</template>
			</LayoutFlexRow>
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
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import ToggleSwitch from '../../PropsPlaygroundForm/ToggleSwitch';
import PropsPlayground from '../../PropsPlayground';
export default {
	components: {
		LayoutList,
		LayoutListInline,
		LayoutFlexRow,
		ToggleSwitch,
		PropsPlayground,
	},
	props: {
		title: {
			type: String,
			default: null,
		},
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
