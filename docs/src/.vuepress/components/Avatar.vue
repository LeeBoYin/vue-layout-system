<template>
	<div
		class="avatar"
		:style="{
			'background-image': `url(${ imageUrl })`,
		}"
	>

	</div>
</template>

<script>
import { uniqueId, random } from 'lodash-es';
const randomStart = random(1, 70);
function getImgId() {
	return (randomStart + (+uniqueId() - 1)) % 71;
}
export default {
	data() {
		return {
			imageUrl: `https://i.pravatar.cc/80?img=${ getImgId() }`,
		};
	},
};
</script>

<style lang="scss" scoped>
.avatar {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	background-position: center;
	background-size: cover;
}
</style>
