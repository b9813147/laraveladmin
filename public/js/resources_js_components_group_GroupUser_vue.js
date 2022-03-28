"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_group_GroupUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      valid: true,
      search: '',
      headers: [],
      duty: [],
      status: [],
      resources: [],
      stats: [],
      qrcode: {
        url: '',
        dialog: false,
        date: {
          timestamp: 0,
          min: 0,
          sec: 0
        }
      },
      editedIndex: -1,
      editedItem: {
        group_name: null,
        habook: null,
        member_duty: {
          text: this.$t('general'),
          value: 'General'
        },
        member_status: {
          text: this.$t('enable'),
          value: 1
        },
        groupId: null,
        userId: null
      },
      defaultItem: {
        group_name: null,
        habook: null,
        member_duty: {
          text: this.$t('general'),
          value: 'General'
        },
        member_status: {
          text: this.$t('enable'),
          value: 1
        },
        groupId: null,
        userId: null
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
    'qrcode.dialog': function qrcodeDialog(val) {
      val || this.close();
    },
    'editedItem.habook': function editedItemHabook() {
      //     let url = `/api/group/user/exist/`;
      //     axios.get(url, {
      //         params: {
      //             group_id: this.editedItem.groupId, habook: this.editedItem.habook
      //         }
      //     }).then(response => {
      //         console.log(response.data);
      //         let result = response.data
      //         // this.error = result.status === 200 ? [] : result.status === 404 ? [result.message + this.$t('validate.user_not_exist')] : [result.message + this.$t('validate.user_exist')];
      //         // this.error = result.message;
      //         this.success = result.message;
      //         // this.success = result.status === 200 ? [result.message + this.$t('validate.add_success')] : '';
      this.validation(); //     })
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
      var _this3 = this;

      var groupId = this.$store.state.Auth.user.group_id;
      var groupUserUrl = "/api/group/".concat(groupId);

      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      axios.get(groupUserUrl).then(function (response) {
        // 預設值
        _this.defaultItem.group_name = response.data.name;
        _this.defaultItem.groupId = _this3.$store.state.Auth.user.group_id;
        _this.editedItem.groupId = _this3.$store.state.Auth.user.group_id; // 取回來的資料

        _this.resources = response.data.users.map(function (v) {
          return {
            name: "".concat(v.name, "(").concat(v.habook, ")"),
            habook: v.habook,
            member_duty: v.pivot.member_duty === 'Admin' ? {
              text: _this3.$t('admin'),
              value: 'Admin'
            } : v.pivot.member_duty === 'Expert' ? {
              text: _this3.$t('expert'),
              value: 'Expert'
            } : {
              text: _this3.$t('general'),
              value: 'General'
            },
            // member_status: (v.pivot.member_status === 1) ? {text: this.$t('enable'), value: 1} : {text: this.$t('disable'), value: 0},
            userId: v.pivot.user_id,
            groupId: response.data.id,
            created_at: v.created_at
          };
        });

        _this.$store.dispatch("updateLoading", false);
      })["catch"](function (error) {
        console.log(error);
      });

      _this.defaultColumns();
    },
    defaultColumns: function defaultColumns() {
      var harder = [// {text: this.$t('channel_name'), value: 'group_name', align: 'left', sortable: false},
      {
        text: this.$t('user_name'),
        value: 'name',
        sortable: true
      }, // {text: this.$t('team_model_id'), value: 'habook', sortable: true},
      {
        text: this.$t('member_duty'),
        value: 'member_duty.text',
        sortable: true
      }, {
        text: this.$t('member.join_at'),
        value: 'created_at',
        sortable: true
      }, {
        text: this.$t('operation'),
        value: 'action',
        sortable: false
      }];
      var duty = [{
        text: this.$t('admin'),
        value: 'Admin'
      }, {
        text: this.$t('expert'),
        value: 'Expert'
      }, {
        text: this.$t('general'),
        value: 'General'
      }];
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
      this.editedIndex = this.resources.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.isSuccess = false;
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var url = "/api/group/member/".concat(item.userId);

      var index = _this.resources.indexOf(item);

      if (confirm('Are you sure you want to delete this item?')) {
        _this.resources.splice(index, 1);

        _this.$store.dispatch("updateLoading", true);

        axios["delete"](url, {
          data: item
        }).then(function (response) {
          _this.$store.dispatch("updateLoading", false);
        });
      }
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      this.isSuccess = true;
      this.error = null;
      setTimeout(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.qrcode = Object.assign({}, {
          url: '',
          dialog: false,
          date: {
            min: 0,
            sec: 0,
            timestamp: 0
          }
        });
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this5 = this;

      var _this = this;

      if (this.editedIndex > -1) {
        // 編輯
        var url = "/api/group/member/".concat(this.editedItem.userId); // 格式轉換

        var obj = {
          member_duty: this.editedItem.member_duty.value,
          member_status: 1
        }; // 合併修改

        var data = Object.assign({}, this.editedItem, obj);

        _this.$store.dispatch("updateLoading", true);

        axios.put(url, data).then(function (response) {
          if (response.status === 204) {
            _this.$store.dispatch("updateLoading", false);

            Object.assign(_this5.resources[_this5.editedIndex], _this5.editedItem);

            _this.$store.dispatch("updateAlert", true);

            return _this5.close();
          }
        });
      } else {
        _this.$store.dispatch("updateLoading", true); // 新增 格式轉換


        var _obj = {
          member_duty: this.editedItem.member_duty.value,
          member_status: 1
        }; // 合併修改

        var _data = Object.assign({}, this.editedItem, _obj);

        var _url = "/api/group/member";
        axios.post(_url, _data).then(function (response) {
          if (response.status === 201 || response.status === 200) {
            _this5.initialize();

            _this.$store.dispatch("updateLoading", false);

            return _this5.close();
          }
        })["catch"](function (error) {
          _this.error = error.response.data.message;

          _this.$store.dispatch("updateLoading", false);
        });
      }
    },
    getQrcode: function getQrcode() {
      var _this6 = this;

      var groupId = this.$store.state.Auth.user.group_id;
      var url = "/api/group/qrcode/".concat(groupId);

      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      axios.get(url).then(function (response) {
        if (response.status === 201 || response.status === 200) {
          var result = response.data;
          var timestamp = new URL(result.url).searchParams.get('expires') * 1000;
          _this.qrcode.url = result.url;
          _this.qrcode.date.timestamp = timestamp;

          _this6.timeCalculation();

          _this.$store.dispatch("updateLoading", false);
        }
      })["catch"](function (error) {
        _this.error = error.response.data.message;

        _this.$store.dispatch("updateLoading", false);
      });
    },
    timeCalculation: function timeCalculation() {
      var _this = this;

      var runInterval = setInterval(function () {
        // 設置倒數計時: 結束時間 - 當前時間
        // 取消計時
        if (_this.qrcode.date.timestamp === 0) {
          clearInterval(runInterval);
          return;
        } // 當前時間


        var time = new Date();
        var nowTime = time.getTime(); // 獲取當前毫秒數

        var endTime = time.setTime(_this.qrcode.date.timestamp); //結束時間;
        // // 倒數計時: 差值

        var offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位

        var sec = parseInt(offsetTime % 60); // 秒

        sec = ("0" + sec).slice(-2);
        var min = parseInt(offsetTime / 60 % 60); // 分 ex: 90秒
        // // let hr = parseInt(offsetTime / 60 / 60); // 時

        _this.qrcode.date.min = min;
        _this.qrcode.date.sec = sec; // 取消計時

        if (_this.qrcode.date.min === 0 && _this.qrcode.date.sec === '00') {
          clearInterval(runInterval);
          return;
        }
      }, 1000);
    },
    validation: function validation() {
      if (this.editedItem.member_duty !== null && this.editedItem.member_status !== null && this.editedItem.habook !== null) {
        this.isSuccess = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/group/GroupUser.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/group/GroupUser.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupUser.vue?vue&type=template&id=20621ebf& */ "./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf&");
/* harmony import */ var _GroupUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupUser.vue?vue&type=script&lang=js& */ "./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/group/GroupUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupUser_vue_vue_type_template_id_20621ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupUser.vue?vue&type=template&id=20621ebf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupUser.vue?vue&type=template&id=20621ebf& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.$t("user_manager"))),
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
                        attrs: { "max-width": "350px" },
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
                                      staticClass: "mx-2",
                                      attrs: { color: "primary", dark: "" },
                                      on: { click: _vm.getQrcode },
                                    },
                                    on
                                  ),
                                  [_vm._v("Qrcode")]
                                ),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.qrcode.dialog,
                          callback: function ($$v) {
                            _vm.$set(_vm.qrcode, "dialog", $$v)
                          },
                          expression: "qrcode.dialog",
                        },
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-card",
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "justify-center" },
                              [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v(_vm._s(_vm.$t("group.qrcode"))),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "v-container",
                                  { staticClass: "justify-center" },
                                  [
                                    _c("qr-code", {
                                      attrs: {
                                        text: _vm.qrcode.url,
                                        size: 278,
                                        "error-level": "L",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm.qrcode.date.min +
                                            ":" +
                                            _vm.qrcode.date.sec
                                        ) +
                                        "\n                                "
                                    ),
                                    _vm.qrcode.date.sec === "00"
                                      ? _c(
                                          "v-icon",
                                          {
                                            attrs: { size: "16" },
                                            on: { click: _vm.getQrcode },
                                          },
                                          [_vm._v("mdi-refresh")]
                                        )
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
                                      staticClass: "mx-2",
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
                                              sm: "6",
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("channel_name"),
                                                disabled: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.defaultItem.group_name,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.defaultItem,
                                                    "group_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "defaultItem.group_name",
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
                                              : _c("v-textarea", {
                                                  attrs: {
                                                    "error-messages": _vm.error,
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