<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox height="400" class="layout-u-position-relative">
				<LayoutAbsolute v-bind="propsValue">
					<template slot="topLeft">
						<GreyBox size="m" name="topLeft" />
					</template>
					<template slot="top">
						<GreyBox size="m" name="top" />
					</template>
					<template slot="topRight">
						<GreyBox size="m" name="topRight" />
					</template>
					<template slot="right">
						<GreyBox size="m" name="right" />
					</template>
					<template slot="bottomRight">
						<GreyBox size="m" name="bottomRight" />
					</template>
					<template slot="bottom">
						<GreyBox size="m" name="bottom" />
					</template>
					<template slot="bottomLeft">
						<GreyBox size="m" name="bottomLeft" />
					</template>
					<template slot="left">
						<GreyBox size="m" name="left" />
					</template>
					<template slot="center">
						<GreyBox size="m" name="center" />
					</template>
				</LayoutAbsolute>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutAbsolute from '@layout-system-components/LayoutAbsolute';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutAbsolute,
	},
	data() {
		return {
			propsValue: {
				indentX: 5,
				indentY: 5,
			},
			propsConfig: {
				indentX: {
					name: 'indent-x',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				indentY: {
					name: 'indent-y',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
			},
		};
	},
}
</script>
