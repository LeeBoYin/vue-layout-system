import LayoutAbsolute from './components/LayoutAbsolute.vue';
import LayoutAlign from './components/LayoutAlign.vue';
import LayoutFlexColumn from './components/LayoutFlexColumn.vue';
import LayoutFlexRow from './components/LayoutFlexRow.vue';
import LayoutList from './components/LayoutList.vue';
import LayoutListInline from './components/LayoutListInline.vue';
import './scss/main.scss';

const VueLayoutSystem = {
    LayoutAbsolute,
    LayoutAlign,
    LayoutFlexColumn,
    LayoutFlexRow,
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
    LayoutFlexColumn,
    LayoutFlexRow,
    LayoutList,
    LayoutListInline,
};
