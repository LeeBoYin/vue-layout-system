(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{315:function(t,e,i){},317:function(t,e,i){"use strict";i(315)},318:function(t,e,i){"use strict";i.r(e);i(310),i(320),i(171),i(69);var n={props:{name:{type:[Number,String],default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:String,default:null},solid:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},showSize:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1},resizableX:{type:Boolean,default:!1},resizableY:{type:Boolean,default:!1}},computed:{sizeStyle:function(){var t,e,i={s:{width:60,height:40},m:{width:120,height:80},l:{width:240,height:160}},n=this.width||(null===(t=i[this.size])||void 0===t?void 0:t.width)||null,o=this.height||(null===(e=i[this.size])||void 0===e?void 0:e.height)||null;return{width:null!==n&&Number.isInteger(+n)?"".concat(n,"px"):n,height:null!==o&&Number.isInteger(+o)?"".concat(o,"px"):o}},sizeHint:function(){return[null===this.sizeStyle.width||"initial"===this.sizeStyle.width?"auto":this.sizeStyle.width,null===this.sizeStyle.height||"initial"===this.sizeStyle.height?"auto":this.sizeStyle.height].join(" x ")},sizeHintStyle:function(){return this.showSize?{"--grey-box-size-hint":"'".concat(this.sizeHint,"'")}:null},textCenterClass:function(){if(null!==this.name&&!this.$slots.default)return"grey-box--text-content"},solidClass:function(){return this.solid?"grey-box--solid":null},inlineClass:function(){return this.inline?"grey-box--inline":null},resizableClass:function(){return this.resizable?"grey-box--resizable":this.resizableX?"grey-box--resizable-x":this.resizableY?"grey-box--resizable-y":null}}},o=(i(317),i(45)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"grey-box",class:[t.textCenterClass,t.solidClass,t.inlineClass,t.resizableClass],style:[t.sizeStyle,t.sizeHintStyle]},[t._t("default",[t._v(t._s(t.name))])],2)}),[],!1,null,"355fc4b6",null);e.default=r.exports},319:function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return f})),i.d(e,"d",(function(){return l})),i.d(e,"e",(function(){return a})),i.d(e,"a",(function(){return u}));var n=i(30),o=(i(165),i(999)),r=i(977),s=i(978),l={type:"range",max:10,min:0,step:1},a={type:"select",options:["top","center","bottom","stretch"]},u={type:"select",options:["topLeft","top","topRight","right","bottomRight","bottom","bottomLeft","left","center"]},p={padding:{propsValue:{paddingTop:5,paddingBottom:5,paddingLeft:5,paddingRight:5},propsConfig:{paddingTop:l,paddingBottom:l,paddingLeft:l,paddingRight:l}},gap:{propsValue:{gap:5},propsConfig:{gap:l}},gapXY:{propsValue:{gapX:5,gapY:5},propsConfig:{gapX:l,gapY:l}},horizontalAlign:{propsValue:{horizontalAlign:"stretch"},propsConfig:{horizontalAlign:{type:"select",options:["left","center","right","stretch"]}}},verticalAlign:{propsValue:{verticalAlign:"stretch"},propsConfig:{verticalAlign:a}},absoluteSlotName:{propsValue:{absoluteSlotName:"topLeft"},propsConfig:{absoluteSlotName:u}}};function c(t){return o.a.apply(void 0,[{}].concat(Object(n.a)(Object(r.a)(Object(s.a)(p,t),"propsValue"))))}function f(t){return o.a.apply(void 0,[{}].concat(Object(n.a)(Object(r.a)(Object(s.a)(p,t),"propsConfig"))))}},327:function(t,e,i){var n=i(1),o=i(3),r=i(16),s=i(25).f,l=i(7),a=o((function(){s(1)}));n({target:"Object",stat:!0,forced:!l||a,sham:!l},{getOwnPropertyDescriptor:function(t,e){return s(r(t),e)}})},328:function(t,e,i){var n=i(1),o=i(7);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:i(174)})},331:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(98),i(31),i(28),i(327),i(96),i(97),i(175),i(328),i(173);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},988:function(t,e,i){"use strict";i.r(e);var n=i(331),o=i(318),r=i(329),s=i(322),l=i(319),a={components:{GreyBox:o.default,PropsPlayground:r.default,LayoutListInline:s.default},data:function(){var t=["padding","gapXY","horizontalAlign","verticalAlign"];return{propsValue:Object(n.a)(Object(n.a)({},Object(l.b)(t)),{},{horizontalAlign:"left",wrap:!0}),propsConfig:Object(n.a)(Object(n.a)({},Object(l.c)(t)),{},{horizontalAlign:{type:"select",options:["left","center","right"]},wrap:{type:"boolean"}})}}},u=i(45),p=Object(u.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("PropsPlayground",{attrs:{"props-config":t.propsConfig},model:{value:t.propsValue,callback:function(e){t.propsValue=e},expression:"propsValue"}},[i("GreyBox",{attrs:{inline:""}},[i("LayoutListInline",t._b({},"LayoutListInline",t.propsValue,!1),[i("GreyBox",{attrs:{name:"Lorem",size:"m","show-size":""}}),t._v(" "),i("GreyBox",{attrs:{name:"ipsum",size:"s","show-size":""}}),t._v(" "),i("GreyBox",{attrs:{name:"dolor",size:"m","show-size":""}}),t._v(" "),i("GreyBox",{attrs:{name:"sit",size:"s","show-size":""}}),t._v(" "),i("GreyBox",{attrs:{name:"amet",size:"m","show-size":""}}),t._v(" "),i("GreyBox",{attrs:{name:"elit",size:"s","show-size":""}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);