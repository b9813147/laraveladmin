"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_district_DistrictChannel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DistrictChannel",
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      dialog2: false,
      valid: true,
      search: '',
      headers: [],
      status: [],
      stages: [],
      grade: [],
      subjects: [],
      ratings: [],
      resource: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        rating: null
      },
      defaultItem: {
        id: null,
        rating: null
      },
      nameRules: [function (v) {
        return !!v || _this2.$t('validate.name_required');
      }],
      numberRules: [function (v) {
        return Number(v) <= 99 || _this2.$t('validate.maximum_value');
      }],
      success: [],
      error: [],
      isSuccess: true
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? this.$t('create_user') : this.$t('editor_channel_content');
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    'editedItem.name': function editedItemName() {
      this.editedItem.name === '' ? this.isSuccess = true : this.isSuccess = false;
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    // 這裡需要傳入頻道ID
    initialize: function initialize() {
      var districtId = this.$store.state.Auth.user.district_id;
      var url = "/api/district/channel/content/".concat(districtId);

      var _this = this;

      _this.$store.dispatch("updateLoading", true); // 無效不顯示  invalid (0, 0) 1
      // 頻道內觀摩  valid (1, 0)  2
      // 全平台分享  share (1, 1) 3
      // 尚待審核中  pending (2, 0) 4


      axios.get(url).then(function (response) {
        // 取回來的資料
        _this.resource = response.data.map(function (v) {
          return {
            id: v.id,
            name: v.name,
            // thum: (_.isEmpty(v.thumbnail)) ? null : `${this.$store.state.Path.tba}${v.id}/${v.thumbnail}?${_.random(0, 9)}`,
            // date: v.date,
            subject: v.subject,
            rating: v.rating,
            grade: v.grade // educational_stage_id: v.educational_stage_id,
            // description: v.description,
            // teacher: v.teacher,
            // user_id: this.$store.state.Auth.user.id,
            // tba_statistics: v.tba_statistics,
            // habook: v.habook_id

          };
        });

        _this.$store.dispatch("updateLoading", false);
      })["catch"](function (error) {
        console.log(error);
      });

      _this.defaultColumns(districtId);
    },
    defaultColumns: function defaultColumns(districtId) {
      var ratingUrl = "/api/district/rating/".concat(districtId);
      var harder = [{
        text: 'ID',
        value: 'id',
        align: 'left',
        sortable: false
      }, {
        text: this.$t('name'),
        value: 'name',
        sortable: false
      }, // {text: this.$t('teacher'), value: 'teacher', sortable: false},
      // {text: this.$t('status'), value: 'status', sortable: false},
      {
        text: this.$t('rating'),
        value: 'rating.text',
        sortable: false
      }, {
        text: this.$t('district_subject'),
        value: 'subject.text',
        sortable: false
      }, {
        text: this.$t('grade'),
        value: 'grade.text',
        sortable: false
      }, // {text: this.$t('video_thumbnail'), value: 'thumbnail', sortable: false},
      // {text: this.$t('create_at'), value: 'date'},
      {
        text: this.$t('operation'),
        value: 'action',
        sortable: false
      }];
      var status = [{
        text: this.$t('invalid'),
        value: 1
      }, {
        text: this.$t('valid'),
        value: 2
      }, {
        text: this.$t('share'),
        value: 3
      }, {
        text: this.$t('pending'),
        value: 4
      }];
      var grade = []; // axios.get(gradeUrl).then(response => {
      //     response.data.grades.map(v => {
      //         grade.push({text: v.name, value: v.id})
      //     });
      // });

      var subjects = []; // axios.get(subjectUrl).then(response => {
      //     response.data.subjects.map(v => {
      //         subjects.push({text: v.subject, value: v.id})
      //     });
      // });

      var ratings = [];
      axios.get(ratingUrl).then(function (response) {
        response.data.map(function (v) {
          ratings.push({
            text: v.name,
            value: v.id
          });
        });
      });
      this.headers = harder; // this.stages = stages;

      this.grade = grade;
      this.status = status;
      this.subjects = subjects;
      this.ratings = ratings;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.resource.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var url = "/api/district/channel/content/".concat(item.id);

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
      var _this3 = this;

      this.dialog = false;
      this.dialog2 = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      if (this.editedIndex > -1) {
        // 編輯
        var url = "/api/district/channel/content/".concat(this.editedItem.id); // 格式轉換

        var obj = {
          // grade: (_this.editedItem.grade === null || _this.editedItem.grade === undefined) ? 'Other' : _this.editedItem.grade.value,
          // educational_stage_id: _this.editedItem.educational_stage_id.value ? _this.editedItem.educational_stage_id.value : _this.editedItem.educational_stage_id,
          // status: isNaN(_this.editedItem.status) ? _this.editedItem.status.value : _this.editedItem.status,
          rating: isNaN(_this.editedItem.rating) ? _this.editedItem.rating.value : _this.editedItem.rating // subject: _this.editedItem.subject.value ? _this.editedItem.subject.value : _this.editedItem.subject,
          // subject: isNaN(_this.editedItem.subject) ? _this.editedItem.subject.value : _this.editedItem.subject

        }; // 合併修改

        var data = Object.assign({}, this.editedItem, obj); // console.log(data)

        axios.put(url, {
          params: data
        }).then(function (response) {
          console.log(response);

          _this.initialize();

          _this.$store.dispatch("updateLoading", false);
        });
        Object.assign(this.resource[this.editedIndex], this.editedItem);
        return this.close();
      }
    },
    // 無效不顯示  invalid (0, 0) 1
    // 頻道內觀摩  valid (1, 0)  2
    // 全平台分享  share (1, 1) 3
    // 尚待審核中  pending (2, 0) 4
    getColor: function getColor(status) {
      if (status.value === 1) return 'red';else if (status.value === 4) return 'orange';else return 'green';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/district/DistrictChannel.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/district/DistrictChannel.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true& */ "./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true&");
/* harmony import */ var _DistrictChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistrictChannel.vue?vue&type=script&lang=js& */ "./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DistrictChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12d4db82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/district/DistrictChannel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictChannel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictChannel_vue_vue_type_template_id_12d4db82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/district/DistrictChannel.vue?vue&type=template&id=12d4db82&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.$t("editor_channel_content"))),
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
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "6",
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.ratings,
                                                "item-text": "text",
                                                label: _vm.$t("rating"),
                                              },
                                              model: {
                                                value: _vm.editedItem.rating,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "rating",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.rating",
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
                  [_vm._v("edit")]
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
                _c(
                  "v-chip",
                  { attrs: { color: _vm.getColor(item.status), dark: "" } },
                  [_vm._v(_vm._s(item.status.text))]
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