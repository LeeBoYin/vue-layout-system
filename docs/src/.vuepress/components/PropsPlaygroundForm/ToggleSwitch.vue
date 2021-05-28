<!-- https://www.w3schools.com/howto/howto_css_switch.asp -->
<template>
	<label class="switch">
		<input
			type="checkbox"
			:checked="value"
			@change="$emit('input', $event.target.checked)"
		>
		<span class="slider round"></span>
	</label>
</template>

<script>
export default {
	props: {
		value: Boolean,
	},
};
</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
$width: 36px;
$height: 20px;
$padding: 2px;
$dot-size: $height - 2 * $padding;
$active-color: #3eaf7c;
$inactive-color: transparentize(#2c3e50, 0.5);
.switch {
	position: relative;
	display: inline-block;
	width: $width;
	height: $height;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
	margin: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: $inactive-color;
	-webkit-transition: .1s;
	transition: .1s;
}

.slider:before {
	position: absolute;
	content: "";
	height: $dot-size;
	width: $dot-size;
	left: $padding;
	bottom: $padding;
	background-color: white;
	-webkit-transition: .1s;
	transition: .1s;
}

input:checked + .slider {
	background-color: $active-color;
}

input:focus + .slider {
	box-shadow: 0 0 1px $active-color;
}

input:checked + .slider:before {
	transform: translateX($width - 2 * $padding - $dot-size);
}

/* Rounded sliders */
.slider.round {
	border-radius: $height / 2;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
