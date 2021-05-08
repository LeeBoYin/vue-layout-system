<template>
	<div
		class="layout-flex-column"
		:class="[horizontalAlignClass, gapClass, indentClass]"
	>
		<div v-if="$slots.top" class="layout-flex-column__top">
			<slot name="top"></slot>
		</div>
		<div class="layout-flex-column__remain layout-u-content-fill-height">
			<slot name="remain"></slot>
		</div>
		<div v-if="$slots.bottom" class="layout-flex-column__bottom">
			<slot name="bottom"></slot>
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	mixins: [
		layoutMixin,
	],
	props: {
		gap: {
			type: [Number, String],
			default: 0,
		},
		horizontalAlign: {
			type: String,
			default: 'default',
		},
	},
	computed: {
		gapClass() {
			return (Number.isInteger(+this.gap) && +this.gap > 0) ? `layout-flex-column--gap-${ this.gap }` : null;
		},
		horizontalAlignClass() {
			if(['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `layout-flex-column--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
	},
};
</script>
