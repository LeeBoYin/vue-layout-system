import LayoutAbsolute from '@layout-system-components/LayoutAbsolute';
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutColumns from '@layout-system-components/LayoutColumns';
import LayoutFlexColumn from '@layout-system-components/LayoutFlexColumn';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import LayoutGrid from '@layout-system-components/LayoutGrid';
import LayoutGridCell from '@layout-system-components/LayoutGridCell';
import LayoutGridRowBreak from '@layout-system-components/LayoutGridRowBreak';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import GreyBox from '../../GreyBox';
import ShowcaseFrame from './ShowcaseFrame';
import { getRandomLorem } from "../loremIpsm";
export default {
	components: {
		LayoutAbsolute,
		LayoutAlign,
		LayoutColumns,
		LayoutFlexColumn,
		LayoutFlexRow,
		LayoutGrid,
		LayoutGridCell,
		LayoutGridRowBreak,
		LayoutList,
		LayoutListInline,
		GreyBox,
		ShowcaseFrame,
	},
	methods: {
		getRandomLorem,
	},
};
