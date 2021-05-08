<template>
	<div
		class="layout-align"
		:class="[verticalAlignClass, horizontalAlignClass, indentClass]"
	>
		<div class="layout-align__content">
			<slot />
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	mixins: [
		layoutMixin,
	],
	props: {
		horizontalAlign: {
			type: String,
			default: 'default',
		},
		verticalAlign: {
			type: String,
			default: 'default',
		},
	},
	computed: {
		horizontalAlignClass() {
			if(['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `layout-align--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
		verticalAlignClass() {
			if(['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
				return `layout-align--vertical-align-${ this.verticalAlign }`;
			}
			return null;
		},
	},
};
</script>
