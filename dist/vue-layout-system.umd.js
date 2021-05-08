(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-layout-system"] = factory();
	else
		root["vue-layout-system"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "b458");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6645":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7c9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    indent: {
      type: [Number, String],
      "default": 0
    },
    indentX: {
      type: [Number, String],
      "default": 0
    },
    indentY: {
      type: [Number, String],
      "default": 0
    }
  },
  computed: {
    indentClass: function indentClass() {
      var classList = [];

      if (Number.isInteger(+this.indent) && +this.indent > 0) {
        classList.push("layout-u-p-".concat(this.indent));
      }

      if (Number.isInteger(+this.indentX) && +this.indentX > 0) {
        classList.push("layout-u-px-".concat(this.indentX));
      }

      if (Number.isInteger(+this.indentY) && +this.indentY > 0) {
        classList.push("layout-u-py-".concat(this.indentY));
      }

      return classList;
    }
  }
});

/***/ }),

/***/ "908f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5eeffcd4-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutFlexColumn.vue?vue&type=template&id=2cd2fba4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-flex-column",class:[_vm.horizontalAlignClass, _vm.gapClass, _vm.indentClass]},[(_vm.$slots.top)?_c('div',{staticClass:"layout-flex-column__top"},[_vm._t("top")],2):_vm._e(),_c('div',{staticClass:"layout-flex-column__remain layout-u-content-fill-height"},[_vm._t("remain")],2),(_vm.$slots.bottom)?_c('div',{staticClass:"layout-flex-column__bottom"},[_vm._t("bottom")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LayoutFlexColumn.vue?vue&type=template&id=2cd2fba4&

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutFlexColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LayoutFlexColumnvue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]],
  props: {
    gap: {
      type: [Number, String],
      "default": 0
    },
    horizontalAlign: {
      type: String,
      "default": 'default'
    }
  },
  computed: {
    gapClass: function gapClass() {
      return Number.isInteger(+this.gap) && +this.gap > 0 ? "layout-flex-column--gap-".concat(this.gap) : null;
    },
    horizontalAlignClass: function horizontalAlignClass() {
      if (['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
        return "layout-flex-column--horizontal-align-".concat(this.horizontalAlign);
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/LayoutFlexColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutFlexColumnvue_type_script_lang_js_ = (LayoutFlexColumnvue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutFlexColumn.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutFlexColumnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutFlexColumn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "9655":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5eeffcd4-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutFlexRow.vue?vue&type=template&id=7f2b9598&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-flex-row",class:[_vm.verticalAlignClass, _vm.gapClass, _vm.indentClass]},[(_vm.$slots.left)?_c('div',{staticClass:"layout-flex-row__left",class:{
			'layout-u-content-fill-height': !_vm.verticalAlignClass,
		}},[_vm._t("left")],2):_vm._e(),_c('div',{staticClass:"layout-flex-row__remain",class:{
			'layout-u-content-fill-height': !_vm.verticalAlignClass,
		}},[_vm._t("remain")],2),(_vm.$slots.right)?_c('div',{staticClass:"layout-flex-row__right",class:{
			'layout-u-content-fill-height': !_vm.verticalAlignClass,
		}},[_vm._t("right")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LayoutFlexRow.vue?vue&type=template&id=7f2b9598&

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutFlexRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LayoutFlexRowvue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]],
  props: {
    gap: {
      type: [Number, String],
      "default": 0
    },
    verticalAlign: {
      type: String,
      "default": 'default'
    }
  },
  computed: {
    gapClass: function gapClass() {
      return Number.isInteger(+this.gap) && +this.gap > 0 ? "layout-flex-row--gap-".concat(this.gap) : null;
    },
    verticalAlignClass: function verticalAlignClass() {
      if (['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
        return "layout-flex-row--vertical-align-".concat(this.verticalAlign);
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/LayoutFlexRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutFlexRowvue_type_script_lang_js_ = (LayoutFlexRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutFlexRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutFlexRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutFlexRow = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a3f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutListInline.vue?vue&type=script&lang=js&

/* harmony default export */ var LayoutListInlinevue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]],
  props: {
    gap: {
      type: [Number, String],
      "default": 0
    },
    gapX: {
      type: [Number, String],
      "default": 0
    },
    gapY: {
      type: [Number, String],
      "default": 0
    },
    horizontalAlign: {
      type: String,
      "default": 'default'
    },
    verticalAlign: {
      type: String,
      "default": 'default'
    },
    wrap: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    gapClass: function gapClass() {
      var classList = [];

      if (Number.isInteger(+this.gap) && +this.gap > 0) {
        classList.push("layout-list-inline--gap-".concat(this.gap));
      }

      if (Number.isInteger(+this.gapX) && +this.gapX > 0) {
        classList.push("layout-list-inline--gap-x-".concat(this.gapX));
      }

      if (Number.isInteger(+this.gapY) && +this.gapY > 0) {
        classList.push("layout-list-inline--gap-y-".concat(this.gapY));
      }

      return classList;
    },
    horizontalAlignClass: function horizontalAlignClass() {
      if (['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
        return "layout-list-inline--horizontal-align-".concat(this.horizontalAlign);
      }

      return null;
    },
    verticalAlignClass: function verticalAlignClass() {
      if (['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
        return "layout-list-inline--vertical-align-".concat(this.verticalAlign);
      }

      return null;
    },
    nowrapClass: function nowrapClass() {
      return this.wrap ? null : 'layout-list-inline--nowrap';
    }
  },
  render: function render(createElement) {
    return createElement('div', {
      "class": ['layout-list-inline', this.verticalAlignClass, this.gapClass, this.horizontalAlignClass, this.nowrapClass, this.indentClass]
    }, [createElement('div', {
      "class": 'layout-list-inline__wrapper'
    }, // 將每一個 slot children node 包在 div.layout-list-inline__item 裡面
    this.$slots["default"].filter(function (node) {
      return node.tag;
    }).map(function (node) {
      return createElement('div', {
        "class": 'layout-list-inline__item'
      }, [node]);
    }))]);
  }
});
// CONCATENATED MODULE: ./src/components/LayoutListInline.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutListInlinevue_type_script_lang_js_ = (LayoutListInlinevue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutListInline.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutListInlinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutListInline = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "b107":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b458":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ src_0["h" /* install */]; });
__webpack_require__.d(__webpack_exports__, "LayoutAbsolute", function() { return /* reexport */ src_0["a" /* LayoutAbsolute */]; });
__webpack_require__.d(__webpack_exports__, "LayoutAlign", function() { return /* reexport */ src_0["b" /* LayoutAlign */]; });
__webpack_require__.d(__webpack_exports__, "LayoutFlexColumn", function() { return /* reexport */ src_0["c" /* LayoutFlexColumn */]; });
__webpack_require__.d(__webpack_exports__, "LayoutFlexRow", function() { return /* reexport */ src_0["d" /* LayoutFlexRow */]; });
__webpack_require__.d(__webpack_exports__, "LayoutList", function() { return /* reexport */ src_0["e" /* LayoutList */]; });
__webpack_require__.d(__webpack_exports__, "LayoutListInline", function() { return /* reexport */ src_0["f" /* LayoutListInline */]; });

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("6645")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src_0 = __webpack_require__("b635");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0["g" /* default */]);



/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return install; });
/* harmony import */ var _components_LayoutAbsolute_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("efce");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components_LayoutAbsolute_vue__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_LayoutAlign_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("caf1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components_LayoutAlign_vue__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _components_LayoutFlexColumn_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("908f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _components_LayoutFlexColumn_vue__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _components_LayoutFlexRow_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9655");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _components_LayoutFlexRow_vue__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _components_LayoutList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d5e6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _components_LayoutList_vue__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _components_LayoutListInline_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a3f1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _components_LayoutListInline_vue__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("b107");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_6__);







var VueLayoutSystem = {
  LayoutAbsolute: _components_LayoutAbsolute_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  LayoutAlign: _components_LayoutAlign_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  LayoutFlexColumn: _components_LayoutFlexColumn_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  LayoutFlexRow: _components_LayoutFlexRow_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  LayoutList: _components_LayoutList_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  LayoutListInline: _components_LayoutListInline_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
};
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueLayoutSystem).forEach(function (name) {
    Vue.component(name, VueLayoutSystem[name]);
  });
}
var plugin = {
  install: install
};
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["g"] = (VueLayoutSystem);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("da16")))

