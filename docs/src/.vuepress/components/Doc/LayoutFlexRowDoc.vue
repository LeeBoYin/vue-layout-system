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
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexRow,
		LayoutList,
	},
	data() {
		const propsName = ['padding', 'gap', 'verticalAlign'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
