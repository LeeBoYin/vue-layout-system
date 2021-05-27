import LayoutAbsolute from '@layout-system-components/LayoutAbsolute';
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutColumns from '@layout-system-components/LayoutColumns';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutFlexColumn from '@layout-system-components/LayoutFlexColumn';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import GreyBox from '../../GreyBox';
import ShowcaseFrame from './ShowcaseFrame';
import { getRandomLorem } from "../loremIpsm";
export default {
	components: {
		LayoutAbsolute,
		LayoutAlign,
		LayoutColumns,
		LayoutList,
		LayoutListInline,
		LayoutFlexColumn,
		LayoutFlexRow,
		GreyBox,
		ShowcaseFrame,
	},
	methods: {
		getRandomLorem,
	},
};
