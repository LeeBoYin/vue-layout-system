(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{315:function(t,e,i){},317:function(t,e,i){"use strict";i(315)},318:function(t,e,i){"use strict";i.r(e);i(310),i(320),i(171),i(69);var l={props:{name:{type:[Number,String],default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:String,default:null},solid:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},showSize:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1},resizableX:{type:Boolean,default:!1},resizableY:{type:Boolean,default:!1}},computed:{sizeStyle:function(){var t,e,i={s:{width:60,height:40},m:{width:120,height:80},l:{width:240,height:160}},l=this.width||(null===(t=i[this.size])||void 0===t?void 0:t.width)||null,a=this.height||(null===(e=i[this.size])||void 0===e?void 0:e.height)||null;return{width:null!==l&&Number.isInteger(+l)?"".concat(l,"px"):l,height:null!==a&&Number.isInteger(+a)?"".concat(a,"px"):a}},sizeHint:function(){return[null===this.sizeStyle.width||"initial"===this.sizeStyle.width?"auto":this.sizeStyle.width,null===this.sizeStyle.height||"initial"===this.sizeStyle.height?"auto":this.sizeStyle.height].join(" x ")},sizeHintStyle:function(){return this.showSize?{"--grey-box-size-hint":"'".concat(this.sizeHint,"'")}:null},textCenterClass:function(){if(null!==this.name&&!this.$slots.default)return"grey-box--text-content"},solidClass:function(){return this.solid?"grey-box--solid":null},inlineClass:function(){return this.inline?"grey-box--inline":null},resizableClass:function(){return this.resizable?"grey-box--resizable":this.resizableX?"grey-box--resizable-x":this.resizableY?"grey-box--resizable-y":null}}},a=(i(317),i(45)),o=Object(a.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"grey-box",class:[t.textCenterClass,t.solidClass,t.inlineClass,t.resizableClass],style:[t.sizeStyle,t.sizeHintStyle]},[t._t("default",[t._v(t._s(t.name))])],2)}),[],!1,null,"355fc4b6",null);e.default=o.exports},319:function(t,e,i){"use strict";i.d(e,"b",(function(){return h})),i.d(e,"c",(function(){return g})),i.d(e,"d",(function(){return n})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return u}));var l=i(30),a=(i(165),i(999)),o=i(977),s=i(978),n={type:"range",max:10,min:0,step:1},r={type:"select",options:["top","center","bottom","stretch"]},u={type:"select",options:["topLeft","top","topRight","right","bottomRight","bottom","bottomLeft","left","center"]},p={padding:{propsValue:{paddingTop:5,paddingBottom:5,paddingLeft:5,paddingRight:5},propsConfig:{paddingTop:n,paddingBottom:n,paddingLeft:n,paddingRight:n}},gap:{propsValue:{gap:5},propsConfig:{gap:n}},gapXY:{propsValue:{gapX:5,gapY:5},propsConfig:{gapX:n,gapY:n}},horizontalAlign:{propsValue:{horizontalAlign:"stretch"},propsConfig:{horizontalAlign:{type:"select",options:["left","center","right","stretch"]}}},verticalAlign:{propsValue:{verticalAlign:"stretch"},propsConfig:{verticalAlign:r}},absoluteSlotName:{propsValue:{absoluteSlotName:"topLeft"},propsConfig:{absoluteSlotName:u}}};function h(t){return a.a.apply(void 0,[{}].concat(Object(l.a)(Object(o.a)(Object(s.a)(p,t),"propsValue"))))}function g(t){return a.a.apply(void 0,[{}].concat(Object(l.a)(Object(o.a)(Object(s.a)(p,t),"propsConfig"))))}},985:function(t,e,i){"use strict";i.r(e);var l=i(318),a=i(329),o=i(340),s=i(330),n=i(319),r={components:{GreyBox:l.default,PropsPlayground:a.default,LayoutFlexRow:o.default,LayoutList:s.default},data:function(){var t=["padding","gap","verticalAlign"];return{propsValue:Object(n.b)(t),propsConfig:Object(n.c)(t)}}},u=i(45),p=Object(u.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("PropsPlayground",{attrs:{"props-config":t.propsConfig},model:{value:t.propsValue,callback:function(e){t.propsValue=e},expression:"propsValue"}},[i("LayoutList",{attrs:{gap:"5","padding-y":"5"}},[i("LayoutList",{attrs:{gap:"3"}},[i("small",{staticClass:"layout-u-pl-3"},[t._v("\n\t\t\t\t\tleft + remain + right\n\t\t\t\t")]),t._v(" "),i("GreyBox",[i("LayoutFlexRow",t._b({},"LayoutFlexRow",t.propsValue,!1),[i("template",{slot:"left"},[i("GreyBox",{attrs:{size:"m",name:"left","show-size":""}})],1),t._v(" "),i("template",{slot:"remain"},[i("GreyBox",{attrs:{name:"remain","show-size":""}})],1),t._v(" "),i("template",{slot:"right"},[i("GreyBox",{attrs:{size:"m",name:"right","show-size":""}})],1)],2)],1)],1),t._v(" "),i("LayoutList",{attrs:{gap:"3"}},[i("small",{staticClass:"layout-u-pl-3"},[t._v("\n\t\t\t\t\tleft + remain\n\t\t\t\t")]),t._v(" "),i("GreyBox",[i("LayoutFlexRow",t._b({},"LayoutFlexRow",t.propsValue,!1),[i("template",{slot:"left"},[i("GreyBox",{attrs:{size:"m",name:"left","show-size":""}})],1),t._v(" "),i("template",{slot:"remain"},[i("GreyBox",{attrs:{name:"remain","show-size":""}})],1)],2)],1)],1),t._v(" "),i("LayoutList",{attrs:{gap:"3"}},[i("small",{staticClass:"layout-u-pl-3"},[t._v("\n\t\t\t\t\t remain + right\n\t\t\t\t")]),t._v(" "),i("GreyBox",[i("LayoutFlexRow",t._b({},"LayoutFlexRow",t.propsValue,!1),[i("template",{slot:"remain"},[i("GreyBox",{attrs:{name:"remain","show-size":""}})],1),t._v(" "),i("template",{slot:"right"},[i("GreyBox",{attrs:{size:"m",name:"right","show-size":""}})],1)],2)],1)],1),t._v(" "),i("LayoutList",{attrs:{gap:"3"}},[i("small",{staticClass:"layout-u-pl-3"},[t._v("\n\t\t\t\t\tleft + right\n\t\t\t\t")]),t._v(" "),i("GreyBox",[i("LayoutFlexRow",t._b({},"LayoutFlexRow",t.propsValue,!1),[i("template",{slot:"left"},[i("GreyBox",{attrs:{size:"m",name:"left","show-size":""}})],1),t._v(" "),i("template",{slot:"right"},[i("GreyBox",{attrs:{size:"m",name:"right","show-size":""}})],1)],2)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);