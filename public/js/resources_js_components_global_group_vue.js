"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_global_group_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
      search: '',
      headers: [],
      status: [],
      access: [],
      eventType: [],
      country: [],
      resources: [],
      langs: [],
      editedIndex: -1,
      editedItem: {
        school_code: null,
        name: null,
        description: null,
        abbr: null,
        country_code: null,
        school_upload_status: null,
        "public": null,
        thumbnail: null,
        groupId: null,
        review_status: null,
        public_note_status: null
      },
      defaultItem: {
        school_code: null,
        name: null,
        description: null,
        abbr: null,
        country_code: 886,
        school_upload_status: {
          text: this.$t('disable'),
          value: 0
        },
        "public": {
          text: this.$t('general'),
          value: 0
        },
        thumbnail: null,
        lang: {
          text: this.$t('tw'),
          value: 'tw'
        },
        groupId: null,
        review_status: {
          text: this.$t('disable'),
          value: 0
        },
        public_note_status: {
          text: this.$t('disable'),
          value: 0
        }
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
      return this.editedIndex === -1 ? this.$t('create_group') : this.$t('editor_group');
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

      // let groupId = this.$store.state.Auth.user.group_id;
      var _this = this;

      var url = "/api/group";

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (response) {
        var data = response.data; //thum 顯示圖片用 沒有任何作用

        _this.resources = data.map(function (v) {
          return {
            'school_code': v.school_code,
            'name': v.name,
            'description': v.description,
            'abbr': v.abbr,
            'country_code': v.country_code,
            'thum': _.isEmpty(v.thumbnail) ? null : "".concat(_this2.$store.state.Path.group).concat(v.id, "/").concat(v.thumbnail, "?").concat(_.random(0, 9)),
            'groupId': v.id,
            'review_status': v.review_status === '1' ? {
              text: _this2.$t('enable'),
              value: 1
            } : {
              text: _this2.$t('disable'),
              value: 0
            },
            'public_note_status': v.public_note_status === 1 ? {
              text: _this2.$t('enable'),
              value: 1
            } : {
              text: _this2.$t('disable'),
              value: 0
            },
            'school_upload_status': v.school_upload_status === 1 ? {
              text: _this2.$t('enable'),
              value: 1
            } : {
              text: _this2.$t('disable'),
              value: 0
            },
            'public': v["public"] === 2 ? {
              text: _this2.$t('public_welfare'),
              value: 2
            } : v["public"] === 1 ? {
              text: _this2.$t('activity'),
              value: 1
            } : {
              text: _this2.$t('general'),
              value: 0
            }
          };
        });

        _this.$store.dispatch("updateLoading", false);
      });

      _this.defaultColumns();
    },
    // 預設欄位
    defaultColumns: function defaultColumns() {
      var header = [{
        text: "".concat(this.$t('school_code')),
        value: 'school_code',
        align: 'left',
        sortable: false
      }, {
        text: "".concat(this.$t('channel_name')),
        value: 'name',
        sortable: false
      }, {
        text: "".concat(this.$t('description')),
        value: 'description',
        sortable: false
      }, // {text: `${this.$t('status')}`, value: 'status'},
      {
        text: "".concat(this.$t('event.eventType')),
        value: 'public.text'
      }, {
        text: "".concat(this.$t('channel_review')),
        value: 'review_status'
      }, {
        text: "".concat(this.$t('general_member_review')),
        value: 'public_note_status'
      }, {
        text: "".concat(this.$t('school_upload')),
        value: 'school_upload_status.text'
      }, {
        text: "".concat(this.$t('thumbnail')),
        value: 'thumbnail',
        sortable: false
      }, {
        text: "".concat(this.$t('operation')),
        value: 'action',
        sortable: false
      }];
      var eventType = [{
        text: this.$t('general'),
        value: 0
      }, {
        text: this.$t('activity'),
        value: 1
      }, {
        text: this.$t('public_welfare'),
        value: 2
      }];
      var country = [{
        text: 886,
        value: 886
      }, {
        text: 86,
        value: 86
      }, {
        text: 1,
        value: 1
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
      var access = [{
        text: this.$t('open'),
        value: 1
      }, {
        text: this.$t('private'),
        value: 0
      }];
      this.headers = header;
      this.status = status;
      this.langs = langs;
      this.access = access;
      this.eventType = eventType;
      this.country = country;
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
      var _this5 = this;

      if (this.editedIndex > -1) {
        var _this = this;

        var formData = new FormData();
        formData.append('_method', 'PUT');
        var url = "/api/group/".concat(_this.editedItem.groupId); // 轉換格式

        var obj = {
          "public": _this.editedItem["public"].value,
          // status: _this.editedItem.status.value,
          school_upload_status: _this.editedItem.school_upload_status.value,
          review_status: _this.editedItem.review_status.value,
          public_note_status: _this.editedItem.public_note_status.value
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
          axios.post(url, formData, {
            params: data
          }, {
            config: config
          }).then(function (response) {
            // console.log(response)
            _this.initialize();

            _this.$store.dispatch("updateLoading", false);
          });
          Object.assign(this.resources[this.editedIndex], this.editedItem);
          return this.close();
        } // console.log('沒圖片');
        // 純更新內容


        axios.post(url, formData, {
          params: data
        }, {
          config: config
        }).then(function (response) {
          // console.log(response)
          _this.initialize();
        });
        Object.assign(this.resources[this.editedIndex], this.editedItem);
        return this.close();
      } else {
        var _this4 = this;

        var _formData = new FormData();

        var _url = "/api/group"; // 轉換格式

        var _obj = {
          "public": _this4.editedItem["public"].value,
          // status: _this.editedItem.status.value,
          school_upload_status: _this4.editedItem.school_upload_status.value,
          review_status: _this4.editedItem.review_status.value,
          public_note_status: _this4.editedItem.public_note_status.value,
          lang: _this4.editedItem.lang.value
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

            _this5.resources.push(_this5.editedItem);

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

          _this5.resources.push(_this5.editedItem);

          return _this5.close();
        })["catch"](function (error) {
          _this4.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/global/group.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/global/group.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.vue?vue&type=template&id=7f04b144&scoped=true& */ "./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true&");
/* harmony import */ var _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.vue?vue&type=script&lang=js& */ "./resources/js/components/global/group.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f04b144",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/group.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/group.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/global/group.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7f04b144_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./group.vue?vue&type=template&id=7f04b144&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/group.vue?vue&type=template&id=7f04b144&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.$t("channel_manager"))),
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
                                            _vm.editedIndex !== -1
                                              ? _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages":
                                                      _vm.errors.school_code,
                                                    label:
                                                      _vm.$t("school_code"),
                                                    disabled: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .school_code,
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
                                                })
                                              : _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages":
                                                      _vm.errors.school_code,
                                                    label:
                                                      _vm.$t("school_code"),
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .school_code,
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
                                                  _vm.errors.name,
                                                label: _vm.$t("channel_name"),
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
                                                "error-messages":
                                                  _vm.errors.abbr,
                                                label: _vm.$t("abbr"),
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
                                              sm: "12",
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-textarea", {
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
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.country,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label: _vm.$t("country_code"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.country_code,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "country_code",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.country_code",
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
                                                items: _vm.eventType,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label:
                                                  _vm.$t("event.eventType"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value: _vm.editedItem.public,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "public",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.public",
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
                                                label: _vm.$t("school_upload"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem
                                                    .school_upload_status,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "school_upload_status",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.school_upload_status",
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
                                                label: _vm.$t("channel_review"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.review_status,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "review_status",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.review_status",
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
                                                label: _vm.$t(
                                                  "general_member_review"
                                                ),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem
                                                    .public_note_status,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "public_note_status",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.public_note_status",
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
                      attrs: {
                        src: "/images/app/tw/teammodel/original-black-small.png",
                      },
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
            key: "item.review_status",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(item.review_status.text) +
                    "\n        "
                ),
              ]
            },
          },
          {
            key: "item.public_note_status",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(item.public_note_status.text) +
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