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

<style lang="scss" scoped>
select {
	position: relative;
	border: 1px solid #e2e2e2;
	padding: 4px 8px;
	border-radius: 4px;
}
</style>
