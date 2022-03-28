"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_district_DistrictUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DistrictUser",
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      valid: true,
      search: '',
      headers: [],
      duty: [],
      status: [],
      resource: [],
      editedIndex: -1,
      editedItem: {
        abbr: null,
        districts_id: null,
        habook: null,
        member_duty: {
          text: this.$t('admin'),
          value: 'Admin'
        },
        // member_status: {text: this.$t('enable'), value: 1},
        name: null,
        user_id: null
      },
      defaultItem: {
        abbr: null,
        districts_id: null,
        habook: null,
        member_duty: {
          text: this.$t('admin'),
          value: 'Admin'
        },
        // member_status: {text: this.$t('enable'), value: 1},
        name: null,
        user_id: null
      },
      success: [],
      error: [],
      dutyRules: [function (v) {
        return !!v || _this2.$t('validate.duty_required');
      }],
      statusRules: [function (v) {
        return !!v || _this2.$t('validate.status_required');
      }],
      isSuccess: true
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? this.$t('create_user') : this.$t('editor_user');
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    'editedItem.habook': function editedItemHabook() {
      var _this3 = this;

      var url = "/api/district/user/exist";

      if (this.editedItem.habook != null) {
        axios.get(url, {
          params: {
            habook: encodeURI(this.editedItem.habook)
          }
        }).then(function (response) {
          _this3.error = [];
          _this3.success = response.status === 204 ? [_this3.$t('validate.add_success')] : '';

          _this3.validation();
        })["catch"](function (error) {
          _this3.success = [];
          _this3.error = error.response.status === 422 ? [_this3.$t('validate.user_not_exist')] : '';

          _this3.validation();
        });
      }
    },
    'editedItem.member_status': function editedItemMember_status() {
      this.validation();
    },
    'editedItem.member_duty': function editedItemMember_duty() {
      this.validation();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    // 這裡需要傳入頻道ID
    initialize: function initialize() {
      var _this4 = this;

      var districtId = this.$store.state.Auth.user.district_id;
      var url = "/api/district/".concat(districtId, "/user");

      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (response) {
        // 取回來的資料
        _this.resource = response.data.map(function (v) {
          return {
            name: v.name,
            abbr: v.abbr,
            habook: v.habook,
            member_duty: v.member_duty === 'Admin' ? {
              text: _this4.$t('admin'),
              value: 'Admin'
            } : v.member_duty === 'Expert' ? {
              text: _this4.$t('expert'),
              value: 'Expert'
            } : {
              text: _this4.$t('general'),
              value: 'General'
            },
            // member_status: (v.member_status === 1) ? {text: this.$t('enable'), value: 1} : {text: this.$t('disable'), value: 0},
            user_id: v.user_id,
            districts_id: v.districts_id
          };
        });

        _this.$store.dispatch("updateLoading", false);
      })["catch"](function (error) {
        console.log(error);
      });

      _this.defaultColumns();
    },
    defaultColumns: function defaultColumns() {
      var harder = [{
        text: this.$t('district_name'),
        value: 'abbr',
        align: 'left',
        sortable: false
      }, {
        text: this.$t('user_name'),
        value: 'name',
        sortable: false
      }, {
        text: this.$t('team_model_id'),
        value: 'habook'
      }, {
        text: this.$t('member_duty'),
        value: 'member_duty'
      }, // {text: this.$t('status'), value: 'member_status'},
      {
        text: this.$t('operation'),
        value: 'action',
        sortable: false
      }];
      var duty = [{
        text: this.$t('admin'),
        value: 'Admin'
      } // {text: this.$t('expert'), value: 'Expert'},
      // {text: this.$t('general'), value: 'General'}
      ];
      var status = [{
        text: this.$t('enable'),
        value: 1
      }, {
        text: this.$t('disable'),
        value: 0
      }];
      this.headers = harder;
      this.duty = duty;
      this.status = status;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.resource.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.isSuccess = false;
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var url = "/api/district/user/".concat(item.districts_id);

      var index = _this.resource.indexOf(item);

      if (confirm('Are you sure you want to delete this item?')) {
        _this.resource.splice(index, 1);

        _this.$store.dispatch("updateLoading", true);

        axios["delete"](url, {
          data: item
        }).then(function (response) {
          _this.$store.dispatch("updateLoading", false);
        });
      }
    },
    close: function close() {
      var _this5 = this;

      setTimeout(function () {
        _this5.dialog = false;
        _this5.isSuccess = true;
        _this5.success = [];
        _this5.error = [];
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this6 = this;

      var _this = this;

      var districtId = this.$store.state.Auth.user.district_id;

      if (this.editedIndex > -1) {
        // 編輯
        var url = "/api/district/user/".concat(districtId); // 格式轉換

        var obj = {
          member_duty: this.editedItem.member_duty.value // member_status: this.editedItem.member_status.value,

        }; // 合併修改

        var data = Object.assign({}, this.editedItem, obj);

        _this.$store.dispatch("updateLoading", true);

        axios.put(url, data).then(function (response) {
          _this.$store.dispatch("updateLoading", false);

          _this.$store.dispatch("updateAlert", true);
        });
        Object.assign(this.resource[this.editedIndex], this.editedItem); // console.log('編輯')

        return this.close();
      } else {
        _this.$store.dispatch("updateLoading", true); // 新增 格式轉換


        var _obj = {
          member_duty: this.editedItem.member_duty.value,
          // member_status: this.editedItem.member_status.value,
          districts_id: districtId
        }; // 合併修改

        var _data = Object.assign({}, this.editedItem, _obj);

        var _url = "/api/district/user/";
        axios.post(_url, _data).then(function (response) {
          response.status === 201 ? _this6.initialize() : response.status;

          _this.$store.dispatch("updateLoading", false);
        })["catch"](function (error) {// console.log(error.response)
        }); // console.log('新增')

        return this.close();
      }
    },
    validation: function validation() {
      if (this.error.length === 0 && this.editedItem.habook !== null) {
        this.isSuccess = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/district/DistrictUser.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/district/DistrictUser.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DistrictUser.vue?vue&type=template&id=42699182&scoped=true& */ "./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true&");
/* harmony import */ var _DistrictUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistrictUser.vue?vue&type=script&lang=js& */ "./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DistrictUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42699182",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/district/DistrictUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictUser_vue_vue_type_template_id_42699182_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictUser.vue?vue&type=template&id=42699182&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictUser.vue?vue&type=template&id=42699182&scoped=true& ***!
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
          items: _vm.resource,
          search: _vm.search,
          "sort-by": "habook",
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
                      _vm._v(_vm._s(_vm.$t("district_user"))),
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
                        attrs: { "max-width": "500px" },
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
                                  [_vm._v(" +")]
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
                                              sm: "12",
                                              md: "12",
                                            },
                                          },
                                          [
                                            _vm.editedIndex >= 0
                                              ? _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      _vm.$t("team_model_id"),
                                                    disabled: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.habook,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "habook",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.habook",
                                                  },
                                                })
                                              : _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages": _vm.error,
                                                    "success-messages":
                                                      _vm.success,
                                                    hint: "TeamModel ID",
                                                    label:
                                                      _vm.$t("team_model_id"),
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.habook,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "habook",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.habook",
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
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.duty,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label: _vm.$t("member_duty"),
                                                rules: _vm.dutyRules,
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.member_duty,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "member_duty",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.member_duty",
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
                                    attrs: {
                                      color: "blue darken-1",
                                      text: "",
                                      disabled: _vm.isSuccess,
                                    },
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
                  [_vm._v("edit")]
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
                  [_vm._v("delete")]
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
            key: "item.member_duty",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(item.member_duty.text) +
                    "\n        "
                ),
              ]
            },
          },
          {
            key: "item.member_status",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(item.member_status.text) +
                    "\n        "
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