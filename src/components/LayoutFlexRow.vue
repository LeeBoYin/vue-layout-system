<template>
	<div
		class="layout-flex-row"
		:class="[verticalAlignClass, gapClass, indentClass]"
	>
		<div
			v-if="$slots.left"
			class="layout-flex-row__left"
			:class="{
				'layout-u-content-fill-height': !verticalAlignClass,
			}"
		>
			<slot name="left"></slot>
		</div>
		<div
			class="layout-flex-row__remain"
			:class="{
				'layout-u-content-fill-height': !verticalAlignClass,
			}"
		>
			<slot name="remain"></slot>
		</div>
		<div
			v-if="$slots.right"
			class="layout-flex-row__right"
			:class="{
				'layout-u-content-fill-height': !verticalAlignClass,
			}"
		>
			<slot name="right"></slot>
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
		verticalAlign: {
			type: String,
			default: 'default',
		},
	},
	computed: {
		gapClass() {
			return (Number.isInteger(+this.gap) && +this.gap > 0) ? `layout-flex-row--gap-${ this.gap }` : null;
		},
		verticalAlignClass() {
			if(['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
				return `layout-flex-row--vertical-align-${ this.verticalAlign }`;
			}
			return null;
		},
	},
};
</script>
