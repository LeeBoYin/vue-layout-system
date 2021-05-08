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
};
