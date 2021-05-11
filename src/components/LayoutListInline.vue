<script>
import layoutMixin from '../mixins/layoutMixin';
export default {
	mixins: [
		layoutMixin,
	],
	props: {
		wrap: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		getNowrapClass(componentClass) {
			return this.wrap ? null : `${ componentClass }--nowrap`;
		},
	},
	render(createElement) {
		const componentClass = 'layout-list-inline';
		return createElement(
			'div',
			{
				class: [
					componentClass,
					this.getGapClass(componentClass),
					this.getHorizontalAlignClass(componentClass),
					this.getVerticalAlignClass(componentClass),
					this.getNowrapClass(componentClass),
					this.paddingClass,
				],
			},
			[createElement(
				'div',
				{
					class: `${ componentClass }__wrapper`,
				},
				// 將每一個 slot children node 包在 &__item 裡面
				this.$slots.default.filter(node => node.tag).map(node => createElement(
					'div',
					{
						class: `${ componentClass }__item`,
					},
					[node]
				))
			)]
		);
	},
};
</script>
