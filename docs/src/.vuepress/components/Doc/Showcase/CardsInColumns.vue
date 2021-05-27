<template>
	<ShowcaseFrame>
		<LayoutColumns content-min-width="200" padding="5" gap="5">
			<GreyBox
				v-for="i in 8"
				:key="i"
				class="layout-u-content-fill-height"
			>
				<LayoutFlexColumn>
					<template #top>
						<img :src="`https://picsum.photos/400/240?grayscale&random=${ i }`">
					</template>
					<template #remain>
						<LayoutFlexColumn padding="4" gap="6">
							<template #top>
								<LayoutList gap="3" horizontal-align="left">
									<b>title - card {{ i }}</b>
									<div>{{ getRandomLorem() }}</div>
								</LayoutList>
							</template>
							<template #bottom>
								<LayoutAlign horizontal-align="right">
									<GreyBox name="Learn more" />
								</LayoutAlign>
							</template>
						</LayoutFlexColumn>
					</template>
				</LayoutFlexColumn>
			</GreyBox>
		</LayoutColumns>
	</ShowcaseFrame>
</template>

<script>
import showcaseMixin from './showcaseMixin';
export default {
	mixins: [
		showcaseMixin,
	],
}
</script>
