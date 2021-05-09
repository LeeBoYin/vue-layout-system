<template>
	<div
		class="layout-flex-row"
		:class="[
			getVerticalAlignClass('layout-flex-row'),
			getGapClass('layout-flex-row'),
			indentClass
		]"
	>
		<div
			v-if="$slots.left"
			class="layout-flex-row__left"
			:class="{
				'layout-u-content-fill-height': !getVerticalAlignClass('layout-flex-row'),
			}"
		>
			<slot name="left"></slot>
		</div>
		<div
			class="layout-flex-row__remain"
			:class="{
				'layout-u-content-fill-height': !getVerticalAlignClass('layout-flex-row'),
			}"
		>
			<slot name="remain"></slot>
		</div>
		<div
			v-if="$slots.right"
			class="layout-flex-row__right"
			:class="{
				'layout-u-content-fill-height': !getVerticalAlignClass('layout-flex-row'),
			}"
		>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	mixins: [
		layoutMixin,
	],
};
</script>
