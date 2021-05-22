<template>
	<div>
		<LayoutListInline gap="8">
			<LayoutList v-for="scale in spacingScales" gap="3" horizontal-align="center">
				<b>{{ scale }}</b>
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
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import { spacingRangeConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		LayoutList,
		LayoutListInline,
	},
	data() {
		return {
			spacingScales: Array.from(Array(spacingRangeConfig.max + 1).keys()),
		};
	},
};
</script>
