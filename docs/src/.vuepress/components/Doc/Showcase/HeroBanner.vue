<template>
	<ShowcaseFrame>
		<GreyBox
			class="hero-banner"
			:style="{
				'background-image': 'url(https://picsum.photos/id/100/1200/400?grayscale)',
			}"
		>
			<LayoutAbsolute padding-x="8">
				<template #left>
					<LayoutList gap="6" horizontal-align="left">
						<LayoutList gap="3" horizontal-align="left">
							<div style="font-size: 1.2em; font-weight: bold">
								Vue Layout System
							</div>
							<div>
								Vue components that solve daily layout problems
							</div>
							<LayoutListInline gap="3">
								<span>Consistent</span>
								<span>·</span>
								<span>Predictable</span>
								<span>·</span>
								<span>Stable</span>
							</LayoutListInline>
						</LayoutList>
						<button>Get Started</button>
					</LayoutList>
				</template>
			</LayoutAbsolute>
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

<style lang="scss" scoped>
.hero-banner {
	height: 400px;
	background-position: center;
	background-size: cover;
}
</style>
