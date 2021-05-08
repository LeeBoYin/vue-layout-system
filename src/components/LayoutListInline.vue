<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	mixins: [
		layoutMixin,
	],
	props: {
		gap: {
			type: [Number, String],
			default: 0,
		},
		gapX: {
			type: [Number, String],
			default: 0,
		},
		gapY: {
			type: [Number, String],
			default: 0,
		},
		horizontalAlign: {
			type: String,
			default: 'default',
		},
		verticalAlign: {
			type: String,
			default: 'default',
		},
		wrap: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		gapClass() {
			const classList = [];
			if(Number.isInteger(+this.gap) && +this.gap > 0) {
				classList.push(`layout-list-inline--gap-${ this.gap }`);
			}
			if(Number.isInteger(+this.gapX) && +this.gapX > 0) {
				classList.push(`layout-list-inline--gap-x-${ this.gapX }`);
			}
			if(Number.isInteger(+this.gapY) && +this.gapY > 0) {
				classList.push(`layout-list-inline--gap-y-${ this.gapY }`);
			}
			return classList;
		},
		horizontalAlignClass() {
			if(['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `layout-list-inline--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
		verticalAlignClass() {
			if(['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
				return `layout-list-inline--vertical-align-${ this.verticalAlign }`;
			}
			return null;
		},
		nowrapClass() {
			return this.wrap ? null : 'layout-list-inline--nowrap';
		},
	},
	render(createElement) {
		return createElement(
			'div',
			{
				class: [
					'layout-list-inline',
					this.verticalAlignClass,
					this.gapClass,
					this.horizontalAlignClass,
					this.nowrapClass,
					this.indentClass,
				],
			},
			[createElement(
				'div',
				{
					class: 'layout-list-inline__wrapper',
				},
				// 將每一個 slot children node 包在 div.layout-list-inline__item 裡面
				this.$slots.default.filter(node => node.tag).map(node => createElement(
					'div',
					{
						class: 'layout-list-inline__item',
					},
					[node]
				))
			)]
		);
	},
};
</script>
