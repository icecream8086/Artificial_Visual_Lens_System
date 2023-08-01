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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
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
/* 16 */
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/main.js?{"page":"pages%2Fcamera%2Fidphoto%2Fidphoto"} ***!
  \***********************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 6);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_camera_idphoto_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camera/idphoto/idphoto.nvue?mpType=page */ 17);\n\n        \n        \n        \n        \n        _pages_camera_idphoto_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_camera_idphoto_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/camera/idphoto/idphoto'\n        _pages_camera_idphoto_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_camera_idphoto_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBeUU7QUFDekUsUUFBUSxzRkFBRztBQUNYLFFBQVEsc0ZBQUc7QUFDWCxRQUFRLHNGQUFHO0FBQ1gsZ0JBQWdCLHNGQUFHIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY2FtZXJhL2lkcGhvdG8vaWRwaG90by5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jYW1lcmEvaWRwaG90by9pZHBob3RvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idphoto.nvue?vue&type=template&id=7e59a200&mpType=page */ 18);\n/* harmony import */ var _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idphoto.nvue?vue&type=script&lang=js&mpType=page */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4efcda52\",\n  false,\n  _idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/camera/idphoto/idphoto.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFFQUE2RDtBQUNqSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUVBQTZEO0FBQ3RIOztBQUVBOztBQUVBO0FBQzhPO0FBQzlPLGdCQUFnQixnT0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaWRwaG90by5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlNTlhMjAwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaWRwaG90by5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vaWRwaG90by5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNGVmY2RhNTJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FtZXJhL2lkcGhvdG8vaWRwaG90by5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=template&id=7e59a200&mpType=page ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=template&id=7e59a200&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_7e59a200_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=template&id=7e59a200&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "view",
            {
              staticClass: ["preview"],
              style: { width: _vm.windowWidth, height: _vm.windowHeight - 80 },
            },
            [
              _c("live-pusher", {
                ref: "livePusher",
                staticClass: ["livePusher"],
                style: { width: _vm.cameraWidth, height: _vm.cameraHeight },
                attrs: {
                  id: "livePusher",
                  mode: "FHD",
                  beauty: "1",
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
                on: { statechange: _vm.statechange },
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
                {
                  staticClass: ["outline-box"],
                  style: {
                    width: _vm.windowWidth,
                    height: _vm.windowHeight - 80,
                  },
                },
                [
                  _c("cover-image", {
                    staticClass: ["outline-img"],
                    attrs: { src: "/static/live-camera/outline/idphoto.png" },
                  }),
                ],
                1
              ),
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
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1wQixDQUFnQixnbkJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvUHJvZ3JhbUZpbGVzL0hCdWlsZGVyWC4zLjcuMTEuMjAyMzA0MjcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtRGF0YS9Qcm9ncmFtRmlsZXMvSEJ1aWxkZXJYLjMuNy4xMS4yMDIzMDQyNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW1EYXRhL1Byb2dyYW1GaWxlcy9IQnVpbGRlclguMy43LjExLjIwMjMwNDI3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lkcGhvdG8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _this = null;\nvar _default = {\n  data: function data() {\n    return {\n      dotype: 'idphoto',\n      //操作类型\n      message: '',\n      //提示\n      aspect: '1:1',\n      //比例\n      cameraWidth: '',\n      //相机画面宽度\n      cameraHeight: '',\n      //相机画面宽度\n      windowWidth: '',\n      //屏幕可用宽度\n      windowHeight: '',\n      //屏幕可用高度\n      camerastate: false,\n      //相机准备好了\n      livePusher: null,\n      //流视频对象\n      snapshotsrc: null //快照\n    };\n  },\n  onLoad: function onLoad(e) {\n    _this = this;\n    if (e.dotype != undefined) this.dotype = e.dotype;\n    this.initCamera();\n  },\n  onReady: function onReady() {\n    this.livePusher = uni.createLivePusherContext('livePusher', this);\n    this.startPreview(); //开启预览并设置摄像头\n    this.poenCarme();\n  },\n  methods: {\n    //轮询打开\n    poenCarme: function poenCarme() {\n      if (plus.os.name == 'Android') {\n        this.poenCarmeInterval = setInterval(function () {\n          __f__(\"log\", _this.camerastate, \" at pages/camera/idphoto/idphoto.nvue:84\");\n          if (!_this.camerastate) _this.startPreview();\n        }, 2500);\n      }\n    },\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          _this.cameraWidth = res.windowWidth;\n          _this.cameraHeight = res.windowWidth * 1.5;\n        }\n      });\n    },\n    //开始预览\n    startPreview: function startPreview() {\n      this.livePusher.startPreview({\n        success: function success(a) {\n          __f__(\"log\", a, \" at pages/camera/idphoto/idphoto.nvue:107\");\n        }\n      });\n    },\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        }\n      });\n    },\n    //状态\n    statechange: function statechange(e) {\n      //状态改变\n      __f__(\"log\", e, \" at pages/camera/idphoto/idphoto.nvue:123\");\n      if (e.detail.code == 1007) {\n        _this.camerastate = true;\n      } else if (e.detail.code == -1301) {\n        _this.camerastate = false;\n      }\n    },\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    //抓拍\n    snapshot: function snapshot() {\n      this.livePusher.snapshot({\n        success: function success(e) {\n          _this.snapshotsrc = e.message.tempImagePath;\n          _this.stopPreview();\n          _this.setImage();\n          uni.navigateBack();\n        }\n      });\n    },\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({\n        path: _this.snapshotsrc,\n        dotype: this.dotype\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL2lkcGhvdG8vaWRwaG90by5udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJkb3R5cGUiLCJtZXNzYWdlIiwiYXNwZWN0IiwiY2FtZXJhV2lkdGgiLCJjYW1lcmFIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNhbWVyYXN0YXRlIiwibGl2ZVB1c2hlciIsInNuYXBzaG90c3JjIiwib25Mb2FkIiwiX3RoaXMiLCJvblJlYWR5IiwibWV0aG9kcyIsInBvZW5DYXJtZSIsImluaXRDYW1lcmEiLCJ1bmkiLCJzdWNjZXNzIiwic3RhcnRQcmV2aWV3Iiwic3RvcFByZXZpZXciLCJzdGF0ZWNoYW5nZSIsImJhY2siLCJzbmFwc2hvdCIsImZsaXAiLCJzZXRJbWFnZSIsInByZXZQYWdlIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFFQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtJQUVBO0lBQ0FDO01BQ0FDO1FBQ0FDO1VBQ0FOO1VBQ0FBO1VBQ0FBO1VBQ0FBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQU87TUFDQTtRQUNBRDtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtRQUNBRjtVQUNBTjtRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FTO01BQ0E7TUFDQTtNQUNBO1FBQ0FUO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0lBRUE7SUFDQVU7TUFDQUw7SUFDQTtJQUVBO0lBQ0FNO01BQ0E7UUFDQUw7VUFDQU47VUFDQUE7VUFDQUE7VUFDQUs7UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBTztNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7O01BRUE7TUFDQUM7UUFBQUM7UUFBQTFCO01BQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxpdmUtY2FtZXJhXCIgOnN0eWxlPVwieyB3aWR0aDogd2luZG93V2lkdGgsIGhlaWdodDogd2luZG93SGVpZ2h0IH1cIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHJldmlld1wiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCAtIDgwIH1cIj5cclxuXHRcdFx0PGxpdmUtcHVzaGVyXHJcblx0XHRcdFx0aWQ9XCJsaXZlUHVzaGVyXCJcclxuXHRcdFx0XHRyZWY9XCJsaXZlUHVzaGVyXCJcclxuXHRcdFx0XHRjbGFzcz1cImxpdmVQdXNoZXJcIlxyXG5cdFx0XHRcdG1vZGU9XCJGSERcIlxyXG5cdFx0XHRcdGJlYXV0eT1cIjFcIlxyXG5cdFx0XHRcdHdoaXRlbmVzcz1cIjBcIlxyXG5cdFx0XHRcdDphc3BlY3Q9XCJhc3BlY3RcIlxyXG5cdFx0XHRcdG1pbi1iaXRyYXRlPVwiMTAwMFwiXHJcblx0XHRcdFx0YXVkaW8tcXVhbGl0eT1cIjE2S0h6XCJcclxuXHRcdFx0XHRkZXZpY2UtcG9zaXRpb249XCJiYWNrXCJcclxuXHRcdFx0XHQ6YXV0by1mb2N1cz1cInRydWVcIlxyXG5cdFx0XHRcdDptdXRlZD1cInRydWVcIlxyXG5cdFx0XHRcdDplbmFibGUtY2FtZXJhPVwidHJ1ZVwiXHJcblx0XHRcdFx0OmVuYWJsZS1taWM9XCJmYWxzZVwiXHJcblx0XHRcdFx0Onpvb209XCJmYWxzZVwiXHJcblx0XHRcdFx0QHN0YXRlY2hhbmdlPVwic3RhdGVjaGFuZ2VcIlxyXG5cdFx0XHRcdDpzdHlsZT1cInsgd2lkdGg6IGNhbWVyYVdpZHRoLCBoZWlnaHQ6IGNhbWVyYUhlaWdodCB9XCJcclxuXHRcdFx0PjwvbGl2ZS1wdXNoZXI+XHJcblxyXG5cdFx0XHQ8IS0t5o+Q56S66K+tLS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmVtaW5kXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJyZW1pbmQtdGV4dFwiIHN0eWxlPVwiXCI+e3sgbWVzc2FnZSB9fTwvdGV4dD5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0PCEtLei+heWKqee6vy0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cIm91dGxpbmUtYm94XCIgOnN0eWxlPVwieyB3aWR0aDogd2luZG93V2lkdGgsIGhlaWdodDogd2luZG93SGVpZ2h0IC0gODAgfVwiPlxyXG5cdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm91dGxpbmUtaW1nXCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9vdXRsaW5lL2lkcGhvdG8ucG5nXCIgc3R5bGU9XCJcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZW51XCI+XHJcblx0XHRcdDwhLS3lupXpg6joj5zljZXljLrln5/og4zmma8tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1tYXNrXCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9iYXIucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdDwhLS3ov5Tlm57plK4tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1iYWNrXCIgQHRhcD1cImJhY2tcIiBzcmM9XCIvc3RhdGljL2xpdmUtY2FtZXJhL2JhY2sucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdDwhLS3lv6vpl6jplK4tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1zbmFwc2hvdFwiIEB0YXA9XCJzbmFwc2hvdFwiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvc2h1dHRlci5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0PCEtLeWPjei9rOmUri0tPlxyXG5cdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LWZsaXBcIiBAdGFwPVwiZmxpcFwiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvZmxpcC5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmxldCBfdGhpcyA9IG51bGw7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZG90eXBlOiAnaWRwaG90bycsIC8v5pON5L2c57G75Z6LXHJcblx0XHRcdG1lc3NhZ2U6ICcnLCAvL+aPkOekulxyXG5cdFx0XHRhc3BlY3Q6ICcxOjEnLCAvL+avlOS+i1xyXG5cdFx0XHRjYW1lcmFXaWR0aDogJycsIC8v55u45py655S76Z2i5a695bqmXHJcblx0XHRcdGNhbWVyYUhlaWdodDogJycsIC8v55u45py655S76Z2i5a695bqmXHJcblx0XHRcdHdpbmRvd1dpZHRoOiAnJywgLy/lsY/luZXlj6/nlKjlrr3luqZcclxuXHRcdFx0d2luZG93SGVpZ2h0OiAnJywgLy/lsY/luZXlj6/nlKjpq5jluqZcclxuXHRcdFx0Y2FtZXJhc3RhdGU6IGZhbHNlLCAvL+ebuOacuuWHhuWkh+WlveS6hlxyXG5cdFx0XHRsaXZlUHVzaGVyOiBudWxsLCAvL+a1geinhumikeWvueixoVxyXG5cdFx0XHRzbmFwc2hvdHNyYzogbnVsbCAvL+W/q+eFp1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG9uTG9hZChlKSB7XHJcblx0XHRfdGhpcyA9IHRoaXM7XHJcblx0XHRpZiAoZS5kb3R5cGUgIT0gdW5kZWZpbmVkKSB0aGlzLmRvdHlwZSA9IGUuZG90eXBlO1xyXG5cdFx0dGhpcy5pbml0Q2FtZXJhKCk7XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0dGhpcy5saXZlUHVzaGVyID0gdW5pLmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdsaXZlUHVzaGVyJywgdGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0UHJldmlldygpOyAvL+W8gOWQr+mihOiniOW5tuiuvue9ruaRhOWDj+WktFxyXG5cdFx0dGhpcy5wb2VuQ2FybWUoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8v6L2u6K+i5omT5byAXHJcblx0XHRwb2VuQ2FybWUoKSB7XHJcblx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdGlmIChwbHVzLm9zLm5hbWUgPT0gJ0FuZHJvaWQnKSB7XHJcblx0XHRcdFx0dGhpcy5wb2VuQ2FybWVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3RoaXMuY2FtZXJhc3RhdGUpO1xyXG5cdFx0XHRcdFx0aWYgKCFfdGhpcy5jYW1lcmFzdGF0ZSkgX3RoaXMuc3RhcnRQcmV2aWV3KCk7XHJcblx0XHRcdFx0fSwgMjUwMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8jZW5kaWZcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/liJ3lp4vljJbnm7jmnLpcclxuXHRcdGluaXRDYW1lcmEoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdF90aGlzLmNhbWVyYVdpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMuY2FtZXJhSGVpZ2h0ID0gcmVzLndpbmRvd1dpZHRoICogMS41O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5byA5aeL6aKE6KeIXHJcblx0XHRzdGFydFByZXZpZXcoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zdGFydFByZXZpZXcoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvL+WBnOatoumihOiniFxyXG5cdFx0c3RvcFByZXZpZXcoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zdG9wUHJldmlldyh7XHJcblx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRfdGhpcy5jYW1lcmFzdGF0ZSA9IGZhbHNlOyAvL+agh+iusOebuOacuuacquWQr+WKqFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v54q25oCBXHJcblx0XHRzdGF0ZWNoYW5nZShlKSB7XHJcblx0XHRcdC8v54q25oCB5pS55Y+YXHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRpZiAoZS5kZXRhaWwuY29kZSA9PSAxMDA3KSB7XHJcblx0XHRcdFx0X3RoaXMuY2FtZXJhc3RhdGUgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGUuZGV0YWlsLmNvZGUgPT0gLTEzMDEpIHtcclxuXHRcdFx0XHRfdGhpcy5jYW1lcmFzdGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v6L+U5ZueXHJcblx0XHRiYWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5oqT5ouNXHJcblx0XHRzbmFwc2hvdCgpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnNuYXBzaG90KHtcclxuXHRcdFx0XHRzdWNjZXNzOiBlID0+IHtcclxuXHRcdFx0XHRcdF90aGlzLnNuYXBzaG90c3JjID0gZS5tZXNzYWdlLnRlbXBJbWFnZVBhdGg7XHJcblx0XHRcdFx0XHRfdGhpcy5zdG9wUHJldmlldygpO1xyXG5cdFx0XHRcdFx0X3RoaXMuc2V0SW1hZ2UoKTtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+WPjei9rFxyXG5cdFx0ZmxpcCgpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnN3aXRjaENhbWVyYSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+iuvue9rlxyXG5cdFx0c2V0SW1hZ2UoKSB7XHJcblx0XHRcdGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG5cdFx0XHRsZXQgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcclxuXHJcblx0XHRcdC8v55u05o6l6LCD55So5LiK5LiA5Liq6aG16Z2i55qEc2V0SW1hZ2UoKeaWueazle+8jOaKiuaVsOaNruWtmOWIsOS4iuS4gOS4qumhtemdouS4reWOu1xyXG5cdFx0XHRwcmV2UGFnZS4kdm0uc2V0SW1hZ2UoeyBwYXRoOiBfdGhpcy5zbmFwc2hvdHNyYywgZG90eXBlOiB0aGlzLmRvdHlwZSB9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5saXZlLWNhbWVyYSB7XHJcblx0LnByZXZpZXcge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Lm91dGxpbmUtYm94IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQub3V0bGluZS1pbWcge1xyXG5cdFx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMTI1cnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQucmVtaW5kIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDg4MHJweDtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0LnJlbWluZC10ZXh0IHtcclxuXHRcdFx0XHRjb2xvcjogI2RkZGRkZDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQubWVudSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMTgwcnB4O1xyXG5cdFx0ei1pbmRleDogOTg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQubWVudS1tYXNrIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdGhlaWdodDogMTgwcnB4O1xyXG5cdFx0XHR6LWluZGV4OiA5ODtcclxuXHRcdH1cclxuXHRcdC5tZW51LWJhY2sge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDMwcnB4O1xyXG5cdFx0XHRib3R0b206IDUwcnB4O1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5tZW51LXNuYXBzaG90IHtcclxuXHRcdFx0d2lkdGg6IDEzMHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtZmxpcCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRib3R0b206IDUwcnB4O1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../../../../ProgramData/ProgramFiles/HBuilderX.3.7.11.20230427/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 23);
/* harmony import */ var _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_ProgramData_ProgramFiles_HBuilderX_3_7_11_20230427_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/zzbsn/source/repos/.VsCodeRepos/software-cup/front-end/mobile/primary-ui/pages/camera/idphoto/idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".preview": {
    ".live-camera ": {
      "justifyContent": [
        "center",
        0,
        1,
        16
      ],
      "alignItems": [
        "center",
        0,
        1,
        16
      ]
    }
  },
  ".outline-box": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        17
      ],
      "top": [
        0,
        0,
        2,
        17
      ],
      "left": [
        0,
        0,
        2,
        17
      ],
      "bottom": [
        0,
        0,
        2,
        17
      ],
      "zIndex": [
        99,
        0,
        2,
        17
      ],
      "alignItems": [
        "center",
        0,
        2,
        17
      ],
      "justifyContent": [
        "center",
        0,
        2,
        17
      ]
    }
  },
  ".outline-img": {
    ".live-camera .preview .outline-box ": {
      "width": [
        "750rpx",
        0,
        3,
        18
      ],
      "height": [
        "1125rpx",
        0,
        3,
        18
      ]
    }
  },
  ".remind": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        19
      ],
      "top": [
        "880rpx",
        0,
        2,
        19
      ],
      "width": [
        "750rpx",
        0,
        2,
        19
      ],
      "zIndex": [
        100,
        0,
        2,
        19
      ],
      "alignItems": [
        "center",
        0,
        2,
        19
      ],
      "justifyContent": [
        "center",
        0,
        2,
        19
      ]
    }
  },
  ".remind-text": {
    ".live-camera .preview .remind ": {
      "color": [
        "#dddddd",
        0,
        3,
        20
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        20
      ]
    }
  },
  ".menu": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        21
      ],
      "left": [
        0,
        0,
        1,
        21
      ],
      "bottom": [
        0,
        0,
        1,
        21
      ],
      "width": [
        "750rpx",
        0,
        1,
        21
      ],
      "height": [
        "180rpx",
        0,
        1,
        21
      ],
      "zIndex": [
        98,
        0,
        1,
        21
      ],
      "alignItems": [
        "center",
        0,
        1,
        21
      ],
      "justifyContent": [
        "center",
        0,
        1,
        21
      ]
    }
  },
  ".menu-mask": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        22
      ],
      "left": [
        0,
        0,
        2,
        22
      ],
      "bottom": [
        0,
        0,
        2,
        22
      ],
      "width": [
        "750rpx",
        0,
        2,
        22
      ],
      "height": [
        "180rpx",
        0,
        2,
        22
      ],
      "zIndex": [
        98,
        0,
        2,
        22
      ]
    }
  },
  ".menu-back": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        23
      ],
      "left": [
        "30rpx",
        0,
        2,
        23
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        23
      ],
      "width": [
        "80rpx",
        0,
        2,
        23
      ],
      "height": [
        "80rpx",
        0,
        2,
        23
      ],
      "zIndex": [
        99,
        0,
        2,
        23
      ],
      "alignItems": [
        "center",
        0,
        2,
        23
      ],
      "justifyContent": [
        "center",
        0,
        2,
        23
      ]
    }
  },
  ".menu-snapshot": {
    ".live-camera .menu ": {
      "width": [
        "130rpx",
        0,
        2,
        24
      ],
      "height": [
        "130rpx",
        0,
        2,
        24
      ],
      "zIndex": [
        99,
        0,
        2,
        24
      ]
    }
  },
  ".menu-flip": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        25
      ],
      "right": [
        "30rpx",
        0,
        2,
        25
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        25
      ],
      "width": [
        "80rpx",
        0,
        2,
        25
      ],
      "height": [
        "80rpx",
        0,
        2,
        25
      ],
      "zIndex": [
        99,
        0,
        2,
        25
      ],
      "alignItems": [
        "center",
        0,
        2,
        25
      ],
      "justifyContent": [
        "center",
        0,
        2,
        25
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);