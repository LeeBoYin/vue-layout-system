<template>
	<div>
		<LayoutListInline gap="8">
			<LayoutList v-for="scale in spacingScales" gap="3">
				<LayoutFlexRow vertical-align="bottom">
					<template #left>
						<b>{{ scale }}</b>
					</template>
					<template #right>
						<small class="text-grey">
							{{ getScaleValue(scale) }}
						</small>
					</template>
				</LayoutFlexRow>
				<GreyBox>
					<LayoutList :gap="scale" :padding="scale">
						<GreyBox size="s" />
						<GreyBox size="s" />
					</LayoutList>
				</GreyBox>
			</LayoutList>
		</LayoutListInline>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import { spacingRangeConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		LayoutFlexRow,
		LayoutList,
		LayoutListInline,
	},
	data() {
		return {
			spacingScales: Array.from(Array(spacingRangeConfig.max + 1).keys()),
		};
	},
	methods: {
		getScaleValue(scale) {
			return typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement).getPropertyValue(`--layout-spacing-${ scale }`) : '';
		},
	},
};
</script>
