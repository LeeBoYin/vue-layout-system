<template>
	<LayoutListInline gap="5">
		<label>
			<LayoutListInline vertical-align="center" gap="3">
				<input
					v-model="inputValue"
					type="radio"
					:value="true"
				>
				<span>
					true
				</span>
			</LayoutListInline>
		</label>
		<label>
			<LayoutListInline vertical-align="center" gap="3">
				<input
					v-model="inputValue"
					type="radio"
					:value="false"
				>
				<span>
					false
				</span>
			</LayoutListInline>
		</label>
	</LayoutListInline>
</template>

<script>
import LayoutListInline from '@layout-system-components/LayoutListInline';
export default {
	components: {
		LayoutListInline,
	},
	props: {
		value: Boolean,
	},
	data() {
		return {
			inputValue: this.value,
		};
	},
	watch: {
		value() {
			this.inputValue = this.value;
		},
		inputValue() {
			this.$emit('input', this.inputValue);
		},
	},
};
</script>
