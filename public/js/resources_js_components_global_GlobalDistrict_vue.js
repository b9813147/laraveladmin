"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_global_GlobalDistrict_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  name: "GlobalDistrict",
  data: function data() {
    return {
      resources: [],
      dialog: false,
      search: '',
      headers: [],
      langs: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        abbr: null,
        school_code: null,
        thumbnail: null,
        status: null,
        name: null,
        description: null,
        group_ids: []
      },
      defaultItem: {
        id: null,
        abbr: null,
        school_code: null,
        thumbnail: null,
        status: null,
        name: null,
        description: null,
        group_ids: []
      },
      status: {
        text: this.$t('enable'),
        value: 1
      },
      errors: {},
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v && v.length <= 30 || 'Name must be less than 30 characters';
      }],
      school_codeRules: [function (v) {
        return !!v || 'school_code is required';
      }, function (v) {
        return v && v.length <= 30 || 'Name must be less than 30 characters';
      }]
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? this.$t('create_district') : this.$t('editor_district');
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    '$route': 'initialize'
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this2 = this;

      var _this = this;

      var url = "/api/district";

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (response) {
        var data = response.data; //thum 顯示圖片用 沒有任何作用

        _this.resources = data.map(function (v) {
          return {
            'id': v.id,
            'abbr': v.abbr,
            'school_code': v.school_code,
            'thum': _.isEmpty(v.thumbnail) ? null : "".concat(_this2.$store.state.Path.district).concat(v.id, "/").concat(v.thumbnail, "?").concat(_.random(0, 9)),
            'status': v.status === 1 ? {
              text: _this2.$t('enable'),
              value: 1
            } : {
              text: _this2.$t('disable'),
              value: 0
            },
            'name': v.name,
            'description': v.description,
            'group_ids': v.group_ids
          };
        });

        _this.$store.dispatch("updateLoading", false);
      });

      _this.defaultColumns();
    },
    // 預設欄位
    defaultColumns: function defaultColumns() {
      var header = [{
        text: "".concat(this.$t('district_code')),
        value: 'abbr',
        align: 'left',
        sortable: false
      }, {
        text: "".concat(this.$t('school_code')),
        value: 'school_code',
        sortable: false
      }, {
        text: "".concat(this.$t('name')),
        value: 'name'
      }, {
        text: "".concat(this.$t('description')),
        value: 'description'
      }, {
        text: "".concat(this.$t('status')),
        value: 'status.text'
      }, {
        text: "".concat(this.$t('thumbnail')),
        value: 'thumbnail',
        sortable: false
      }, {
        text: "".concat(this.$t('operation')),
        value: 'action',
        sortable: false
      }];
      var status = [{
        text: this.$t('enable'),
        value: 1
      }, {
        text: this.$t('disable'),
        value: 0
      }];
      var langs = [{
        text: this.$t('tw'),
        value: 'tw'
      }, {
        text: this.$t('cn'),
        value: 'cn'
      }, {
        text: this.$t('en'),
        value: 'en'
      }];
      this.langs = langs;
      this.headers = header;
      this.status = status;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.resources.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    // deleteItem(item) {
    //   const index = this.resources.indexOf(item);
    //   confirm('Are you sure you want to delete this item?') && this.resources.splice(index, 1)
    // },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.errors = {};
        _this3.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this4 = this;

      var _this = this;

      var formData = new FormData();

      _this.$store.dispatch("updateLoading", true);

      if (this.editedIndex > -1) {
        var url = "/api/district/".concat(_this.editedItem.id); // 轉換格式

        var obj = {
          status: _this.editedItem.status.value,
          _method: 'put'
        };
        var config = {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        }; // 合併格式

        var data = Object.assign({}, this.editedItem, obj);

        if (_this.editedItem.thumbnail) {
          // console.log('有圖片');
          formData.append('thumbnail', _this.editedItem.thumbnail[0]);
        } // 更新


        console.log('editor');
        axios.post(url, formData, {
          params: data
        }, {
          config: config
        }).then(function (response) {
          _this.initialize();

          _this.$store.dispatch("updateLoading", false);
        });
        Object.assign(this.resources[this.editedIndex], this.editedItem);
        return this.close();
      } else {
        var _url = "/api/district"; // 轉換格式

        var _obj = {
          status: _this.editedItem.status.value,
          lang: _this.editedItem.lang.value
        };
        var _config = {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        }; // 合併格式

        var _data = Object.assign({}, this.editedItem, _obj);

        if (_this.editedItem.thumbnail) {
          formData.append('thumbnail', _this.editedItem.thumbnail[0]);
        }

        console.log('create');
        axios.post(_url, formData, {
          params: _data
        }, {
          config: _config
        }).then(function (response) {
          if (response.status !== 200) {
            return;
          }

          _this.initialize();

          _this4.resources.push(_this4.editedItem);

          _this.$store.dispatch("updateLoading", false);

          return _this4.close();
        })["catch"](function (error) {
          _this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/global/GlobalDistrict.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/global/GlobalDistrict.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true& */ "./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true&");
/* harmony import */ var _GlobalDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalDistrict.vue?vue&type=script&lang=js& */ "./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GlobalDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31db60a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/GlobalDistrict.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlobalDistrict.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalDistrict_vue_vue_type_template_id_31db60a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/GlobalDistrict.vue?vue&type=template&id=31db60a2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        [
          _c("v-text-field", {
            attrs: {
              "append-icon": "search",
              label: "Search",
              "single-line": "",
              "hide-details": "",
            },
            model: {
              value: _vm.search,
              callback: function ($$v) {
                _vm.search = $$v
              },
              expression: "search",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.resources,
          search: _vm.search,
          "sort-by": "calories",
          loading: this.$store.state.Status.isLoading,
          "loading-text": "Loading... Please wait",
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function () {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [
                      _vm._v(_vm._s(_vm.$t("event.districtManage"))),
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
                      "v-dialog",
                      {
                        attrs: { "max-width": "900px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function (ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "mb-2",
                                      attrs: { color: "primary", dark: "" },
                                    },
                                    on
                                  ),
                                  [_vm._v("+")]
                                ),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.dialog,
                          callback: function ($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog",
                        },
                      },
                      [
                        _vm._v(" "),
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
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                "error-messages":
                                                  _vm.errors.school_code,
                                                label: _vm.$t("school_code"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.school_code,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "school_code",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.school_code",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                "error-messages":
                                                  _vm.errors.abbr,
                                                label: _vm.$t("district_code"),
                                              },
                                              model: {
                                                value: _vm.editedItem.abbr,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "abbr",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.abbr",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                "error-messages":
                                                  _vm.errors.name,
                                                label: _vm.$t("district_name"),
                                              },
                                              model: {
                                                value: _vm.editedItem.name,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "name",
                                                    $$v
                                                  )
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
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("description"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.description,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "description",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.description",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("selectChannel"),
                                              },
                                              model: {
                                                value: _vm.editedItem.group_ids,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "group_ids",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.group_ids",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.status,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label: _vm.$t("status"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value: _vm.editedItem.status,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "status",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.status",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.editedIndex === -1
                                          ? _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "4",
                                                },
                                              },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.langs,
                                                    "item-text": "text",
                                                    "item-value": "value",
                                                    label: _vm.$t("language"),
                                                    "return-object": "",
                                                    required: "",
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.lang,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "lang",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.lang",
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "4",
                                            },
                                          },
                                          [
                                            _c("v-file-input", {
                                              attrs: {
                                                multiple: "",
                                                label: _vm.$t("thumbnail"),
                                              },
                                              model: {
                                                value: _vm.editedItem.thumbnail,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "thumbnail",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.thumbnail",
                                              },
                                            }),
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
              ]
            },
            proxy: true,
          },
          {
            key: "item.thumbnail",
            fn: function (ref) {
              var item = ref.item
              return [
                item.thum
                  ? _c("v-img", {
                      staticStyle: { width: "50px", height: "50px" },
                      attrs: { src: item.thum },
                    })
                  : _c("v-img", {
                      staticStyle: { width: "50px", height: "50px" },
                      attrs: { src: "/storage/error.png" },
                    }),
              ]
            },
          },
          {
            key: "item.action",
            fn: function (ref) {
              var item = ref.item
              return [
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
                  [_vm._v("\n                edit\n            ")]
                ),
              ]
            },
          },
          {
            key: "no-data",
            fn: function () {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize },
                  },
                  [_vm._v("Reset")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);