<template>
	<div class="props-playground">
		<LayoutFlexRow>
			<template #left>
				<LayoutAlign padding="5" class="props-playground__controls">
					<LayoutList gap="5">
						<div v-for="(propConfig, propName) in propsConfig" :key="propName">
							<div>
								<b>
									{{ propName }}
								</b>
								<template v-if="['range'].indexOf(propConfig.type) !== -1">
									: {{ propsValue[propName] }}
								</template>
							</div>
							<input
								v-if="propConfig.type === 'range'"
								v-model.number="propsValue[propName]"
								type="range"
								:max="propConfig.max"
								:min="propConfig.min"
								:step="propConfig.step"
							>
							<select
								v-if="propConfig.type === 'select'"
								v-model="propsValue[propName]"
							>
								<option
									v-for="(option, optionIndex) in propConfig.options"
									:key="optionIndex"
									:value="option"
								>
									{{ option }}
								</option>
							</select>
							<template v-if="propConfig.type === 'boolean'">
								<LayoutListInline gap="5">
									<label>
										<LayoutListInline vertical-align="center" gap="3">
											<input v-model="propsValue[propName]" type="radio" :value="true">
											<span>
												true
											</span>
										</LayoutListInline>
									</label>
									<label>
										<LayoutListInline vertical-align="center" gap="3">
											<input v-model="propsValue[propName]" type="radio" :value="false">
											<span>
												false
											</span>
										</LayoutListInline>
									</label>
								</LayoutListInline>
							</template>
						</div>
					</LayoutList>
				</LayoutAlign>
			</template>
			<template #remain>
				<div class="props-playground__result">
					<slot />
				</div>
			</template>
		</LayoutFlexRow>
	</div>
</template>

<script>
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
export default {
	components: {
		LayoutAlign,
		LayoutList,
		LayoutListInline,
		LayoutFlexRow,
	},
	props: {
		value: {
			type: Object,
			required: true,
		},
		propsConfig: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			propsValue: {},
		};
	},
	watch: {
		propsValue: {
			deep: true,
			handler() {
				const newValue = Object.assign({}, this.value, this.propsValue);
				this.$emit('input', newValue);
			},
		},
	},
	created() {
		Object.keys(this.value).forEach(propName => {
			this.$set(this.propsValue, propName, this.value[propName]);
		});
	},
};
</script>

<style scoped lang="scss">
.props-playground {
	border: 1px solid #e2e2e2;
	border-radius: 4px;
	&__controls {
		width: 200px;
		background-color: #f8f5f5;
	}
}
</style>
