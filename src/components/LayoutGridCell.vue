<template>
	<div
		class="layout-grid__cell"
		:style="{
			'--span': span,
		}"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'LayoutGridCell',
	props: {
		span: {
			type: [Number, String],
			default: 1,
		},
	},
};
</script>
