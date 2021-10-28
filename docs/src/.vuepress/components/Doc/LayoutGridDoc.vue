<template>
	<div>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<GreyBox>

				<LayoutGrid v-bind="propsValue">
					<LayoutGridCell
						v-for="(cellSpan, cellSpanIndex) in cellSpanList"
						:span="cellSpan"
					>
						<GreyBox
							width="auto"
						>
							<LayoutFlexRow

								gap="3"
								padding="3"
							>
								<template #remain>
									<LayoutListInline
										vertical-align="center"
										gap="3"
									>
										<button
											:disabled="cellSpan <= 1"
											@click="cellSpan > 1 && decSpan(cellSpanIndex)"
										>-</button>
										<span>{{ cellSpan }}</span>
										<button
											:disabled="cellSpan >= propsValue.columnCount"
											@click="cellSpan < propsValue.columnCount && incSpan(cellSpanIndex)"
										>+</button>
									</LayoutListInline>
								</template>
								<template #right>
									<span
										style="cursor: pointer"
										@click="removeCell(cellSpanIndex)"
									>&times;</span>
								</template>
							</LayoutFlexRow>
						</GreyBox>
					</LayoutGridCell>
					<LayoutGridCell
						:span="1"
					>
						<button
							name="+"
							@click="cellSpanList.push(2)"
						>+</button>
					</LayoutGridCell>
				</LayoutGrid>
			</GreyBox>
		</PropsPlayground>
	</div>
</template>

<script>
import GreyBox from '../GreyBox';
import PropsPlayground from '../PropsPlayground';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutGrid from '@layout-system-components/LayoutGrid';
import LayoutGridCell from '@layout-system-components/LayoutGridCell';
import LayoutGridRowBreak from '@layout-system-components/LayoutGridRowBreak';
import { getDefaultPropsValue, getPropsConfig } from './playgroundProps';

export default {
	components: {
		GreyBox,
		PropsPlayground,
		LayoutFlexRow,
		LayoutListInline,
		LayoutGrid,
		LayoutGridCell,
		LayoutGridRowBreak,
	},
	data() {
		const propsName = ['padding', 'gapXY', 'verticalAlign'];
		return {
			propsValue: {
				...getDefaultPropsValue(propsName),
				columnCount: 12,
			},
			propsConfig: {
				columnCount: {
					type: 'range',
					max: 20,
					min: 4,
					step: 4,
				},
				...getPropsConfig(propsName),
			},
			cellSpanList: [
				3, 3, 3, 3,
				4, 4, 4,
				4, 8,
				6, 6,
			],
		};
	},
	watch: {
		'propsValue.columnCount'() {
			this.cellSpanList.forEach((cellSpan, cellSpanIndex) => {
				if (cellSpan > this.propsValue.columnCount) {
					this.cellSpanList[cellSpanIndex] = this.propsValue.columnCount;
				}
			});
			this.cellSpanList = [...this.cellSpanList];
		},
	},
	methods: {
		incSpan(index) {
			this.cellSpanList[index]++;
			this.cellSpanList = [...this.cellSpanList];
		},
		decSpan(index) {
			this.cellSpanList[index]--;
			this.cellSpanList = [...this.cellSpanList];
		},
		removeCell(index) {
			this.cellSpanList.splice(index, 1);
			this.cellSpanList = [...this.cellSpanList];
		},
	},
}
</script>
