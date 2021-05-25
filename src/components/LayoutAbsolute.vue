<template>
	<div
		class="layout-absolute"
		:class="[paddingClass]"
	>
		<div class="layout-absolute__wrapper">
			<div
				v-if="$slots.topLeft"
				class="layout-absolute__cell layout-absolute__cell--top-left"
			>
				<slot name="topLeft"></slot>
			</div>
			<div
				v-if="$slots.top"
				class="layout-absolute__cell layout-absolute__cell--top"
			>
				<slot name="top"></slot>
			</div>
			<div
				v-if="$slots.topRight"
				class="layout-absolute__cell layout-absolute__cell--top-right"
			>
				<slot name="topRight"></slot>
			</div>
			<div
				v-if="$slots.right"
				class="layout-absolute__cell layout-absolute__cell--right"
			>
				<slot name="right"></slot>
			</div>
			<div
				v-if="$slots.bottomRight"
				class="layout-absolute__cell layout-absolute__cell--bottom-right"
			>
				<slot name="bottomRight"></slot>
			</div>
			<div
				v-if="$slots.bottom"
				class="layout-absolute__cell layout-absolute__cell--bottom"
			>
				<slot name="bottom"></slot>
			</div>
			<div
				v-if="$slots.bottomLeft"
				class="layout-absolute__cell layout-absolute__cell--bottom-left"
			>
				<slot name="bottomLeft"></slot>
			</div>
			<div
				v-if="$slots.left"
				class="layout-absolute__cell layout-absolute__cell--left"
			>
				<slot name="left"></slot>
			</div>
			<div
				v-if="$slots.center"
				class="layout-absolute__cell layout-absolute__cell--center"
			>
				<slot name="center"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	name: 'LayoutAbsolute',
	mixins: [
		layoutMixin,
	],
};
</script>
