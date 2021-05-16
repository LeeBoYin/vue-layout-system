<template>
	<div
		class="layout-flex-column"
		:class="[
			getHorizontalAlignClass('layout-flex-column'),
			getGapClass('layout-flex-column'),
			paddingClass,
			noRemainClass,
		]"
	>
		<div v-if="$slots.top" class="layout-flex-column__top">
			<slot name="top"></slot>
		</div>
		<div class="layout-flex-column__remain">
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
	computed: {
		noRemainClass() {
			return !this.$slots.remain ? 'layout-flex-column--no-remain' : null;
		},
	},
};
</script>
