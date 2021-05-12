const playgroundProps = {
	padding: {
		propsValue: {
			paddingTop: 5,
			paddingBottom: 5,
			paddingLeft: 5,
			paddingRight: 5,
		},
		propsConfig: {
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
		},
	},
	gap: {
		propsValue: {
			gap: 5,
		},
		propsConfig: {
			gap: {
				type: 'range',
				max: 10,
				min: 0,
				step: 1,
			},
		},
	},
	gapXY: {
		propsValue: {
			gapX: 5,
			gapY: 5,
		},
		propsConfig: {
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
		},
	},
	horizontalAlign: {
		propsValue: {
			horizontalAlign: 'default',
		},
		propsConfig: {
			horizontalAlign: {
				type: 'select',
				options: ['default', 'left', 'center', 'right'],
			},
		},
	},
	verticalAlign: {
		propsValue: {
			verticalAlign: 'default',
		},
		propsConfig: {
			verticalAlign: {
				type: 'select',
				options: ['default', 'top', 'center', 'bottom'],
			},
		},
	},
};

import { assign, map, pick } from 'lodash-es';

export function getDefaultPropsValue(propNames) {
	return assign({}, ...map(pick(playgroundProps, propNames), 'propsValue'));
}

export function getPropsConfig(propNames) {
	return assign({}, ...map(pick(playgroundProps, propNames), 'propsConfig'));
}
