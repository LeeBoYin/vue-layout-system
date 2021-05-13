<template>
	<div
		class="props-playground"
		:class="{
			'props-playground--overflow': isResultOverflow,
			'props-playground--transition': isTransition,
		}"
		:style="{
			width: playgroundWidth && playgroundWidth + 'px',
		}"
	>
		<LayoutFlexRow>
			<template #left>
				<LayoutAlign padding="5" class="props-playground__controls">
					<LayoutList gap="5">
						<LayoutList
							v-for="(propConfig, propName) in propsConfig"
							:key="propName"
							gap="2"
							horizontal-align="left"
						>
							<div>
								<b>
									{{ propName }}
								</b>
								<template v-if="['range'].indexOf(propConfig.type) !== -1">
									: {{ propsValue[propName] }}
								</template>
							</div>
							<component
								:is="getInputComponent(propConfig.type)"
								v-bind="propConfig"
								v-model.number="propsValue[propName]"
							/>
						</LayoutList>
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
					@dblclick.native="onDoubleClickHandle"
				>
					||
				</LayoutAlign>
			</template>
		</LayoutFlexRow>
	</div>
</template>

<script>
import InputBoolean from './PropsPlaygroundForm/InputBoolean';
import InputRange from './PropsPlaygroundForm/InputRange';
import InputSelect from './PropsPlaygroundForm/InputSelect';
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';

export default {
	components: {
		InputBoolean,
		InputRange,
		InputSelect,
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
			isTransition: false,
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
		window.addEventListener('resize', this.checkWidthByResultContent);
	},
	beforeDestroy() {
		document.removeEventListener('mousemove', this.onDragHandle);
		document.removeEventListener('touchmove', this.onDragHandle);
		document.removeEventListener('mouseup', this.onDragHandleEnd);
		document.removeEventListener('touchend', this.onDragHandleEnd);
		window.removeEventListener('resize', this.checkWidthByResultContent);
	},
	methods: {
		getInputComponent(type) {
			return {
				boolean: InputBoolean,
				range: InputRange,
				select: InputSelect,
			}[type];
		},
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
		onDoubleClickHandle() {
			if(this.playgroundWidth !== null) {
				this.isTransition = true;
				this.playgroundWidth = null;
				this.$el.addEventListener('transitionend', () => {
					this.isTransition = false;
				}, {
					once: true,
				})
			}
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
	width: 100%;
	max-width: 100%;
	border: $border-style;
	border-radius: 4px;
	&--overflow {
		border-color: #CC0000;
	}
	&--transition {
		transition: width .2s ease-out;
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
		&:hover {
			color: #666;
		}
	}
}
</style>
