<template>
	<div
		class="layout-flex-column"
		:class="[
			getHorizontalAlignClass('layout-flex-column'),
			getGapClass('layout-flex-column'),
			paddingClass,
			noRemainClass,
			noTopClass,
			noBottomClass,
		]"
	>
		<div v-if="$slots.top" class="layout-flex-column__top">
			<slot name="top"></slot>
		</div>
		<div class="layout-flex-column__remain">
			<slot name="remain"><slot /></slot>
		</div>
		<div v-if="$slots.bottom" class="layout-flex-column__bottom">
			<slot name="bottom"></slot>
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutFlexColumn',
	mixins: [
		layoutMixin,
	],
	computed: {
		noRemainClass() {
			return !this.$slots.remain ? 'layout-flex-column--no-remain' : null;
		},
		noTopClass() {
			return !this.$slots.top ? 'layout-flex-column--no-top' : null;
		},
		noBottomClass() {
			return !this.$slots.bottom ? 'layout-flex-column--no-bottom' : null;
		},
	},
};
</script>
