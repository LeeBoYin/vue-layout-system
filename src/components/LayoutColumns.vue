<template>
	<div
		class="layout-columns"
		:class="[
			getGapClass('layout-columns'),
			getVerticalAlignClass('layout-columns'),
			paddingClass,
		]"
		:style="minMaxWidthStyle"
	>
		<slot />
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	props: {
		minWidth: {
			type: [Number, String],
			default: null,
		},
		maxWidth: {
			type: [Number, String],
			default: null,
		},
	},
	mixins: [
		layoutMixin,
	],
	computed: {
		minMaxWidthStyle() {
			return {
				'--layout-columns-column-min-width': this.minWidth
					&& Number.isInteger(+this.minWidth)
						? this.minWidth + 'px'
						: this.minWidth,
				'--layout-columns-column-max-width': this.maxWidth
					&& Number.isInteger(+this.maxWidth)
						? this.maxWidth + 'px'
						: this.maxWidth,
			};
		},
	},
};
</script>
