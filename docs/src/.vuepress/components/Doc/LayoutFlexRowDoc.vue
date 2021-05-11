<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<LayoutList gap="5">
				<GreyBox>
					<LayoutFlexRow v-bind="propsValue">
						<template slot="left">
							<GreyBox size="m" name="left" />
						</template>
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
						<template slot="right">
							<GreyBox size="m" name="right" />
						</template>
					</LayoutFlexRow>
				</GreyBox>
				<GreyBox>
					<LayoutFlexRow v-bind="propsValue">
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
						<template slot="right">
							<GreyBox size="m" name="right" />
						</template>
					</LayoutFlexRow>
				</GreyBox>
				<GreyBox>
					<LayoutFlexRow v-bind="propsValue">
						<template slot="left">
							<GreyBox size="m" name="left" />
						</template>
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
					</LayoutFlexRow>
				</GreyBox>
				<GreyBox>
					<LayoutFlexRow v-bind="propsValue">
						<template slot="left">
							<GreyBox size="m" name="left" />
						</template>
						<template slot="right">
							<GreyBox size="m" name="right" />
						</template>
					</LayoutFlexRow>
				</GreyBox>
			</LayoutList>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import LayoutList from '@layout-system-components/LayoutList';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexRow,
		LayoutList,
	},
	data() {
		return {
			propsValue: {
				paddingX: 5,
				paddingY: 5,
				gap: 5,
				verticalAlign: 'default',
			},
			propsConfig: {
				paddingX: {
					name: 'padding-x',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				paddingY: {
					name: 'padding-y',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				gap: {
					name: 'gap',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				verticalAlign: {
					name: 'vertical-align',
					type: 'select',
					options: ['default', 'top', 'center', 'bottom'],
				},
			},
		};
	},
}
</script>
