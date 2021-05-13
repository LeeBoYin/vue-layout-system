<template>
	<input
		type="range"
		:max="max"
		:min="min"
		:step="step"
		:value="value"
		@input="$emit('input', $event.target.value)"
	>
</template>

<script>
	export default {
		props: {
			max: Number,
			min: Number,
			step: Number,
			value: Number,
		},
	};
</script>
