<template>
	<div
		class="layout-align"
		:class="[
			getVerticalAlignClass('layout-align'),
			getHorizontalAlignClass('layout-align'),
			indentClass
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
	mixins: [
		layoutMixin,
	],
};
</script>
