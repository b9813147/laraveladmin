"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_group_Tag_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      headers: [],
      error: [],
      resources: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        type_id: null,
        name: null,
        description: null
      },
      defaultItem: {
        id: null,
        type_id: null,
        name: null,
        description: null
      },
      transformFormat: {
        id: null,
        type_id: null,
        content: {
          name: {
            cn: null,
            en: null,
            tw: null,
            customize: null
          },
          description: {
            cn: null,
            en: null,
            tw: null,
            customize: null
          }
        }
      },
      transformFormatDefault: {
        id: null,
        type_id: null,
        content: {
          name: {
            cn: null,
            en: null,
            tw: null,
            customize: null
          },
          description: {
            cn: null,
            en: null,
            tw: null,
            customize: null
          }
        }
      },
      typeTransformFormatDefault: {
        id: null,
        group_id: null,
        content: {
          cn: null,
          en: null,
          tw: null,
          customize: null
        }
      },
      typeTransformFormat: {
        id: null,
        group_id: null,
        content: {
          cn: null,
          en: null,
          tw: null,
          customize: null
        }
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      if (this.editedItem.hasOwnProperty('group_id')) {
        return this.editedIndex === -1 ? this.$t('tag.create') : this.$t('tag.edit');
      }

      return this.editedIndex === -1 ? this.$t('tag.type.create') : this.$t('tag.type.edit');
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this2 = this;

      var _this = this;

      var url = "/api/group/".concat(this.$store.state.Auth.user.group_id);

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (resource) {
        if (resource.status !== 200) return;
        var result = resource.data.tagTypes;

        if (result.length > 0) {
          _this.resources = _this2.tagTypeFormat(result);
        }

        _this.$store.dispatch("updateLoading", false);
      });
      this.close();
    },
    editItem: function editItem(item) {
      this.error = [];
      this.editedIndex = 0;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    createItem: function createItem(item) {
      this.editedIndex = -1;
      this.dialog = true;

      if (item) {
        return this.editedItem = Object.assign({}, {
          type_id: item
        });
      }

      return this.editedItem = Object.assign({}, {
        group_id: this.$store.state.Auth.user.group_id
      });
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var url = "/api/group/tag/".concat(item.id);

      if (item.hasOwnProperty('children')) {
        url = "/api/group/tag/type/".concat(item.id);
      }

      if (confirm('Are you sure you want to delete this item?')) {
        axios["delete"](url).then(function (response) {
          if (response.status !== 204) return;

          _this.initialize();
        })["catch"](function (error) {
          if (error.response.status === 422) alert(error.response.data);
        });
      }
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.transformFormat = Object.assign({}, _this3.transformFormatDefault);
        _this3.typeTransformFormat = Object.assign({}, _this3.typeTransformFormatDefault);
        _this3.editedIndex = -1;
      });
      this.error = [];
    },
    save: function save() {
      var _this$editedItem$desc,
          _this4 = this;

      var _this = this;

      var url = "/api/group/tag"; // 格式轉換

      _this.transformFormat.content.name.customize = _this.editedItem.name;
      _this.transformFormat.content.description.customize = (_this$editedItem$desc = _this.editedItem.description) !== null && _this$editedItem$desc !== void 0 ? _this$editedItem$desc : '';
      _this.transformFormat.content = JSON.stringify(_this.transformFormat.content);
      _this.transformFormat.type_id = _this.editedItem.type_id;
      _this.transformFormat.id = _this.editedItem.id;

      _this.$store.dispatch("updateLoading", true);

      if (this.editedItem.hasOwnProperty('group_id')) {
        return this.saveType();
      }

      var params = _this.transformFormat;

      if (this.editedIndex > -1) {
        axios.put(url + '/' + _this.editedItem.id, params).then(function (response) {
          if (response.status !== 204) return;

          _this4.initialize();
        })["catch"](function (error) {
          _this.error = error.response.data.errors;
          if (error.response.data.status_code === 422) _this.dialog = true;
        });

        _this.$store.dispatch("updateLoading", false); //

      } else {
        _this.dialog = true;
        axios.post(url, params).then(function (response) {
          if (response.status !== 204) return;

          _this.initialize();
        })["catch"](function (error) {
          _this.error = error.response.data.errors;
          if (error.response.data.status_code === 422) _this.dialog = true;
        });

        _this.$store.dispatch("updateLoading", false);
      }
    },
    saveType: function saveType() {
      var _this5 = this;

      var _this = this;

      var url = "/api/group/tag/type"; // 格式轉換

      _this.typeTransformFormat.content.customize = _this.editedItem.name;
      _this.typeTransformFormat.content = JSON.stringify(_this.typeTransformFormat.content);
      _this.typeTransformFormat.group_id = _this.editedItem.group_id;
      _this.typeTransformFormat.id = _this.editedItem.id;
      var params = _this.typeTransformFormat;

      if (this.editedIndex > -1) {
        axios.put(url + '/' + _this.editedItem.id, params).then(function (response) {
          if (response.status !== 204) return;

          _this5.initialize();
        })["catch"](function (error) {
          _this.error = error.response.data.errors;
          if (error.response.data.status_code === 422) _this.dialog = true;
        });

        _this.$store.dispatch("updateLoading", false); //

      } else {
        _this.dialog = true;
        axios.post(url, params).then(function (response) {
          if (response.status !== 204) return;

          _this.initialize();
        })["catch"](function (error) {
          _this.error = error.response.data.errors;
          if (error.response.data.status_code === 422) _this.dialog = true;
        });

        _this.$store.dispatch("updateLoading", false);
      }
    },
    tagTypeFormat: function tagTypeFormat(tagTypes) {
      var _this = this;

      return tagTypes.map(function (v) {
        var lang = _.last(_.words(_.toLower(localStorage.getItem('local'))));

        var content = JSON.parse(v.content); // tagType

        if (lang === 'us') lang = 'en';

        if (content.customize === null) {
          return {
            id: v.id,
            children: _this.tagFormat(v.tags, lang),
            name: _.find(content, function (v, k) {
              if (k === lang) return v;
            }),
            group_id: v.group_id
          };
        } else {
          return {
            id: v.id,
            name: content.customize,
            children: _this.tagFormat(v.tags, lang),
            group_id: v.group_id
          };
        }
      });
    },
    tagFormat: function tagFormat(tags, lang) {
      return tags.map(function (v) {
        var tagContent = JSON.parse(v.content); // tag

        var name = {};
        var description = {}; // 標籤名稱

        if (tagContent.name.customize === null) {
          name = {
            name: _.find(tagContent.name, function (v, k) {
              if (k === lang) return v;
            })
          };
        } else {
          name = {
            name: tagContent.name.customize
          };
        } // 標籤說明


        if (tagContent.description.customize === null) {
          description = {
            description: _.find(tagContent.description, function (v, k) {
              if (k === lang) return v;
            })
          };
        } else {
          description = {
            description: tagContent.description.customize
          };
        }

        return _.merge({
          id: v.id,
          'type_id': v.type_id
        }, name, description);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/group/Tag.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/group/Tag.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=e4548da2&scoped=true& */ "./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./resources/js/components/group/Tag.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e4548da2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/group/Tag.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/group/Tag.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/group/Tag.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_e4548da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=template&id=e4548da2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/Tag.vue?vue&type=template&id=e4548da2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        [
          _c("v-toolbar-title", [
            _vm._v(
              "\n            " + _vm._s(_vm.$t("tag.admin")) + "\n        "
            ),
          ]),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-4",
            attrs: { inset: "", vertical: "" },
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [
              _c(
                "v-icon",
                {
                  attrs: { large: "" },
                  on: {
                    click: function ($event) {
                      return _vm.createItem(0)
                    },
                  },
                },
                [_vm._v("\n                mdi-plus\n            ")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-treeview", {
            attrs: { hoverable: "", activatable: "", items: _vm.resources },
            scopedSlots: _vm._u([
              {
                key: "append",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    item.children
                      ? _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function ($event) {
                                return _vm.createItem(item.id)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    mdi-plus\n                "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "" },
                        on: {
                          click: function ($event) {
                            return _vm.editItem(item)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    mdi-pencil\n                "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        attrs: { small: "" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteItem(item)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    mdi-delete\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
              {
                key: "label",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("span", [_vm._v(_vm._s(item.name))]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "blue-grey--text text--lighten-3" },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.description) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "900px" },
              model: {
                value: _vm.dialog,
                callback: function ($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v(_vm._s(_vm.formTitle)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "error-messages": _vm.error.name,
                                      label: _vm.$t("tag.name"),
                                    },
                                    model: {
                                      value: _vm.editedItem.name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.editedItem, "name", $$v)
                                      },
                                      expression: "editedItem.name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
                                [
                                  !_vm.editedItem.hasOwnProperty("group_id")
                                    ? _c("v-text-field", {
                                        attrs: {
                                          "error-messages":
                                            _vm.error.description,
                                          label: _vm.$t("tag.description"),
                                        },
                                        model: {
                                          value: _vm.editedItem.description,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.description",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.close },
                        },
                        [_vm._v(_vm._s(_vm.$t("cancel")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.save },
                        },
                        [_vm._v(_vm._s(_vm.$t("submit")))]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);