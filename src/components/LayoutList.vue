<template>
	<div
		class="layout-list"
		:class="[
			getGapClass('layout-list'),
			getHorizontalAlignClass('layout-list'),
			indentClass
		]"
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
};
</script>
