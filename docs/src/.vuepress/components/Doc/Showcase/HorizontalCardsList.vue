<template>
	<ShowcaseFrame>
		<LayoutList padding="5" gap="5">
			<GreyBox
				v-for="i in 3"
				:key="i"
				class="horizontal-card"
			>
				<LayoutFlexRow
					vertical-align="stretch"
				>
					<template #left>
						<div
							class="horizontal-card__img layout-u-position-relative"
							:style="{
								'background-image': `url(https://picsum.photos/240/180?grayscale&random=${ i })`
							}"
						>
							<LayoutAbsolute padding-y="4">
								<template #topLeft>
									<GreyBox name="Best Choice" solid />
								</template>
							</LayoutAbsolute>
						</div>
					</template>
					<template #remain>
						<LayoutFlexColumn padding="4" gap="5">
							<template #top>
								<LayoutFlexRow gap="6" vertical-align="top">
									<template #remain>
										<LayoutList gap="3" horizontal-align="left">
											<LayoutListInline gap="3">
												<GreyBox>Hot</GreyBox>
												<GreyBox>New</GreyBox>
												<GreyBox>Refundable</GreyBox>
											</LayoutListInline>
											<b>card {{ i }}</b>
											<div class="horizontal-card__desc">
												{{ getRandomLorem({ sections: 2 }) }}
											</div>
										</LayoutList>
									</template>
									<template #right>
										<button>❤</button>
									</template>
								</LayoutFlexRow>
							</template>
							<template #bottom>
								<LayoutFlexRow gap="5" vertical-align="bottom">
									<template #left>
										<LayoutListInline gap="3" vertical-align="center">
											<LayoutListInline gap="1">
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>☆</span>
											</LayoutListInline>
											<span>4.0</span>
											<span>(10k+)</span>
										</LayoutListInline>
									</template>
									<template #right>
										<LayoutList gap="2" horizontal-align="right">
											<GreyBox>20% off</GreyBox>
											<LayoutListInline gap="2">
												<small style="text-decoration: line-through">$300</small>
												<span>$240</span>
											</LayoutListInline>
										</LayoutList>
									</template>
								</LayoutFlexRow>
							</template>
						</LayoutFlexColumn>
					</template>
				</LayoutFlexRow>
			</GreyBox>
		</LayoutList>
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

<style lang="scss" scoped>
.horizontal-card {
	&__img {
		width: 240px;
		height: 180px;
		background-position: center;
		background-size: cover;
	}
	&__desc {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	@media (max-width: 959px) {
		&__img {
			display: none;
		}
	}
}
</style>
