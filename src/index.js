import LayoutAbsolute from './components/LayoutAbsolute.vue';
import LayoutAlign from './components/LayoutAlign.vue';
import LayoutColumns from './components/LayoutColumns.vue';
import LayoutFlexColumn from './components/LayoutFlexColumn.vue';
import LayoutFlexRow from './components/LayoutFlexRow.vue';
import LayoutGrid from './components/LayoutGrid.vue';
import LayoutGridCell from './components/LayoutGridCell.vue';
import LayoutGridRowBreak from './components/LayoutGridRowBreak.vue';
import LayoutList from './components/LayoutList.vue';
import LayoutListInline from './components/LayoutListInline.vue';
import './scss/main.scss';

const VueLayoutSystem = {
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
};

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueLayoutSystem).forEach(name => {
        Vue.component(name, VueLayoutSystem[name]);
    });
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default VueLayoutSystem;
export {
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
};
