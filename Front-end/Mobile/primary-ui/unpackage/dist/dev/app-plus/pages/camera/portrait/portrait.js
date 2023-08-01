"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=1&lang=css */ 4).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDO0FBQy9HLDJEQUEyRCxtQkFBTyxDQUFDLGtEQUEyQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2Nzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/App.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-line-1": {
    "": {
      "lines": [
        1,
        0,
        0,
        17
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        17
      ],
      "overflow": [
        "hidden",
        0,
        0,
        17
      ],
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".u-line-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        18
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        18
      ],
      "overflow": [
        "hidden",
        0,
        0,
        18
      ],
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".u-line-3": {
    "": {
      "lines": [
        3,
        0,
        0,
        19
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        19
      ],
      "overflow": [
        "hidden",
        0,
        0,
        19
      ],
      "flex": [
        1,
        0,
        0,
        19
      ]
    }
  },
  ".u-line-4": {
    "": {
      "lines": [
        4,
        0,
        0,
        20
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".u-line-5": {
    "": {
      "lines": [
        5,
        0,
        0,
        21
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        21
      ],
      "overflow": [
        "hidden",
        0,
        0,
        21
      ],
      "flex": [
        1,
        0,
        0,
        21
      ]
    }
  },
  ".u-border": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        22
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        22
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        22
      ]
    }
  },
  ".u-border-top": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        23
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        23
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        23
      ]
    }
  },
  ".u-border-left": {
    "": {
      "borderLeftWidth": [
        "0.5",
        1,
        0,
        24
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        24
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        24
      ]
    }
  },
  ".u-border-right": {
    "": {
      "borderRightWidth": [
        "0.5",
        1,
        0,
        25
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        25
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        25
      ]
    }
  },
  ".u-border-bottom": {
    "": {
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        26
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        26
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        26
      ]
    }
  },
  ".u-border-top-bottom": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        27
      ],
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        27
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        27
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        27
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        27
      ]
    }
  },
  ".u-reset-button": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        28
      ],
      "paddingRight": [
        0,
        0,
        0,
        28
      ],
      "paddingBottom": [
        0,
        0,
        0,
        28
      ],
      "paddingLeft": [
        0,
        0,
        0,
        28
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        28
      ],
      "borderWidth": [
        0,
        0,
        0,
        28
      ]
    }
  },
  ".u-hover-class": {
    "": {
      "opacity": [
        0.7,
        0,
        0,
        29
      ]
    }
  },
  ".u-primary-light": {
    "": {
      "color": [
        "#ecf5ff",
        0,
        0,
        30
      ]
    }
  },
  ".u-warning-light": {
    "": {
      "color": [
        "#fdf6ec",
        0,
        0,
        31
      ]
    }
  },
  ".u-success-light": {
    "": {
      "color": [
        "#f5fff0",
        0,
        0,
        32
      ]
    }
  },
  ".u-error-light": {
    "": {
      "color": [
        "#fef0f0",
        0,
        0,
        33
      ]
    }
  },
  ".u-info-light": {
    "": {
      "color": [
        "#f4f4f5",
        0,
        0,
        34
      ]
    }
  },
  ".u-primary-light-bg": {
    "": {
      "backgroundColor": [
        "#ecf5ff",
        0,
        0,
        35
      ]
    }
  },
  ".u-warning-light-bg": {
    "": {
      "backgroundColor": [
        "#fdf6ec",
        0,
        0,
        36
      ]
    }
  },
  ".u-success-light-bg": {
    "": {
      "backgroundColor": [
        "#f5fff0",
        0,
        0,
        37
      ]
    }
  },
  ".u-error-light-bg": {
    "": {
      "backgroundColor": [
        "#fef0f0",
        0,
        0,
        38
      ]
    }
  },
  ".u-info-light-bg": {
    "": {
      "backgroundColor": [
        "#f4f4f5",
        0,
        0,
        39
      ]
    }
  },
  ".u-primary-dark": {
    "": {
      "color": [
        "#398ade",
        0,
        0,
        40
      ]
    }
  },
  ".u-warning-dark": {
    "": {
      "color": [
        "#f1a532",
        0,
        0,
        41
      ]
    }
  },
  ".u-success-dark": {
    "": {
      "color": [
        "#53c21d",
        0,
        0,
        42
      ]
    }
  },
  ".u-error-dark": {
    "": {
      "color": [
        "#e45656",
        0,
        0,
        43
      ]
    }
  },
  ".u-info-dark": {
    "": {
      "color": [
        "#767a82",
        0,
        0,
        44
      ]
    }
  },
  ".u-primary-dark-bg": {
    "": {
      "backgroundColor": [
        "#398ade",
        0,
        0,
        45
      ]
    }
  },
  ".u-warning-dark-bg": {
    "": {
      "backgroundColor": [
        "#f1a532",
        0,
        0,
        46
      ]
    }
  },
  ".u-success-dark-bg": {
    "": {
      "backgroundColor": [
        "#53c21d",
        0,
        0,
        47
      ]
    }
  },
  ".u-error-dark-bg": {
    "": {
      "backgroundColor": [
        "#e45656",
        0,
        0,
        48
      ]
    }
  },
  ".u-info-dark-bg": {
    "": {
      "backgroundColor": [
        "#767a82",
        0,
        0,
        49
      ]
    }
  },
  ".u-primary-disabled": {
    "": {
      "color": [
        "#9acafc",
        0,
        0,
        50
      ]
    }
  },
  ".u-warning-disabled": {
    "": {
      "color": [
        "#f9d39b",
        0,
        0,
        51
      ]
    }
  },
  ".u-success-disabled": {
    "": {
      "color": [
        "#a9e08f",
        0,
        0,
        52
      ]
    }
  },
  ".u-error-disabled": {
    "": {
      "color": [
        "#f7b2b2",
        0,
        0,
        53
      ]
    }
  },
  ".u-info-disabled": {
    "": {
      "color": [
        "#c4c6c9",
        0,
        0,
        54
      ]
    }
  },
  ".u-primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        55
      ]
    }
  },
  ".u-warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        56
      ]
    }
  },
  ".u-success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        57
      ]
    }
  },
  ".u-error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        58
      ]
    }
  },
  ".u-info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        59
      ]
    }
  },
  ".u-primary-bg": {
    "": {
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        60
      ]
    }
  },
  ".u-warning-bg": {
    "": {
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        61
      ]
    }
  },
  ".u-success-bg": {
    "": {
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        62
      ]
    }
  },
  ".u-error-bg": {
    "": {
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        63
      ]
    }
  },
  ".u-info-bg": {
    "": {
      "backgroundColor": [
        "#909399",
        0,
        0,
        64
      ]
    }
  },
  ".u-main-color": {
    "": {
      "color": [
        "#303133",
        0,
        0,
        65
      ]
    }
  },
  ".u-content-color": {
    "": {
      "color": [
        "#606266",
        0,
        0,
        66
      ]
    }
  },
  ".u-tips-color": {
    "": {
      "color": [
        "#909193",
        0,
        0,
        67
      ]
    }
  },
  ".u-light-color": {
    "": {
      "color": [
        "#c0c4cc",
        0,
        0,
        68
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/App.vue?vue&type=style&index=1&lang=css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=1&lang=css */ 5);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/App.vue?vue&type=style&index=1&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 6 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/main.js?{"page":"pages%2Fcamera%2Fportrait%2Fportrait"} ***!
  \*************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 6);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_camera_portrait_portrait_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camera/portrait/portrait.nvue?mpType=page */ 33);\n\n        \n        \n        \n        \n        _pages_camera_portrait_portrait_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_camera_portrait_portrait_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/camera/portrait/portrait'\n        _pages_camera_portrait_portrait_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_camera_portrait_portrait_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBMkU7QUFDM0UsUUFBUSx3RkFBRztBQUNYLFFBQVEsd0ZBQUc7QUFDWCxRQUFRLHdGQUFHO0FBQ1gsZ0JBQWdCLHdGQUFHIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY2FtZXJhL3BvcnRyYWl0L3BvcnRyYWl0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2NhbWVyYS9wb3J0cmFpdC9wb3J0cmFpdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?mpType=page ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portrait.nvue?vue&type=template&id=40b987e0&mpType=page */ 34);\n/* harmony import */ var _portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portrait.nvue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./portrait.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 38).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./portrait.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 38).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"544d5268\",\n  false,\n  _portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/camera/portrait/portrait.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQzhPO0FBQzlPLGdCQUFnQixnT0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcG9ydHJhaXQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGI5ODdlMCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9ydHJhaXQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb3J0cmFpdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9wb3J0cmFpdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3BvcnRyYWl0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW1EYXRhL1Byb2dyYW1GaWxlcy9IQnVpbGRlclguMy43LjExLjIwMjMwNDI3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1NDRkNTI2OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jYW1lcmEvcG9ydHJhaXQvcG9ydHJhaXQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=template&id=40b987e0&mpType=page ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./portrait.nvue?vue&type=template&id=40b987e0&mpType=page */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_template_id_40b987e0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=template&id=40b987e0&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        {
          staticClass: ["live-camera"],
          style: { width: _vm.windowWidth, height: _vm.windowHeight },
        },
        [
          _c("live-pusher", {
            ref: "livePusher",
            staticClass: ["livePusher"],
            style: { width: _vm.windowWidth, height: _vm.windowHeight },
            attrs: {
              id: "livePusher",
              mode: "FHD",
              beauty: "0",
              whiteness: "0",
              aspect: _vm.aspect,
              minBitrate: "1000",
              audioQuality: "16KHz",
              devicePosition: "back",
              autoFocus: true,
              muted: true,
              enableCamera: true,
              enableMic: false,
              zoom: false,
            },
          }),
          _c("cover-view", { staticClass: ["remind"] }, [
            _c(
              "u-text",
              {
                staticClass: ["remind-text"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.message))]
            ),
          ]),
          _c(
            "cover-view",
            { staticClass: ["outline"] },
            [
              _c("cover-image", {
                staticClass: ["outline"],
                attrs: { src: "/static/live-camera/outline/portrait.png" },
              }),
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["menu"] },
            [
              _c("cover-image", {
                staticClass: ["menu-mask"],
                attrs: { src: "/static/live-camera/bar.png" },
              }),
              _c("cover-image", {
                staticClass: ["menu-back"],
                attrs: { src: "/static/live-camera/back.png" },
                on: { click: _vm.back },
              }),
              _c("cover-image", {
                staticClass: ["menu-snapshot"],
                attrs: { src: "/static/live-camera/shutter.png" },
                on: { click: _vm.snapshot },
              }),
              _c("cover-image", {
                staticClass: ["menu-flip"],
                attrs: { src: "/static/live-camera/flip.png" },
                on: { click: _vm.flip },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./portrait.nvue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9wQixDQUFnQixpbkJBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3J0cmFpdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3J0cmFpdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _this = null;\nvar _default = {\n  data: function data() {\n    return {\n      message: '请拍摄苛学加',\n      //提示\n      aspect: '2:3',\n      //比例\n      windowWidth: '',\n      //屏幕可用宽度\n      windowHeight: '',\n      //屏幕可用高度\n      camerastate: false,\n      //相机准备好了\n      livePusher: null,\n      //流视频对象\n      snapshotsrc: null //快照\n    };\n  },\n  onLoad: function onLoad(e) {\n    _this = this;\n    this.initCamera();\n  },\n  onReady: function onReady() {\n    this.livePusher = uni.createLivePusherContext('livePusher', this);\n    this.startPreview(); //开启预览并设置摄像头\n  },\n\n  methods: {\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          var zcs = _this.aliquot(_this.windowWidth, _this.windowHeight);\n          _this.aspect = _this.windowWidth / zcs + ':' + _this.windowHeight / zcs;\n        }\n      });\n    },\n    //整除数计算\n    aliquot: function aliquot(x, y) {\n      if (x % y == 0) return y;\n      return this.aliquot(y, x % y);\n    },\n    //开始预览\n    startPreview: function startPreview() {\n      this.livePusher.startPreview({\n        success: function success(a) {\n          if (a.errMsg == 'startPreview:ok' || a.errMsg == 'operateLivePusher:ok') {\n            _this.camerastate = true; //标记相机启动成功\n          }\n        }\n      });\n    },\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        }\n      });\n    },\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    //抓拍\n    snapshot: function snapshot() {\n      this.livePusher.snapshot({\n        success: function success(e) {\n          _this.snapshotsrc = e.message.tempImagePath;\n          _this.stopPreview();\n          _this.setImage();\n          uni.navigateBack();\n        }\n      });\n    },\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({\n        path: _this.snapshotsrc\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL3BvcnRyYWl0L3BvcnRyYWl0Lm52dWUiXSwibmFtZXMiOlsiZGF0YSIsIm1lc3NhZ2UiLCJhc3BlY3QiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNhbWVyYXN0YXRlIiwibGl2ZVB1c2hlciIsInNuYXBzaG90c3JjIiwib25Mb2FkIiwiX3RoaXMiLCJvblJlYWR5IiwibWV0aG9kcyIsImluaXRDYW1lcmEiLCJ1bmkiLCJzdWNjZXNzIiwiYWxpcXVvdCIsInN0YXJ0UHJldmlldyIsInN0b3BQcmV2aWV3IiwiYmFjayIsInNuYXBzaG90IiwiZmxpcCIsInNldEltYWdlIiwicHJldlBhZ2UiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7UUFDQUM7VUFDQUw7VUFDQUE7VUFDQTtVQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FNO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtRQUNBRjtVQUNBO1lBQ0FMO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBUTtNQUNBO1FBQ0FIO1VBQ0FMO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQVM7TUFDQUw7SUFDQTtJQUVBO0lBQ0FNO01BQ0E7UUFDQUw7VUFDQUw7VUFDQUE7VUFDQUE7VUFDQUk7UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBTztNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7O01BRUE7TUFDQUM7UUFBQUM7TUFBQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibGl2ZS1jYW1lcmFcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aW5kb3dXaWR0aCwgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgfVwiPlxyXG5cdFx0PGxpdmUtcHVzaGVyXHJcblx0XHRcdGlkPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdHJlZj1cImxpdmVQdXNoZXJcIlxyXG5cdFx0XHRjbGFzcz1cImxpdmVQdXNoZXJcIlxyXG5cdFx0XHRtb2RlPVwiRkhEXCJcclxuXHRcdFx0YmVhdXR5PVwiMFwiXHJcblx0XHRcdHdoaXRlbmVzcz1cIjBcIlxyXG5cdFx0XHQ6YXNwZWN0PVwiYXNwZWN0XCJcclxuXHRcdFx0bWluLWJpdHJhdGU9XCIxMDAwXCJcclxuXHRcdFx0YXVkaW8tcXVhbGl0eT1cIjE2S0h6XCJcclxuXHRcdFx0ZGV2aWNlLXBvc2l0aW9uPVwiYmFja1wiXHJcblx0XHRcdDphdXRvLWZvY3VzPVwidHJ1ZVwiXHJcblx0XHRcdDptdXRlZD1cInRydWVcIlxyXG5cdFx0XHQ6ZW5hYmxlLWNhbWVyYT1cInRydWVcIlxyXG5cdFx0XHQ6ZW5hYmxlLW1pYz1cImZhbHNlXCJcclxuXHRcdFx0Onpvb209XCJmYWxzZVwiXHJcblx0XHRcdDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9XCJcclxuXHRcdD48L2xpdmUtcHVzaGVyPlxyXG5cclxuXHRcdDwhLS3mj5DnpLror60tLT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmVtaW5kXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwicmVtaW5kLXRleHRcIiBzdHlsZT1cIlwiPnt7IG1lc3NhZ2UgfX08L3RleHQ+XHJcblx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0PCEtLei+heWKqee6vy0tPlxyXG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJvdXRsaW5lXCI+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm91dGxpbmVcIiBzcmM9XCIvc3RhdGljL2xpdmUtY2FtZXJhL291dGxpbmUvcG9ydHJhaXQucG5nXCIgc3R5bGU9XCJcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZW51XCI+XHJcblx0XHRcdDwhLS3lupXpg6joj5zljZXljLrln5/og4zmma8tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1tYXNrXCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9iYXIucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdDwhLS3ov5Tlm57plK4tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1iYWNrXCIgQHRhcD1cImJhY2tcIiBzcmM9XCIvc3RhdGljL2xpdmUtY2FtZXJhL2JhY2sucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdDwhLS3lv6vpl6jplK4tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1zbmFwc2hvdFwiIEB0YXA9XCJzbmFwc2hvdFwiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvc2h1dHRlci5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0PCEtLeWPjei9rOmUri0tPlxyXG5cdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LWZsaXBcIiBAdGFwPVwiZmxpcFwiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvZmxpcC5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmxldCBfdGhpcyA9IG51bGw7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWVzc2FnZTon6K+35ouN5pGE6Iub5a2m5YqgJywvL+aPkOekulxyXG5cdFx0XHRhc3BlY3Q6ICcyOjMnLCAvL+avlOS+i1xyXG5cdFx0XHR3aW5kb3dXaWR0aDogJycsIC8v5bGP5bmV5Y+v55So5a695bqmXHJcblx0XHRcdHdpbmRvd0hlaWdodDogJycsIC8v5bGP5bmV5Y+v55So6auY5bqmXHJcblx0XHRcdGNhbWVyYXN0YXRlOiBmYWxzZSwgLy/nm7jmnLrlh4blpIflpb3kuoZcclxuXHRcdFx0bGl2ZVB1c2hlcjogbnVsbCwgLy/mtYHop4bpopHlr7nosaFcclxuXHRcdFx0c25hcHNob3RzcmM6IG51bGwgLy/lv6vnhadcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQoZSkge1xyXG5cdFx0X3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5pbml0Q2FtZXJhKCk7XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0dGhpcy5saXZlUHVzaGVyID0gdW5pLmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdsaXZlUHVzaGVyJywgdGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0UHJldmlldygpOyAvL+W8gOWQr+mihOiniOW5tuiuvue9ruaRhOWDj+WktFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly/liJ3lp4vljJbnm7jmnLpcclxuXHRcdGluaXRDYW1lcmEoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdGxldCB6Y3MgPSBfdGhpcy5hbGlxdW90KF90aGlzLndpbmRvd1dpZHRoLCBfdGhpcy53aW5kb3dIZWlnaHQpO1xyXG5cdFx0XHRcdFx0X3RoaXMuYXNwZWN0ID0gX3RoaXMud2luZG93V2lkdGggLyB6Y3MgKyAnOicgKyBfdGhpcy53aW5kb3dIZWlnaHQgLyB6Y3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/mlbTpmaTmlbDorqHnrpdcclxuXHRcdGFsaXF1b3QoeCwgeSkge1xyXG5cdFx0XHRpZiAoeCAlIHkgPT0gMCkgcmV0dXJuIHk7XHJcblx0XHRcdHJldHVybiB0aGlzLmFsaXF1b3QoeSwgeCAlIHkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+W8gOWni+mihOiniFxyXG5cdFx0c3RhcnRQcmV2aWV3KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3RhcnRQcmV2aWV3KHtcclxuXHRcdFx0XHRzdWNjZXNzOiBhID0+IHtcclxuXHRcdFx0XHRcdGlmIChhLmVyck1zZyA9PSAnc3RhcnRQcmV2aWV3Om9rJyB8fCBhLmVyck1zZyA9PSAnb3BlcmF0ZUxpdmVQdXNoZXI6b2snKSB7XHJcblx0XHRcdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gdHJ1ZTsgLy/moIforrDnm7jmnLrlkK/liqjmiJDlip9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8v5YGc5q2i6aKE6KeIXHJcblx0XHRzdG9wUHJldmlldygpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnN0b3BQcmV2aWV3KHtcclxuXHRcdFx0XHRzdWNjZXNzOiBhID0+IHtcclxuXHRcdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gZmFsc2U7IC8v5qCH6K6w55u45py65pyq5ZCv5YqoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/ov5Tlm55cclxuXHRcdGJhY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/mipPmi41cclxuXHRcdHNuYXBzaG90KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc25hcHNob3Qoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0X3RoaXMuc25hcHNob3RzcmMgPSBlLm1lc3NhZ2UudGVtcEltYWdlUGF0aDtcclxuXHRcdFx0XHRcdF90aGlzLnN0b3BQcmV2aWV3KCk7XHJcblx0XHRcdFx0XHRfdGhpcy5zZXRJbWFnZSgpO1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5Y+N6L2sXHJcblx0XHRmbGlwKCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3dpdGNoQ2FtZXJhKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v6K6+572uXHJcblx0XHRzZXRJbWFnZSgpIHtcclxuXHRcdFx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0XHRcdGxldCBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxyXG5cclxuXHRcdFx0Ly/nm7TmjqXosIPnlKjkuIrkuIDkuKrpobXpnaLnmoRzZXRJbWFnZSgp5pa55rOV77yM5oqK5pWw5o2u5a2Y5Yiw5LiK5LiA5Liq6aG16Z2i5Lit5Y67XHJcblx0XHRcdHByZXZQYWdlLiR2bS5zZXRJbWFnZSh7IHBhdGg6IF90aGlzLnNuYXBzaG90c3JjIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmxpdmUtY2FtZXJhIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC5vdXRsaW5lIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMTI1cnB4O1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5yZW1pbmQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA4ODBycHg7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0LnJlbWluZC10ZXh0IHtcclxuXHRcdFx0Y29sb3I6ICNkZGRkZGQ7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQubWVudSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMTgwcnB4O1xyXG5cdFx0ei1pbmRleDogOTg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQubWVudS1tYXNrIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdGhlaWdodDogMTgwcnB4O1xyXG5cdFx0XHR6LWluZGV4OiA5ODtcclxuXHRcdH1cclxuXHRcdC5tZW51LWJhY2sge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDMwcnB4O1xyXG5cdFx0XHRib3R0b206IDUwcnB4O1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5tZW51LXNuYXBzaG90IHtcclxuXHRcdFx0d2lkdGg6IDEzMHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtZmxpcCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRib3R0b206IDUwcnB4O1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./portrait.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 39);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_portrait_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/portrait/portrait.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".live-camera": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".outline": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        17
      ],
      "top": [
        0,
        0,
        1,
        17
      ],
      "left": [
        0,
        0,
        1,
        17
      ],
      "bottom": [
        0,
        0,
        1,
        17
      ],
      "width": [
        "750rpx",
        0,
        1,
        17
      ],
      "height": [
        "1125rpx",
        0,
        1,
        17
      ],
      "zIndex": [
        99,
        0,
        1,
        17
      ],
      "alignItems": [
        "center",
        0,
        1,
        17
      ],
      "justifyContent": [
        "center",
        0,
        1,
        17
      ]
    }
  },
  ".remind": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        18
      ],
      "top": [
        "880rpx",
        0,
        1,
        18
      ],
      "width": [
        "750rpx",
        0,
        1,
        18
      ],
      "zIndex": [
        100,
        0,
        1,
        18
      ],
      "alignItems": [
        "center",
        0,
        1,
        18
      ],
      "justifyContent": [
        "center",
        0,
        1,
        18
      ]
    }
  },
  ".remind-text": {
    ".live-camera .remind ": {
      "color": [
        "#dddddd",
        0,
        2,
        19
      ],
      "fontWeight": [
        "bold",
        0,
        2,
        19
      ]
    }
  },
  ".menu": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        20
      ],
      "left": [
        0,
        0,
        1,
        20
      ],
      "bottom": [
        0,
        0,
        1,
        20
      ],
      "width": [
        "750rpx",
        0,
        1,
        20
      ],
      "height": [
        "180rpx",
        0,
        1,
        20
      ],
      "zIndex": [
        98,
        0,
        1,
        20
      ],
      "alignItems": [
        "center",
        0,
        1,
        20
      ],
      "justifyContent": [
        "center",
        0,
        1,
        20
      ]
    }
  },
  ".menu-mask": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        21
      ],
      "left": [
        0,
        0,
        2,
        21
      ],
      "bottom": [
        0,
        0,
        2,
        21
      ],
      "width": [
        "750rpx",
        0,
        2,
        21
      ],
      "height": [
        "180rpx",
        0,
        2,
        21
      ],
      "zIndex": [
        98,
        0,
        2,
        21
      ]
    }
  },
  ".menu-back": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        22
      ],
      "left": [
        "30rpx",
        0,
        2,
        22
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        22
      ],
      "width": [
        "80rpx",
        0,
        2,
        22
      ],
      "height": [
        "80rpx",
        0,
        2,
        22
      ],
      "zIndex": [
        99,
        0,
        2,
        22
      ],
      "alignItems": [
        "center",
        0,
        2,
        22
      ],
      "justifyContent": [
        "center",
        0,
        2,
        22
      ]
    }
  },
  ".menu-snapshot": {
    ".live-camera .menu ": {
      "width": [
        "130rpx",
        0,
        2,
        23
      ],
      "height": [
        "130rpx",
        0,
        2,
        23
      ],
      "zIndex": [
        99,
        0,
        2,
        23
      ]
    }
  },
  ".menu-flip": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        24
      ],
      "right": [
        "30rpx",
        0,
        2,
        24
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        24
      ],
      "width": [
        "80rpx",
        0,
        2,
        24
      ],
      "height": [
        "80rpx",
        0,
        2,
        24
      ],
      "zIndex": [
        99,
        0,
        2,
        24
      ],
      "alignItems": [
        "center",
        0,
        2,
        24
      ],
      "justifyContent": [
        "center",
        0,
        2,
        24
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);