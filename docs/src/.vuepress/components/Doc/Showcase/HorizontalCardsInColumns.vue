<template>
	<ShowcaseFrame>
		<LayoutColumns content-min-width="300" padding="5" gap="5">
			<GreyBox v-for="i in 12" :key="i">
				<LayoutFlexRow padding="4" gap="4" vertical-align="center">
					<template #left>
						<img
							:src="`https://picsum.photos/80/80?grayscale&random=${ i }`"
							style="width: 80px; height: 80px;"
						>
					</template>
					<template #remain>
						<LayoutList gap="3">
							<b>title - card {{ i }}</b>
							<div>description</div>
						</LayoutList>
					</template>
				</LayoutFlexRow>
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
