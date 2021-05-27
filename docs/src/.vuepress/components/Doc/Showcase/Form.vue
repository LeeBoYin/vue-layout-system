<template>
	<ShowcaseFrame>
		<LayoutList
			padding="8 5"
			gap="10"
			class="form"
		>
			<LayoutColumns
				content-min-width="300"
				:gap="columnsGap"
			>
				<LayoutList
					v-for="i in 5"
					:key="i"
					:gap="formControlGapY"
				>
					<b>field {{ i }}</b>
					<input type="text" />
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
			</LayoutColumns>
			<hr>
			<LayoutColumns
				content-min-width="300"
				:gap="columnsGap"
			>
				<LayoutList :gap="formControlGapY">
					<b>select</b>
					<select>
						<option
							v-for="i in 3"
							:key="i"
							:value="i"
						>
							option {{ i }}
						</option>
					</select>
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>date</b>
					<input type="date" />
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>time</b>
					<input type="time" />
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>radio</b>
					<LayoutListInline gap="3 5">
						<LayoutListInline
							v-for="i in 5"
							:key="i"
							gap="2"
							vertical-align="top"
						>
							<input :id="`radio${ i }`" type="radio" name="form-radio" :value="i" />
							<label :for="`radio${ i }`">option {{ i }}</label>
						</LayoutListInline>
					</LayoutListInline>

					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>checkbox</b>
					<LayoutListInline gap="3 5">
						<LayoutListInline
							v-for="i in 5"
							:key="i"
							gap="2"
							vertical-align="top"
						>
							<input :id="`checkbox${ i }`" type="checkbox" name="form-checkbox" :value="i" />
							<label :for="`checkbox${ i }`">option {{ i }}</label>
						</LayoutListInline>
					</LayoutListInline>

					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>range</b>
					<input type="range" min="0" max="10" step="1" value="5" />
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
				<LayoutList :gap="formControlGapY">
					<b>color</b>
					<input type="color" />
					<small class="text-grey">
						{{ getRandomLorem() }}
					</small>
				</LayoutList>
			</LayoutColumns>
			<hr>
			<LayoutAlign horizontal-align="right">
				<LayoutListInline gap="5">
					<button>Cancel</button>
					<button>Submit</button>
				</LayoutListInline>
			</LayoutAlign>
		</LayoutList>
	</ShowcaseFrame>
</template>

<script>
import showcaseMixin from './showcaseMixin';
export default {
	mixins: [
		showcaseMixin,
	],
	data() {
		return {
			columnsGap: '8 5',
			formControlGapY: 3,
		};
	},
}
</script>

<style lang="scss" scoped>
.form {
	hr {
		margin: 0;
	}
}
</style>
