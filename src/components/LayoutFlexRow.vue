<template>
	<div
		class="layout-flex-row"
		:class="[
			getVerticalAlignClass('layout-flex-row'),
			getGapClass('layout-flex-row'),
			paddingClass,
			noRemainClass,
		]"
	>
		<div
			v-if="$slots.left"
			class="layout-flex-row__left"
		>
			<slot name="left"></slot>
		</div>
		<div
			class="layout-flex-row__remain"
		>
			<slot name="remain"><slot /></slot>
		</div>
		<div
			v-if="$slots.right"
			class="layout-flex-row__right"
		>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutFlexRow',
	mixins: [
		layoutMixin,
	],
	computed: {
		noRemainClass() {
			return !this.$slots.remain ? 'layout-flex-row--no-remain' : null;
		},
	},
};
</script>
