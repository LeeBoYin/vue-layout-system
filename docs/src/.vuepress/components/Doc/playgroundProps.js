export const paddingPropsValue = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
};

export const paddingPropsConfig = {
	paddingTop: {
		type: 'range',
			max: 10,
			min: 0,
			step: 1,
	},
	paddingBottom: {
		type: 'range',
			max: 10,
			min: 0,
			step: 1,
	},
	paddingLeft: {
		type: 'range',
			max: 10,
			min: 0,
			step: 1,
	},
	paddingRight: {
		type: 'range',
			max: 10,
			min: 0,
			step: 1,
	},
};

export const gapValue = {
	gap: 5,
};

export const gapConfig = {
	gap: {
		type: 'range',
		max: 10,
		min: 0,
		step: 1,
	},
};

export const gapXYValue = {
	gapX: 5,
	gapY: 5,
};

export const gapXYConfig = {
	gapX: {
		type: 'range',
		max: 10,
		min: 0,
		step: 1,
	},
	gapY: {
		type: 'range',
		max: 10,
		min: 0,
		step: 1,
	},
};

export const horizontalAlignConfig = {
	horizontalAlign: {
		type: 'select',
		options: ['default', 'left', 'center', 'right'],
	},
};

export const verticalAlignConfig = {
	verticalAlign: {
		type: 'select',
		options: ['default', 'top', 'center', 'bottom'],
	},
};
