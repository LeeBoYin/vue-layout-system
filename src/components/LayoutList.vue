<template>
	<div
		class="layout-list"
		:class="[
			getGapClass('layout-list'),
			getHorizontalAlignClass('layout-list'),
			paddingClass,
		]"
	>
		<slot />
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutList',
	mixins: [
		layoutMixin,
	],
};
</script>
