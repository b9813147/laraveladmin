"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_district_District_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "District",
  data: function data() {
    return {
      dialog: false,
      headers: [],
      status: [],
      access: [],
      resource: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        school_code: null,
        abbr: null,
        name: null,
        status: null,
        // public: 0,
        thumbnail: null
      },
      defaultItem: {
        id: null,
        school_code: null,
        abbr: null,
        name: null,
        status: null,
        // public: 0,
        thumbnail: null
      }
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

      var districtId = this.$store.state.Auth.user.district_id;

      var _this = this;

      var url = "/api/district/".concat(districtId);

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (response) {
        // console.log(response)
        var data = response.data; //thum 顯示圖片用 沒有任何作用

        var CustomData = {
          id: data.id,
          abbr: data.abbr,
          name: data.name,
          school_code: data.school_code,
          thum: _.isEmpty(data.thumbnail) ? null : "".concat(_this2.$store.state.Path.district).concat(data.id, "/").concat(data.thumbnail, "?").concat(_.random(0, 9)) // status: (data.status === 1) ? {text: this.$t('enable'), value: 1} : {text: this.$t('disable'), value: 0},
          // public: (data.public === 1) ? {text: this.$t('open'), value: 1} : {text: this.$t('private'), value: 0},

        };
        _this.resource = [CustomData];

        _this.$store.dispatch("updateLoading", false);
      });

      _this.defaultColumns();
    },
    // 預設欄位
    defaultColumns: function defaultColumns() {
      var header = [{
        text: "".concat(this.$t('district_name')),
        value: 'name',
        sortable: false
      }, {
        text: "".concat(this.$t('district_code')),
        value: 'abbr',
        align: 'left',
        sortable: false
      }, // {text: `${this.$t('status')}`, value: 'status'},
      {
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
      var access = [{
        text: this.$t('open'),
        value: 1
      }, {
        text: this.$t('private'),
        value: 0
      }];
      var review_status = [{
        text: this.$t('enable'),
        value: 1
      }, {
        text: this.$t('disable'),
        value: 0
      }];
      this.headers = header;
      this.status = status;
      this.access = access;
      this.review_status = review_status;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.resource.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    // deleteItem(item) {
    //   const index = this.resource.indexOf(item);
    //   confirm('Are you sure you want to delete this item?') && this.resource.splice(index, 1)
    // },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this5 = this;

      if (this.editedIndex > -1) {
        var _this = this;

        var formData = new FormData();
        formData.append('_method', 'PUT');
        var url = "/api/district/".concat(_this.editedItem.id); // 轉換格式

        var obj = {// public: _this.editedItem.public.value,
          // status: _this.editedItem.status.value,
        };
        var config = {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        };
        delete this.editedItem.thum; // 合併格式

        var data = Object.assign({}, this.editedItem, obj);

        if (_this.editedItem.thumbnail) {
          // console.log('有圖片');
          formData.append('thumbnail', _this.editedItem.thumbnail[0]);
          axios.post(url, formData, {
            params: data
          }, {
            config: config
          }).then(function (response) {
            _this.initialize();

            _this.$store.dispatch("updateLoading", false);
          });
          Object.assign(this.resource[this.editedIndex], this.editedItem);
          return this.close();
        } // 純更新內容


        axios.post(url, formData, {
          params: data
        }, {
          config: config
        }).then(function (response) {
          _this.initialize();
        });
        Object.assign(this.resource[this.editedIndex], this.editedItem);
        return this.close();
      } else {
        // todo 尚未實作
        var _this4 = this;

        var _formData = new FormData();

        var _url = "/api/district"; // 轉換格式

        var _obj = {// public: _this.editedItem.public.value,
          // status: _this.editedItem.status.value,
          // review_status: _this.editedItem.review_status.value
        };
        var _config = {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        }; // 合併格式

        var _data = Object.assign({}, this.editedItem, _obj);

        if (_this4.editedItem.thumbnail) {
          _formData.append('thumbnail', _this4.editedItem.thumbnail[0]);

          axios.post(_url, _formData, {
            params: _data
          }, {
            config: _config
          }).then(function (response) {
            if (response.data.status !== 200) {
              return;
            }

            _this4.initialize();

            _this5.resource.push(_this5.editedItem);

            return _this5.close();
          })["catch"](function (error) {
            console.log(error);
          });
        } // 純更新內容


        axios.post(_url, _formData, {
          params: _data
        }, {
          config: _config
        }).then(function (response) {
          if (response.data.status !== 200) {
            return;
          }

          _this4.initialize();

          _this5.resource.push(_this5.editedItem);

          return _this5.close();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/district/District.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/district/District.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./District.vue?vue&type=template&id=4d157a58&scoped=true& */ "./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true&");
/* harmony import */ var _District_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./District.vue?vue&type=script&lang=js& */ "./resources/js/components/district/District.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _District_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d157a58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/district/District.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/district/District.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/district/District.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_District_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./District.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_District_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_District_vue_vue_type_template_id_4d157a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./District.vue?vue&type=template&id=4d157a58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/District.vue?vue&type=template&id=4d157a58&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.resource,
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
                      _vm._v(_vm._s(_vm.$t("district_manager"))),
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
                              return undefined
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
                                                label: _vm.$t("district_name"),
                                                disabled: "",
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
                                                label: _vm.$t("district_code"),
                                                disabled: "",
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
          {
            key: "item.status",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " + _vm._s(item.status.text) + "\n        "
                ),
              ]
            },
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