<template>
	<ShowcaseFrame>
		<LayoutGrid
			column-count="4"
			gap="5"
			padding="5"
		>
			<LayoutGridCell span="3">
				<LayoutList
					gap="5"
				>
					<GreyBox v-for="i in 5" :key="i">
						<LayoutGrid
							column-count="3"
							gap="5"
						>
							<LayoutGridCell span="1">
								<div>
									<img
										:src="`https://picsum.photos/300/300?grayscale&random=${ i }`"
										style="height: auto"
									>
								</div>
							</LayoutGridCell>
							<LayoutGridCell span="2">
								<LayoutFlexColumn
									padding="3 5 3 0"
									gap="5"
								>
									<template #top>
										{{ getRandomLorem({ sections: 5 }) }}...
									</template>
									<template #bottom>
										<LayoutAlign horizontal-align="right">
											<button>read more</button>
										</LayoutAlign>
									</template>
								</LayoutFlexColumn>
							</LayoutGridCell>
						</LayoutGrid>
					</GreyBox>
				</LayoutList>
			</LayoutGridCell>
			<LayoutGridCell span="1">
				<LayoutFlexColumn>
					<template #top>
						<LayoutList
							gap="5"
						>
							<GreyBox
								name="Categories"
								size="m"
								width="initial"
							/>
							<GreyBox
								name="Comments"
								size="m"
								width="initial"
							/>
							<GreyBox
								name="Links"
								size="m"
								width="initial"
							/>
							<GreyBox
								name="Advertisement"
								size="m"
								width="initial"
							/>
						</LayoutList>
					</template>
					<template #bottom>
						<GreyBox
							name="About me"
							size="m"
							width="initial"
						/>
					</template>
				</LayoutFlexColumn>
			</LayoutGridCell>
		</LayoutGrid>
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
