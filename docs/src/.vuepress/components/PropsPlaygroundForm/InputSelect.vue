<template>
	<select
		:value="value"
		@change="$emit('input', $event.target.value)"
	>
		<option
			v-for="(option, optionIndex) in options"
			:key="optionIndex"
			:value="option"
		>
			{{ option }}
		</option>
	</select>
</template>

<script>
export default {
	props: {
		options: Array,
		value: String,
	},
};
</script>
