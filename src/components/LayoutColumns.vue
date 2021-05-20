<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	props: {
		contentMinWidth: {
			type: [Number, String],
			default: null,
		},
		columnCount: {
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
	computed: {
		flowDirectionClass() {
			if(this.flowDirection === 'column') {
				return 'layout-columns--flow-direction-column';
			}
			return 'layout-columns--flow-direction-row';
		},
		cssVar() {
			return {
				'--layout-columns-content-min-width': this.columnCount ? 0 :
					this.contentMinWidth && Number.isInteger(+this.contentMinWidth)
						? this.contentMinWidth + 'px'
						: this.contentMinWidth,
				'--layout-columns-column-count': this.columnCount,
			};
		},
	},
	render(createElement) {
		const componentClass = 'layout-columns';
		return createElement(
			'div',
			{
				class: [
					componentClass,
					this.getGapClass(componentClass),
					this.getHorizontalAlignClass(componentClass),
					this.getVerticalAlignClass(componentClass),
					this.flowDirectionClass,
					this.paddingClass,
				],
				style: [
					this.cssVar,
				],
			},
			this.flowDirection === 'row' ? this.$slots.default :
			[createElement(
				'div',
				{
					class: `${ componentClass }__wrapper`,
				},
				// 將每一個 slot children node 包在 &__item 裡面
				[
					...this.$slots.default.filter(node => node.tag).map(node => createElement(
						'div',
						{
							class: `${ componentClass }__item`,
						},
						[node]
					)),
				]
			)]
		);
	},
};
</script>
