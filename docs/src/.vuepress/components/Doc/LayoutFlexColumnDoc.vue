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
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexColumn,
		LayoutListInline,
	},
	data() {
		const propsName = ['padding', 'gap', 'horizontalAlign'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
