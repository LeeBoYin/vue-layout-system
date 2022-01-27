<script>
import layoutMixin from '../mixins/layoutMixin';
import LayoutList from './LayoutList';
import LayoutListInline from './LayoutListInline';
export default {
	name: 'LayoutRows',
	props: {
		rowCount: {
			type: [Number, String],
			default: null,
		},
		flowDirection: {
			type: String,
			default: 'row',
		},
	},
	mixins: [
		layoutMixin,
	],
	render(createElement) {
		const componentClass = 'layout-rows';
		const contentNodes = this.$slots.default.filter(vnode => vnode.tag); // filter out undefined tag
		const rowNum = Math.min(+this.rowCount, contentNodes.length);
		const rowLength = Math.ceil(contentNodes.length / rowNum);
		let rowNodesList;

		if (this.flowDirection === 'row') {
			rowNodesList = Array.apply(null, Array(rowNum)).map((v, rowIndex) => {
				return contentNodes.slice(rowIndex * rowLength, (rowIndex + 1) * rowLength);
			}).filter(rowNodes => rowNodes.length);
		} else if (this.flowDirection === 'column') {
			rowNodesList = Array.apply(null, Array(rowNum)).map((v, rowIndex) => {
				const nodes = [];
				let nodeIndex = 0;
				while (nodeIndex < rowLength && contentNodes[rowIndex + (rowNum * nodeIndex)]) {
					nodes.push(contentNodes[rowIndex + (rowNum * nodeIndex)]);
					nodeIndex++;
				}
				return nodes;
			});
		}

		return createElement(
			'LayoutList',
			{
				props: {
					gap: this.gapY,
					horizontalAlign: this.horizontalAlign,
				},
				class: [
					componentClass,
					this.getGapClass(componentClass),
					this.getHorizontalAlignClass(componentClass),
					this.getVerticalAlignClass(componentClass),
					this.paddingClass,
				],
			},
			rowNodesList.map(rowNodes => {
				return createElement(
					'LayoutListInline',
					{
						props: {
							wrap: false,
							gapX: this.gapX,
							verticalAlign: this.verticalAlign,
						},
					},
					rowNodes,
				);
			}),
		);
	},
}
</script>

