const spacingRangeConfig = {
	type: 'range',
	max: 10,
	min: 0,
	step: 1,
};

const horizontalAlignSelectConfig = {
	type: 'select',
	options: ['left', 'center', 'right', 'stretch'],
};

const verticalAlignSelectConfig = {
	type: 'select',
	options: ['top', 'center', 'bottom', 'stretch'],
};

const absolutePositionSelectConfig = {
	type: 'select',
	options: [
		'topLeft',
		'top',
		'topRight',
		'right',
		'bottomRight',
		'bottom',
		'bottomLeft',
		'left',
		'center',
	],
};

const playgroundProps = {
	padding: {
		propsValue: {
			paddingTop: 5,
			paddingBottom: 5,
			paddingLeft: 5,
			paddingRight: 5,
		},
		propsConfig: {
			paddingTop: spacingRangeConfig,
			paddingBottom: spacingRangeConfig,
			paddingLeft: spacingRangeConfig,
			paddingRight: spacingRangeConfig,
		},
	},
	gap: {
		propsValue: {
			gap: 5,
		},
		propsConfig: {
			gap: spacingRangeConfig,
		},
	},
	gapXY: {
		propsValue: {
			gapX: 5,
			gapY: 5,
		},
		propsConfig: {
			gapX: spacingRangeConfig,
			gapY: spacingRangeConfig,
		},
	},
	horizontalAlign: {
		propsValue: {
			horizontalAlign: 'stretch',
		},
		propsConfig: {
			horizontalAlign: horizontalAlignSelectConfig,
		},
	},
	verticalAlign: {
		propsValue: {
			verticalAlign: 'top',
		},
		propsConfig: {
			verticalAlign: verticalAlignSelectConfig,
		},
	},
	absoluteSlotName: {
		propsValue: {
			absoluteSlotName: 'topLeft',
		},
		propsConfig: {
			absoluteSlotName: absolutePositionSelectConfig,
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

export {
	spacingRangeConfig,
	horizontalAlignSelectConfig,
	verticalAlignSelectConfig,
	absolutePositionSelectConfig,
};
