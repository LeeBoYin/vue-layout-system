<template>
	<div
		class="props-playground"
		:class="{
			'props-playground--overflow': isResultOverflow,
		}"
		:style="{
			width: playgroundWidth && playgroundWidth + 'px',
		}"
	>
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
			<template #right>
				<LayoutAlign
					class="props-playground__handle"
					vertical-align="center"
					horizontal-align="center"
					@mousedown.native.prevent="onDragHandleStart"
					@touchstart.native.prevent="onDragHandleStart"
				>
					||
				</LayoutAlign>
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
			isResizing: false,
			isResultOverflow: false,
			playgroundWidth: null,
			resizeStartPlaygroundWidth: null,
			resizeStartX: null,
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
		value() {
			this.$nextTick(this.checkWidthByResultContent);
		},
	},
	created() {
		Object.keys(this.value).forEach(propName => {
			this.$set(this.propsValue, propName, this.value[propName]);
		});
	},
	mounted() {
		document.addEventListener('mousemove', this.onDragHandle);
		document.addEventListener('touchmove', this.onDragHandle);
		document.addEventListener('mouseup', this.onDragHandleEnd);
		document.addEventListener('touchend', this.onDragHandleEnd);
	},
	beforeDestroy() {
		document.removeEventListener('mousemove', this.onDragHandle);
		document.removeEventListener('touchmove', this.onDragHandle);
		document.removeEventListener('mouseup', this.onDragHandleEnd);
		document.removeEventListener('touchend', this.onDragHandleEnd);
	},
	methods: {
		onDragHandleStart(e) {
			this.isResizing = true;
			if(e.type === 'touchstart') {
				this.resizeStartX = e.touches[0].clientX;
			} else {
				this.resizeStartX = e.clientX;
			}
			this.resizeStartPlaygroundWidth = this.$el.clientWidth;
		},
		onDragHandle(e) {
			if(!this.isResizing) {
				return;
			}

			let currentX;
			if(e.type === 'touchmove') {
				currentX = e.touches[0].clientX;
			} else {
				currentX = e.clientX;
			}
			const deltaX = currentX - this.resizeStartX;
			this.playgroundWidth = this.resizeStartPlaygroundWidth + deltaX;
			this.$nextTick(this.checkWidthByResultContent);
		},
		onDragHandleEnd() {
			this.isResizing = false;
		},
		checkWidthByResultContent() {
			this.isResultOverflow = false;
			if(this.$el.clientWidth < this.$el.scrollWidth) {
				this.playgroundWidth = this.$el.scrollWidth;

				// check again after next tick
				this.$nextTick(() => {
					if(this.$el.clientWidth < this.$el.scrollWidth) {
						this.isResultOverflow = true;
					}
				});
			}
		},
	},
};
</script>

<style scoped lang="scss">
$border-style: 1px solid #e2e2e2;
.props-playground {
	max-width: 100%;
	border: $border-style;
	border-radius: 4px;
	&--overflow {
		border-color: #CC0000;
	}
	&__controls {
		width: 200px;
		background-color: #f8f5f5;
	}
	&__handle {
		border-left: $border-style;
		color: #999;
		width: 16px;
		cursor: ew-resize;
		user-select: none;
	}
}
</style>
