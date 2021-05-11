<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<LayoutListInline gap="5">
				<GreyBox height="400" class="layout-u-content-fill-height">
					<LayoutFlexColumn v-bind="propsValue">
						<template slot="top">
							<GreyBox size="m" name="top" />
						</template>
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
						<template slot="bottom">
							<GreyBox size="m" name="bottom" />
						</template>
					</LayoutFlexColumn>
				</GreyBox>
				<GreyBox height="400" class="layout-u-content-fill-height">
					<LayoutFlexColumn v-bind="propsValue">
						<template slot="top">
							<GreyBox size="m" name="top" />
						</template>
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
					</LayoutFlexColumn>
				</GreyBox>
				<GreyBox height="400" class="layout-u-content-fill-height">
					<LayoutFlexColumn v-bind="propsValue">
						<template slot="remain">
							<GreyBox name="remain" />
						</template>
						<template slot="bottom">
							<GreyBox size="m" name="bottom" />
						</template>
					</LayoutFlexColumn>
				</GreyBox>
				<GreyBox height="400" class="layout-u-content-fill-height">
					<LayoutFlexColumn v-bind="propsValue">
						<template slot="top">
							<GreyBox size="m" name="top" />
						</template>
						<template slot="bottom">
							<GreyBox size="m" name="bottom" />
						</template>
					</LayoutFlexColumn>
				</GreyBox>
			</LayoutListInline>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutFlexColumn from '@layout-system-components/LayoutFlexColumn';
import LayoutListInline from '@layout-system-components/LayoutListInline';
export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexColumn,
		LayoutListInline,
	},
	data() {
		return {
			propsValue: {
				paddingX: 5,
				paddingY: 5,
				gap: 5,
				horizontalAlign: 'default',
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
				horizontalAlign: {
					name: 'horizontal-align',
					type: 'select',
					options: ['default', 'left', 'center', 'right'],
				},
			},
		};
	},
}
</script>
