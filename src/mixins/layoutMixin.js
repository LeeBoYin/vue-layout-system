const debugComponentClass = 'layout--debug';
let currentDebugComponent = null;

const startDebugComponent = (element) => {
	if(currentDebugComponent?.isSameNode(element)) {
		return;
	}
	if(currentDebugComponent) {
		currentDebugComponent.classList.remove(debugComponentClass);
	}
	element.classList.add(debugComponentClass);
	currentDebugComponent = element;
};

const endDebugComponent = (element) => {
	if(currentDebugComponent?.isSameNode(element)) {
		currentDebugComponent.classList.remove(debugComponentClass);
		currentDebugComponent = null;
	}
};


export default {
	props: {
		padding: {
			type: [Number, String],
			default: null,
		},
		paddingX: {
			type: [Number, String],
			default: null,
		},
		paddingY: {
			type: [Number, String],
			default: null,
		},
		paddingTop: {
			type: [Number, String],
			default: null,
		},
		paddingBottom: {
			type: [Number, String],
			default: null,
		},
		paddingLeft: {
			type: [Number, String],
			default: null,
		},
		paddingRight: {
			type: [Number, String],
			default: null,
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
		paddingClass() {
			let padding = this.padding;
			let paddingX = this.paddingX;
			let paddingY = this.paddingY;
			let paddingTop = this.paddingTop;
			let paddingBottom = this.paddingBottom;
			let paddingLeft = this.paddingLeft;
			let paddingRight = this.paddingRight;

			// css-styled shorthand
			if(typeof this.padding === 'string') {
				const paddingValues = this.padding.split(' ').filter(v => v.length);
				if(paddingValues.length >= 2 && paddingValues.length <=4) {
					padding = paddingX = paddingY = paddingTop = paddingBottom = paddingLeft = paddingRight = null;
				}
				switch (paddingValues.length) {
					case 2:
						paddingY = paddingValues[0];
						paddingX = paddingValues[1];
						break;
					case 3:
						paddingTop = paddingValues[0];
						paddingX = paddingValues[1];
						paddingBottom = paddingValues[2];
						break;
					case 4:
						paddingTop = paddingValues[0];
						paddingRight = paddingValues[1];
						paddingBottom = paddingValues[2];
						paddingLeft = paddingValues[3];
						break;
				}
			}

			const classList = [];
			if(padding !== null) {
				classList.push(`layout-u-p-${ padding }`);
			}
			if(paddingX !== null) {
				classList.push(`layout-u-px-${ paddingX }`);
			}
			if(paddingY !== null) {
				classList.push(`layout-u-py-${ paddingY }`);
			}
			if(paddingTop !== null) {
				classList.push(`layout-u-pt-${ paddingTop }`);
			}
			if(paddingBottom !== null) {
				classList.push(`layout-u-pb-${ paddingBottom }`);
			}
			if(paddingLeft !== null) {
				classList.push(`layout-u-pl-${ paddingLeft }`);
			}
			if(paddingRight !== null) {
				classList.push(`layout-u-pr-${ paddingRight }`);
			}
			return classList;
		},
	},
	mounted() {
		this.$el.addEventListener('mouseleave', this.onMouseLeave);
		this.$el.addEventListener('mousemove', this.onMouseMove);
	},
	beforeDestroy() {
		this.$el.removeEventListener('mouseleave', this.onMouseLeave);
		this.$el.removeEventListener('mousemove', this.onMouseMove);
	},
	methods: {
		getGapClass(componentClass) {
			let gap = this.gap;
			let gapX = this.gapX;
			let gapY = this.gapY;

			// css-styled shorthand
			if(typeof this.gap === 'string') {
				const gapValues = this.gap.split(' ').filter(v => v.length);
				if(gapValues.length === 2) {
					gap = null;
					gapY = gapValues[0];
					gapX = gapValues[1];
				}
			}

			const classList = [];
			if(gap !== 0) {
				classList.push(`${ componentClass }--gap-${ gap }`);
			}
			if(gapX !== 0) {
				classList.push(`${ componentClass }--gap-x-${ gapX }`);
			}
			if(gapY !== 0) {
				classList.push(`${ componentClass }--gap-y-${ gapY }`);
			}
			return classList;
		},
		getHorizontalAlignClass(componentClass) {
			if(['default', 'stretch', 'left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
				return `${ componentClass }--horizontal-align-${ this.horizontalAlign }`;
			}
			return null;
		},
		getVerticalAlignClass(componentClass) {
			if(['default', 'stretch', 'top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
				return `${ componentClass }--vertical-align-${ this.verticalAlign }`;
			}
			return null;
		},
		onMouseMove(e) {
			if(this.$el.matches('.layout-u-debug div')) {
				e.stopPropagation();
				startDebugComponent(this.$el);
			}
		},
		onMouseLeave() {
			endDebugComponent(this.$el);
		},
	},
};
