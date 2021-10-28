<template>
	<div
		class="layout-grid"
		:class="[
			getGapClass('layout-grid'),
			getVerticalAlignClass('layout-grid'),
			paddingClass,
		]"
		:style="{
			'--column-count': columnCount,
		}"
	>
		<slot />
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutGrid',
	mixins: [
		layoutMixin,
	],
	props: {
		columnCount: {
			type: [Number, String],
			default: 12,
		},
	},
};
</script>
