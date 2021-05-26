<template>
	<ShowcaseFrame title="Horizontal Card">
		<GreyBox>
			<LayoutFlexRow>
				<template #left>
					<div class="layout-u-position-relative">
						<img
							src="https://picsum.photos/240/180?grayscale"
							style="width: 240px; height: 180px; vertical-align: middle;"
						>
						<LayoutAbsolute padding-y="4">
							<template #topLeft>
								<GreyBox name="Best Choice" solid />
							</template>
						</LayoutAbsolute>
					</div>
				</template>
				<template #remain>
					<LayoutFlexColumn padding="4">
						<template #top>
							<LayoutFlexRow gap="5" vertical-align="top">
								<template #left>
									<LayoutList gap="3" horizontal-align="left">
										<LayoutListInline gap="3">
											<GreyBox>Hot</GreyBox>
											<GreyBox>New</GreyBox>
											<GreyBox>Refundable</GreyBox>
										</LayoutListInline>
										<div>title</div>
										<div>description</div>
									</LayoutList>
								</template>
								<template #right>
									<GreyBox class="layout-u-p-2">
										❤
									</GreyBox>
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
