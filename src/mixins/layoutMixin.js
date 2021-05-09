export default {
	props: {
		indent: {
			type: [Number, String],
			default: 0,
		},
		indentX: {
			type: [Number, String],
			default: 0,
		},
		indentY: {
			type: [Number, String],
			default: 0,
		},
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
	},
	computed: {
		indentClass() {
			const classList = [];
			if(Number.isInteger(+this.indent) && +this.indent > 0) {
				classList.push(`layout-u-p-${ this.indent }`);
			}
			if(Number.isInteger(+this.indentX) && +this.indentX > 0) {
				classList.push(`layout-u-px-${ this.indentX }`);
			}
			if(Number.isInteger(+this.indentY) && +this.indentY > 0) {
				classList.push(`layout-u-py-${ this.indentY }`);
			}
			return classList;
		},
	},
	methods: {
		getGapClass(componentClass) {
			const classList = [];
			if(this.gap !== 0) {
				classList.push(`${ componentClass }--gap-${ this.gap }`);
			}
			if(this.gapX !== 0) {
				classList.push(`${ componentClass }--gap-x-${ this.gapX }`);
			}
			if(this.gapY !== 0) {
				classList.push(`${ componentClass }--gap-y-${ this.gapY }`);
			}
			return classList;
		},
		getHorizontalAlignClass(componentClass) {
			if(['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `${ componentClass }--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
		getVerticalAlignClass(componentClass) {
			if(['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
				return `${ componentClass }--vertical-align-${ this.verticalAlign }`;
			}
			return null;
		},
	},
};
