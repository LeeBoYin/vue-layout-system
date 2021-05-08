<template>
	<div
		class="grey-box"
		:class="[textCenterClass]"
		:style="sizeStyle"
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
		textCenterClass() {
			if(this.name !== null && !this.$slots.default) {
				return 'grey-box--text-center';
			}
		}
	},
}
</script>

<style scoped lang="scss">
.grey-box {
	background-color: rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
	&--text-center {
		display: grid;
		place-content: center;
	}
}
</style>
