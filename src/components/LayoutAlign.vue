<template>
	<div
		class="layout-align"
		:class="[
			getVerticalAlignClass('layout-align'),
			getHorizontalAlignClass('layout-align'),
			paddingClass,
		]"
	>
		<div class="layout-align__content">
			<slot />
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutAlign',
	mixins: [
		layoutMixin,
	],
};
</script>
