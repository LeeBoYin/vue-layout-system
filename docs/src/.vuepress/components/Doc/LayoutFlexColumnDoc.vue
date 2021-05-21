<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<LayoutListInline gap="5" padding-y="3">
				<LayoutList
					gap="3"
					horizontal-align="center"
				>
					<small>
						top + remain + bottom
					</small>
					<GreyBox
						height="420"
						class="layout-u-content-fill-height"
					>
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
				</LayoutList>
				<LayoutList
					gap="3"
					horizontal-align="center"
				>
					<small>
						top + remain
					</small>
					<GreyBox
						height="420"
						class="layout-u-content-fill-height"
					>
						<LayoutFlexColumn v-bind="propsValue">
							<template slot="top">
								<GreyBox size="m" name="top" />
							</template>
							<template slot="remain">
								<GreyBox name="remain" />
							</template>
						</LayoutFlexColumn>
					</GreyBox>
				</LayoutList>
				<LayoutList
					gap="3"
					horizontal-align="center"
				>
					<small>
						remain + bottom
					</small>
					<GreyBox
						height="420"
						class="layout-u-content-fill-height"
					>
						<LayoutFlexColumn v-bind="propsValue">
							<template slot="remain">
								<GreyBox name="remain" />
							</template>
							<template slot="bottom">
								<GreyBox size="m" name="bottom" />
							</template>
						</LayoutFlexColumn>
					</GreyBox>
				</LayoutList>
				<LayoutList
					gap="3"
					horizontal-align="center"
				>
					<small>
						top + bottom
					</small>
					<GreyBox
						height="420"
						class="layout-u-content-fill-height"
					>
						<LayoutFlexColumn v-bind="propsValue">
							<template slot="top">
								<GreyBox size="m" name="top" />
							</template>
							<template slot="bottom">
								<GreyBox size="m" name="bottom" />
							</template>
						</LayoutFlexColumn>
					</GreyBox>
				</LayoutList>
			</LayoutListInline>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutFlexColumn from '@layout-system-components/LayoutFlexColumn';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexColumn,
		LayoutList,
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
