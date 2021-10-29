<template>
	<ShowcaseFrame>
		<div class="layout-u-p-5">
			<GreyBox
				height="400"
				class="layout-u-content-fill-height"
				resizable
			>
				<LayoutFlexColumn is-remain-scrollable>
					<template #top>
						<GreyBox class="layout-u-position-relative">
							<LayoutAlign
								padding="5"
								horizontal-align="center"
							>
								<b>Terms and conditions</b>
							</LayoutAlign>
						</GreyBox>
					</template>
					<template #remain>
						<div class="layout-u-px-8 layout-u-py-4">
							<ol>
								<li v-for="i in 10" :key="i">
									{{ getRandomLorem({ sections: 3 }) }}
								</li>
							</ol>
						</div>
					</template>
					<template #bottom>
						<GreyBox>
							<LayoutAlign
								padding="5"
								horizontal-align="right"
							>
								<LayoutListInline gap="3">
									<button>Cancel</button>
									<button>Agree</button>
								</LayoutListInline>
							</LayoutAlign>
						</GreyBox>
					</template>
				</LayoutFlexColumn>
			</GreyBox>
		</div>
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
