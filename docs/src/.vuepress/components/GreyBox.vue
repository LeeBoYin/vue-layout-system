<template>
	<div
		class="grey-box"
		:class="[
			textCenterClass,
			solidClass,
			inlineClass,
			resizableClass,
		]"
		:style="[sizeStyle, sizeHintStyle]"
	>
		<slot>{{ name }}</slot>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: [Number, String],
			default: null,
		},
		width: {
			type: [Number, String],
			default: null,
		},
		height: {
			type: [Number, String],
			default: null,
		},
		size: {
			type: String,
			default: null, // s, m, l
		},
		solid: {
			type: Boolean,
			default: false,
		},
		inline: {
			type: Boolean,
			default: false,
		},
		showSize: {
			type: Boolean,
			default: false,
		},
		resizable: {
			type: Boolean,
			default: false,
		},
		resizableX: {
			type: Boolean,
			default: false,
		},
		resizableY: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sizeStyle() {
			// 1. 自訂 width, height
			// 2. 使用 s, m, l 固定大小
			// 3. 不設定大小
			const sizeMap = {
				s: {
					width: 60,
					height: 40,
				},
				m: {
					width: 120,
					height: 80,
				},
				l: {
					width: 240,
					height: 160,
				}
			};
			const width = this.width || sizeMap[this.size]?.width || null;
			const height = this.height || sizeMap[this.size]?.height || null;
			return {
				width: (width !== null && Number.isInteger(+width)) ? `${ width }px` : width,
				height: (height !== null && Number.isInteger(+height)) ? `${ height }px` : height,
			};
		},
		sizeHint() {
			return [
				(this.sizeStyle.width === null || this.sizeStyle.width === 'initial')  ? 'auto' : this.sizeStyle.width,
				(this.sizeStyle.height === null || this.sizeStyle.height === 'initial')  ? 'auto' : this.sizeStyle.height,
			].join(' x ');
		},
		sizeHintStyle() {
			if(!this.showSize) {
				return null;
			}
			return {
				'--grey-box-size-hint': `'${ this.sizeHint }'`,
			};
		},
		textCenterClass() {
			if(this.name !== null && !this.$slots.default) {
				return 'grey-box--text-content';
			}
		},
		solidClass() {
			return this.solid ? 'grey-box--solid' : null;
		},
		inlineClass() {
			return this.inline ? 'grey-box--inline' : null;
		},
		resizableClass() {
			if(this.resizable) {
				return 'grey-box--resizable';
			}
			if(this.resizableX) {
				return 'grey-box--resizable-x';
			}
			if(this.resizableY) {
				return 'grey-box--resizable-y';
			}
			return null;
		},
	},
}
</script>

<style scoped lang="scss">
.grey-box {
	$color: transparentize(#2c3e50, 0.85);
	position: relative;
	background-color: $color;
	box-shadow: 0 0 0 1px $color inset;
	overflow: hidden;
	&--text-content {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	&--solid {
		background-color: #eaebed;
	}
	&--inline {
		display: inline-block;
	};
	&--inline#{&}--text-content {
		display: inline-flex;
	}
	&--text-content:hover:before {
		display: block;
		content: var(--grey-box-size-hint);
		position: absolute;
		font-size: 12px;
		line-height: 1;
		text-align: right;
		top: 0;
		right: 0;
		left: 0;
		padding: 4px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: transparentize(#2c3e50, 0.4);
	}
	&--resizable {
		resize: both;
		max-width: 100%;
	}
	&--resizable-x {
		resize: horizontal;
		max-width: 100%;
	}
	&--resizable-y {
		resize: vertical;
	}
}
</style>