/***/ }),

/***/ "caf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5eeffcd4-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutAlign.vue?vue&type=template&id=6a3181c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-align",class:[_vm.verticalAlignClass, _vm.horizontalAlignClass, _vm.indentClass]},[_c('div',{staticClass:"layout-align__content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LayoutAlign.vue?vue&type=template&id=6a3181c2&

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutAlign.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LayoutAlignvue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]],
  props: {
    horizontalAlign: {
      type: String,
      "default": 'default'
    },
    verticalAlign: {
      type: String,
      "default": 'default'
    }
  },
  computed: {
    horizontalAlignClass: function horizontalAlignClass() {
      if (['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
        return "layout-align--horizontal-align-".concat(this.horizontalAlign);
      }

      return null;
    },
    verticalAlignClass: function verticalAlignClass() {
      if (['top', 'center', 'bottom'].indexOf(this.verticalAlign) !== -1) {
        return "layout-align--vertical-align-".concat(this.verticalAlign);
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/LayoutAlign.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutAlignvue_type_script_lang_js_ = (LayoutAlignvue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutAlign.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutAlignvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutAlign = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "d5e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5eeffcd4-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutList.vue?vue&type=template&id=08061b7b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-list",class:[_vm.gapClass, _vm.horizontalAlignClass, _vm.indentClass]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LayoutList.vue?vue&type=template&id=08061b7b&

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LayoutListvue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]],
  props: {
    gap: {
      type: [Number, String],
      "default": 0
    },
    horizontalAlign: {
      type: String,
      "default": 'default'
    }
  },
  computed: {
    gapClass: function gapClass() {
      return Number.isInteger(+this.gap) && +this.gap > 0 ? "layout-list--gap-".concat(this.gap) : null;
    },
    horizontalAlignClass: function horizontalAlignClass() {
      if (['left', 'center', 'right'].indexOf(this.horizontalAlign) !== -1) {
        return "layout-list--horizontal-align-".concat(this.horizontalAlign);
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/LayoutList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutListvue_type_script_lang_js_ = (LayoutListvue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "da16":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "efce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5eeffcd4-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutAbsolute.vue?vue&type=template&id=c4614692&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-absolute",class:[_vm.indentClass]},[_c('div',{staticClass:"layout-absolute__wrapper"},[(_vm.$slots.topLeft)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--top-left"},[_vm._t("topLeft")],2):_vm._e(),(_vm.$slots.top)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--top"},[_vm._t("top")],2):_vm._e(),(_vm.$slots.topRight)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--top-right"},[_vm._t("topRight")],2):_vm._e(),(_vm.$slots.right)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--right"},[_vm._t("right")],2):_vm._e(),(_vm.$slots.bottomRight)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--bottom-right"},[_vm._t("bottomRight")],2):_vm._e(),(_vm.$slots.bottom)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--bottom"},[_vm._t("bottom")],2):_vm._e(),(_vm.$slots.bottomLeft)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--bottom-left"},[_vm._t("bottomLeft")],2):_vm._e(),(_vm.$slots.left)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--left"},[_vm._t("left")],2):_vm._e(),(_vm.$slots.center)?_c('div',{staticClass:"layout-absolute__cell layout-absolute__cell--center"},[_vm._t("center")],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LayoutAbsolute.vue?vue&type=template&id=c4614692&

// EXTERNAL MODULE: ./src/mixins/layoutMixin.js
var layoutMixin = __webpack_require__("7c9a");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LayoutAbsolute.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LayoutAbsolutevue_type_script_lang_js_ = ({
  mixins: [layoutMixin["a" /* default */]]
});
// CONCATENATED MODULE: ./src/components/LayoutAbsolute.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutAbsolutevue_type_script_lang_js_ = (LayoutAbsolutevue_type_script_lang_js_); 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("ff08");

// CONCATENATED MODULE: ./src/components/LayoutAbsolute.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LayoutAbsolutevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutAbsolute = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "ff08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-layout-system.umd.js.map