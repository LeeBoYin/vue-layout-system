<template>
	<div
		class="layout-list"
		:class="[gapClass, horizontalAlignClass, indentClass]"
	>
		<slot />
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
			return (Number.isInteger(+this.gap) && +this.gap > 0) ? `layout-list--gap-${ this.gap }` : null;
		},
		horizontalAlignClass() {
			if(['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `layout-list--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
	},
};
</script>
