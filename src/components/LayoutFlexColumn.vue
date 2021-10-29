<template>
	<div
		class="layout-flex-column"
		:class="[
			getHorizontalAlignClass('layout-flex-column'),
			getGapClass('layout-flex-column'),
			paddingClass,
			noRemainClass,
			isRemainScrollable ? 'layout-flex-column--remain-overflow-scroll' : null,
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
	props: {
		isRemainScrollable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		noRemainClass() {
			return !this.$slots.remain ? 'layout-flex-column--no-remain' : null;
		},
	},
};
</script>
