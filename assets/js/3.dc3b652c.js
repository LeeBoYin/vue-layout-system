(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12,16,31,32,49],{310:function(t,e,i){"use strict";var s=i(7),l=i(4),a=i(93),u=i(19),n=i(9),r=i(26),o=i(314),c=i(46),m=i(3),d=i(29),p=i(67).f,f=i(25).f,h=i(8).f,g=i(312).trim,v=l.Number,b=v.prototype,y="Number"==r(d(b)),_=function(t){var e,i,s,l,a,u,n,r,o=c(t,!1);if("string"==typeof o&&o.length>2)if(43===(e=(o=g(o)).charCodeAt(0))||45===e){if(88===(i=o.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:s=2,l=49;break;case 79:case 111:s=8,l=55;break;default:return+o}for(u=(a=o.slice(2)).length,n=0;n<u;n++)if((r=a.charCodeAt(n))<48||r>l)return NaN;return parseInt(a,s)}return+o};if(a("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var C,q=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof q&&(y?m((function(){b.valueOf.call(i)})):"Number"!=r(i))?o(new v(_(e)),i,q):_(e)},x=s?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;x.length>w;w++)n(v,C=x[w])&&!n(q,C)&&h(q,C,f(v,C));q.prototype=b,b.constructor=q,u(l,"Number",q)}},311:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},312:function(t,e,i){var s=i(24),l="["+i(311)+"]",a=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),n=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(u,"")),i}};t.exports={start:n(1),end:n(2),trim:n(3)}},314:function(t,e,i){var s=i(5),l=i(68);t.exports=function(t,e,i){var a,u;return l&&"function"==typeof(a=e.constructor)&&a!==i&&s(u=a.prototype)&&u!==i.prototype&&l(t,u),t}},315:function(t,e,i){},316:function(t,e,i){"use strict";var s=i(168),l=i(166),a=i(6),u=i(24),n=i(94),r=i(169),o=i(15),c=i(170),m=i(95),d=i(167).UNSUPPORTED_Y,p=[].push,f=Math.min;s("split",2,(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=String(u(this)),a=void 0===i?4294967295:i>>>0;if(0===a)return[];if(void 0===t)return[s];if(!l(t))return e.call(s,t,a);for(var n,r,o,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=new RegExp(t.source,d+"g");(n=m.call(h,s))&&!((r=h.lastIndex)>f&&(c.push(s.slice(f,n.index)),n.length>1&&n.index<s.length&&p.apply(c,n.slice(1)),o=n[0].length,f=r,c.length>=a));)h.lastIndex===n.index&&h.lastIndex++;return f===s.length?!o&&h.test("")||c.push(""):c.push(s.slice(f)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var l=u(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,l,i):s.call(String(l),e,i)},function(t,l){var u=i(s,t,this,l,s!==e);if(u.done)return u.value;var m=a(t),p=String(this),h=n(m,RegExp),g=m.unicode,v=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(d?"g":"y"),b=new h(d?"^(?:"+m.source+")":m,v),y=void 0===l?4294967295:l>>>0;if(0===y)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var _=0,C=0,q=[];C<p.length;){b.lastIndex=d?0:C;var x,w=c(b,d?p.slice(C):p);if(null===w||(x=f(o(b.lastIndex+(d?C:0)),p.length))===_)C=r(p,C,g);else{if(q.push(p.slice(_,C)),q.length===y)return q;for(var N=1;N<=w.length-1;N++)if(q.push(w[N]),q.length===y)return q;C=_=x}}return q.push(p.slice(_)),q}]}),d)},317:function(t,e,i){"use strict";i(315)},318:function(t,e,i){"use strict";i.r(e);i(310),i(320),i(171),i(69);var s={props:{name:{type:[Number,String],default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:String,default:null},solid:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},showSize:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1},resizableX:{type:Boolean,default:!1},resizableY:{type:Boolean,default:!1}},computed:{sizeStyle:function(){var t,e,i={s:{width:60,height:40},m:{width:120,height:80},l:{width:240,height:160}},s=this.width||(null===(t=i[this.size])||void 0===t?void 0:t.width)||null,l=this.height||(null===(e=i[this.size])||void 0===e?void 0:e.height)||null;return{width:null!==s&&Number.isInteger(+s)?"".concat(s,"px"):s,height:null!==l&&Number.isInteger(+l)?"".concat(l,"px"):l}},sizeHint:function(){return[null===this.sizeStyle.width||"initial"===this.sizeStyle.width?"auto":this.sizeStyle.width,null===this.sizeStyle.height||"initial"===this.sizeStyle.height?"auto":this.sizeStyle.height].join(" x ")},sizeHintStyle:function(){return this.showSize?{"--grey-box-size-hint":"'".concat(this.sizeHint,"'")}:null},textCenterClass:function(){if(null!==this.name&&!this.$slots.default)return"grey-box--text-content"},solidClass:function(){return this.solid?"grey-box--solid":null},inlineClass:function(){return this.inline?"grey-box--inline":null},resizableClass:function(){return this.resizable?"grey-box--resizable":this.resizableX?"grey-box--resizable-x":this.resizableY?"grey-box--resizable-y":null}}},l=(i(317),i(45)),a=Object(l.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"grey-box",class:[t.textCenterClass,t.solidClass,t.inlineClass,t.resizableClass],style:[t.sizeStyle,t.sizeHintStyle]},[t._t("default",[t._v(t._s(t.name))])],2)}),[],!1,null,"355fc4b6",null);e.default=a.exports},320:function(t,e,i){i(1)({target:"Number",stat:!0},{isInteger:i(344)})},344:function(t,e,i){var s=i(5),l=Math.floor;t.exports=function(t){return!s(t)&&isFinite(t)&&l(t)===t}},346:function(t,e,i){"use strict";var s=i(351),l=i(334),a=i(373),u=i(362),n=i(340),r=i(369),o=i(370),c=i(371),m=i(330),d=i(322),p=i(318),f=i(449),h=(i(171),["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Nulla aliquet enim tortor at","Sed faucibus turpis in eu mi","Ultrices neque ornare aenean euismod elementum","Ac turpis egestas integer eget aliquet nibh praesent","Amet nulla facilisi morbi tempus iaculis urna","Enim ut tellus elementum sagittis vitae et leo duis","Etiam tempor orci eu lobortis elementum nibh","Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat","Accumsan lacus vel facilisis volutpat","Justo laoreet sit amet cursus sit amet","Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum","Mauris rhoncus aenean vel elit scelerisque","Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus","Mi sit amet mauris commodo quis imperdiet massa","Duis ut diam quam nulla porttitor massa id","Rhoncus urna neque viverra justo nec ultrices","Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam","Egestas purus viverra accumsan in","Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum","In fermentum posuere urna nec tincidunt praesent","Sem integer vitae justo eget","Fames ac turpis egestas integer eget aliquet","Eget sit amet tellus cras adipiscing enim eu turpis","Bibendum at varius vel pharetra","At lectus urna duis convallis convallis tellus","Urna condimentum mattis pellentesque id nibh","In iaculis nunc sed augue lacus viverra vitae congue","Volutpat blandit aliquam etiam erat","Sagittis nisl rhoncus mattis rhoncus urna neque","Porta lorem mollis aliquam ut porttitor leo","Semper auctor neque vitae tempus quam pellentesque nec nam aliquam","Pellentesque adipiscing commodo elit at imperdiet","Elementum sagittis vitae et leo duis ut diam quam nulla","Malesuada bibendum arcu vitae elementum curabitur vitae nunc","Elementum integer enim neque volutpat ac tincidunt vitae","Sed viverra tellus in hac habitasse platea","Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna","Duis ut diam quam nulla porttitor","Eget nunc lobortis mattis aliquam faucibus purus","Viverra mauris in aliquam sem","Aliquet enim tortor at auctor urna nunc","Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae","Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras","Mauris augue neque gravida in fermentum et sollicitudin","Ultricies lacus sed turpis tincidunt id aliquet risus feugiat","Amet aliquam id diam maecenas ultricies mi eget mauris","Nunc scelerisque viverra mauris in aliquam sem","In vitae turpis massa sed elementum tempus egestas sed sed","Netus et malesuada fames ac turpis egestas sed tempus","Venenatis urna cursus eget nunc scelerisque viverra mauris","Tellus pellentesque eu tincidunt tortor aliquam nulla","Massa tempor nec feugiat nisl pretium fusce id velit","Cursus metus aliquam eleifend mi in nulla posuere","Adipiscing enim eu turpis egestas pretium aenean pharetra magna","In massa tempor nec feugiat nisl pretium fusce","Risus sed vulputate odio ut enim blandit","Tempus iaculis urna id volutpat lacus laoreet non","Vel pharetra vel turpis nunc eget lorem","Diam vulputate ut pharetra sit amet","Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere","Ut ornare lectus sit amet","Quam adipiscing vitae proin sagittis nisl","Posuere lorem ipsum dolor sit amet","Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et","Id nibh tortor id aliquet lectus proin nibh nisl condimentum","Vitae auctor eu augue ut lectus arcu bibendum at varius","Cras pulvinar mattis nunc sed blandit","Integer enim neque volutpat ac tincidunt","Pharetra massa massa ultricies mi quis hendrerit dolor magna eget","Ac ut consequat semper viverra","Placerat vestibulum lectus mauris ultrices eros in cursus","Platea dictumst quisque sagittis purus sit","Nec feugiat nisl pretium fusce id velit","Facilisis volutpat est velit egestas dui","In ornare quam viverra orci"]);e.a={components:{LayoutAbsolute:s.default,LayoutAlign:l.default,LayoutColumns:a.default,LayoutFlexColumn:u.default,LayoutFlexRow:n.default,LayoutGrid:r.default,LayoutGridCell:o.default,LayoutGridRowBreak:c.default,LayoutList:m.default,LayoutListInline:d.default,GreyBox:p.default,ShowcaseFrame:f.default},methods:{getRandomLorem:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.sections,i=void 0===e?1:e,s=[],l=0;l<i;l++)s.push(h[Math.floor(Math.random()*h.length)]);return s.join(". ")}}}},351:function(t,e,i){"use strict";i.r(e);var s={name:"LayoutAbsolute",mixins:[i(313).a]},l=i(45),a=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-absolute",class:[t.paddingClass]},[i("div",{staticClass:"layout-absolute__wrapper"},[t.$slots.topLeft?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--top-left"},[t._t("topLeft")],2):t._e(),t._v(" "),t.$slots.top?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--top"},[t._t("top")],2):t._e(),t._v(" "),t.$slots.topRight?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--top-right"},[t._t("topRight")],2):t._e(),t._v(" "),t.$slots.right?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--right"},[t._t("right")],2):t._e(),t._v(" "),t.$slots.bottomRight?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--bottom-right"},[t._t("bottomRight")],2):t._e(),t._v(" "),t.$slots.bottom?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--bottom"},[t._t("bottom")],2):t._e(),t._v(" "),t.$slots.bottomLeft?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--bottom-left"},[t._t("bottomLeft")],2):t._e(),t._v(" "),t.$slots.left?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--left"},[t._t("left")],2):t._e(),t._v(" "),t.$slots.center?i("div",{staticClass:"layout-absolute__cell layout-absolute__cell--center"},[t._t("center")],2):t._e()])])}),[],!1,null,null,null);e.default=a.exports},359:function(t,e,i){},369:function(t,e,i){"use strict";i.r(e);i(310);var s={name:"LayoutGrid",mixins:[i(313).a],props:{columnCount:{type:[Number,String],default:12}}},l=i(45),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout-grid",class:[this.getGapClass("layout-grid"),this.getVerticalAlignClass("layout-grid"),this.paddingClass],style:{"--column-count":this.columnCount}},[this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},370:function(t,e,i){"use strict";i.r(e);i(310);var s={name:"LayoutGridCell",props:{span:{type:[Number,String],default:1}}},l=i(45),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout-grid__cell",style:{"--span":this.span}},[this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},371:function(t,e,i){"use strict";i.r(e);var s={name:"LayoutGridRowBreak"},l=i(45),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout-grid__row-break"})}),[],!1,null,null,null);e.default=a.exports},373:function(t,e,i){"use strict";i.r(e);var s=i(30),l=(i(310),i(320),i(70),i(28),i(313)),a={name:"LayoutColumns",props:{contentMinWidth:{type:[Number,String],default:null},columnCount:{type:[Number,String],default:null},flowDirection:{type:String,default:"row"}},mixins:[l.a],computed:{flowDirectionClass:function(){return"column"===this.flowDirection?"layout-columns--flow-direction-column":"layout-columns--flow-direction-row"},cssVar:function(){return{"--layout-columns-content-min-width":this.columnCount?0:this.contentMinWidth&&Number.isInteger(+this.contentMinWidth)?this.contentMinWidth+"px":this.contentMinWidth,"--layout-columns-column-count":this.columnCount}}},render:function(t){return t("div",{class:["layout-columns",this.getGapClass("layout-columns"),this.getHorizontalAlignClass("layout-columns"),this.getVerticalAlignClass("layout-columns"),this.flowDirectionClass,this.paddingClass],style:[this.cssVar]},"row"===this.flowDirection?this.$slots.default:[t("div",{class:"".concat("layout-columns","__wrapper")},Object(s.a)(this.$slots.default.filter((function(t){return t.tag})).map((function(e){return t("div",{class:"".concat("layout-columns","__item")},[e])}))))])}},u=i(45),n=Object(u.a)(a,void 0,void 0,!1,null,null,null);e.default=n.exports},388:function(t,e,i){"use strict";i(359)},449:function(t,e,i){"use strict";i.r(e);var s=i(334),l=i(330),a=i(322),u=i(368),n=i(329),r={components:{LayoutAlign:s.default,LayoutList:l.default,LayoutListInline:a.default,ToggleSwitch:u.default,PropsPlayground:n.default},data:function(){return{propsValue:{debug:!1},propsConfig:{debug:{title:"Highlight layouts",type:"switch"}}}}},o=(i(388),i(45)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"showcase-frame"},[i("LayoutList",{attrs:{"padding-y":"5",gap:"5"}},[i("LayoutAlign",{attrs:{"horizontal-align":"right"}},[i("LayoutListInline",{attrs:{gap:"3","vertical-align":"center"}},[i("label",{staticClass:"showcase-frame__switch-label",on:{click:function(e){t.propsValue.debug=!t.propsValue.debug}}},[t._v("\n\t\t\t\t\tHighlight layouts\n\t\t\t\t")]),t._v(" "),i("ToggleSwitch",{model:{value:t.propsValue.debug,callback:function(e){t.$set(t.propsValue,"debug",e)},expression:"propsValue.debug"}})],1)],1),t._v(" "),i("PropsPlayground",[i("div",{class:{"layout-u-debug":t.propsValue.debug}},[t._t("default")],2)])],1)],1)}),[],!1,null,"cdadf1ca",null);e.default=c.exports}}]);