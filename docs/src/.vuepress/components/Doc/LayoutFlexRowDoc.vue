<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<LayoutList gap="5" padding-y="5">
				<LayoutList gap="3">
					<small class="layout-u-pl-3">
						left + remain + right
					</small>
					<GreyBox>
						<LayoutFlexRow v-bind="propsValue">
							<template slot="left">
								<GreyBox size="m" name="left" show-size />
							</template>
							<template slot="remain">
								<GreyBox name="remain" show-size />
							</template>
							<template slot="right">
								<GreyBox size="m" name="right" show-size />
							</template>
						</LayoutFlexRow>
					</GreyBox>
				</LayoutList>
				<LayoutList gap="3">
					<small class="layout-u-pl-3">
						left + remain
					</small>
					<GreyBox>
						<LayoutFlexRow v-bind="propsValue">
							<template slot="left">
								<GreyBox size="m" name="left" show-size />
							</template>
							<template slot="remain">
								<GreyBox name="remain" show-size />
							</template>
						</LayoutFlexRow>
					</GreyBox>
				</LayoutList>
				<LayoutList gap="3">
					<small class="layout-u-pl-3">
						 remain + right
					</small>
					<GreyBox>
						<LayoutFlexRow v-bind="propsValue">
							<template slot="remain">
								<GreyBox name="remain" show-size />
							</template>
							<template slot="right">
								<GreyBox size="m" name="right" show-size />
							</template>
						</LayoutFlexRow>
					</GreyBox>
				</LayoutList>
				<LayoutList gap="3">
					<small class="layout-u-pl-3">
						left + right
					</small>
					<GreyBox>
						<LayoutFlexRow v-bind="propsValue">
							<template slot="left">
								<GreyBox size="m" name="left" show-size />
							</template>
							<template slot="right">
								<GreyBox size="m" name="right" show-size />
							</template>
						</LayoutFlexRow>
					</GreyBox>
				</LayoutList>
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
		const propsName = ['padding', 'gap', 'verticalAlign', 'isRemainScrollable'];
		return {
			propsValue: getDefaultPropsValue(propsName),
			propsConfig: getPropsConfig(propsName),
		};
	},
}
</script>
