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

<style scoped>
/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 30px;
	height: 16px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: .4s;
	transition: .4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 12px;
	width: 12px;
	left: 2px;
	bottom: 2px;
	background-color: white;
	-webkit-transition: .4s;
	transition: .4s;
}

input:checked + .slider {
	background-color: #3eaf7c;
}

input:focus + .slider {
	box-shadow: 0 0 1px #3eaf7c;
}

input:checked + .slider:before {
	transform: translateX(14px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
