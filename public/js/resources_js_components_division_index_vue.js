"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_division_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import AppNotification from '../app/Notification';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: this.$t('division.title'),
        align: 'start',
        sortable: false,
        value: 'title'
      }, {
        text: this.$t('division.review'),
        align: 'start',
        sortable: false,
        value: 'users'
      }, {
        text: this.$t('division.lesson'),
        align: 'start',
        sortable: false,
        value: 'tbas'
      }, {
        text: this.$t('division.operation'),
        value: 'actions',
        sortable: false
      }],
      resources: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        group_id: 0,
        users: [],
        tbas: []
      },
      defaultItem: {
        title: '',
        group_id: 0,
        users: [],
        tbas: []
      },
      reviewList: [],
      lessonList: [],
      lessonInit: [],
      selectedReview: [],
      selectedLesson: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      var _this2 = this;

      // 新增排除以選的名單
      // 編輯顯示各組可選的名單
      if (this.editedIndex === -1) {
        this.lessonList = _.filter(this.lessonInit, function (v) {
          if (v.division_id === null) {
            return v;
          }
        });
      } else {
        this.lessonList = _.filter(this.lessonInit, function (v) {
          if (v.division_id === _this2.editedItem.id || v.division_id === null) {
            return v;
          }
        });
      }

      return this.editedIndex === -1 ? this.$t('division.create') : this.$t('division.edit');
    },
    likesAllReview: function likesAllReview() {
      return this.selectedReview.length === this.reviewList.length;
    },
    likesSomeReview: function likesSomeReview() {
      return this.selectedReview.length > 0 && !this.likesAllReview;
    },
    icon: function icon() {
      if (this.likesAllReview) return 'mdi-close-box';
      if (this.likesSomeReview) return 'mdi-minus-box';
      if (this.likesAllLesson) return 'mdi-close-box';
      if (this.likesSomeLesson) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    },
    likesAllLesson: function likesAllLesson() {
      return this.selectedLesson.length === this.lessonList.length;
    },
    likesSomeLesson: function likesSomeLesson() {
      return this.selectedLesson.length > 0 && !this.likesAllLesson;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.$store.dispatch("updateLoading", true);
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      var group_id = this.$store.state.Auth.user.group_id;
      var url = "/api/group/division/".concat(group_id);
      axios.get(url).then(function (response) {
        var result = response.data;
        _this.resources = result.divisions;
        _this.reviewList = result.users;
        _this.lessonList = result.tbas;
        _this.lessonInit = result.tbas;

        _this.$store.dispatch("updateLoading", false); // console.log(result.tbas)

      })["catch"](function (e) {
        console.log(e.message);
      });
    },
    editItem: function editItem(item) {
      var _this3 = this;

      this.editedIndex = this.resources.indexOf(item);
      this.editedItem = Object.assign({}, item); // 已選取的評審

      _.forEach(item.users, function (v) {
        _this3.selectedReview.push(v.id);
      }); // 已選取的課例


      _.forEach(item.tbas, function (v) {
        _this3.selectedLesson.push(v.content_id);
      });

      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.$store.dispatch("updateLoading", true);
      this.editedIndex = this.resources.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this4 = this;

      var _this = this;

      this.$store.dispatch("updateLoading", true);
      var url = "/api/group/division/";
      axios["delete"](url + _this.editedItem.id).then(function (response) {
        _this4.initialize();
      })["catch"](function (e) {// console.log(e.message);
      });
      this.$store.dispatch("updateLoading", true); // Object.assign(this.resources[this.editedIndex], data)

      this.resources.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.lessonList = _this5.lessonInit;
        _this5.selectedLesson = [];
        _this5.selectedReview = [];
        _this5.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this6 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      });
    },
    save: function save() {
      var _this7 = this;

      var _this = this;

      this.$store.dispatch("updateLoading", true);
      var group_id = this.$store.state.Auth.user.group_id;
      var url = "/api/group/division/"; // 轉換格式

      var obj = {
        tbas: this.selectedLesson,
        users: this.selectedReview,
        group_id: group_id
      }; // 合併格式

      var data = Object.assign({}, this.editedItem, obj);

      if (this.editedIndex > -1) {
        axios.put(url + _this.editedItem.id, data).then(function (response) {
          _this7.initialize();

          _this7.$store.dispatch("updateLoading", false);
        })["catch"](function (e) {// console.log(e.message);
        }); // Object.assign(this.resources[this.editedIndex], data)
      } else {
        axios.post(url, data).then(function (response) {
          _this7.initialize();

          _this7.$store.dispatch("updateLoading", false);
        })["catch"](function (e) {
          console.log(e.message);
        }); // this.resources.push(data)
      }

      this.close();
    },
    toggleByLesson: function toggleByLesson() {
      var _this8 = this;

      this.$nextTick(function () {
        if (_this8.likesAllLesson) {
          _this8.selectedLesson = [];
        } else {
          _this8.selectedLesson = _.map(_this8.lessonList, 'content_id');
        }
      });
    },
    toggleByReview: function toggleByReview() {
      var _this9 = this;

      this.$nextTick(function () {
        if (_this9.likesAllReview) {
          _this9.selectedReview = [];
        } else {
          _this9.selectedReview = _.map(_this9.reviewList, 'id');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".long-text[data-v-a076400a] {\n  white-space: nowrap;\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a076400a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a076400a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a076400a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/division/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/division/index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a076400a&scoped=true& */ "./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/division/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_a076400a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& */ "./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a076400a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/division/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/division/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/division/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a076400a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=style&index=0&id=a076400a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a076400a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=a076400a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/division/index.vue?vue&type=template&id=a076400a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.resources,
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
                  { attrs: { flat: "" } },
                  [
                    _c("v-toolbar-title", [
                      _vm._v(_vm._s(_vm.$t("division.admin"))),
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
                        attrs: { "max-width": "600px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function (ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticClass: "mb-2",
                                        attrs: { color: "primary", dark: "" },
                                      },
                                      "v-btn",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.$t("division.create")) +
                                        "\n                        "
                                    ),
                                  ]
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
                              _c("span", { staticClass: "text-h5" }, [
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
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("division.title"),
                                              },
                                              model: {
                                                value: _vm.editedItem.title,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "title",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.title",
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
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.reviewList,
                                                label:
                                                  _vm.$t("division.review"),
                                                "item-value": "id",
                                                "item-text": "name",
                                                multiple: "",
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "prepend-item",
                                                  fn: function () {
                                                    return [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: { ripple: "" },
                                                          on: {
                                                            click:
                                                              _vm.toggleByReview,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-action",
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      _vm
                                                                        .selectedReview
                                                                        .length >
                                                                      0
                                                                        ? "indigo darken-4"
                                                                        : "",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.icon
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "division.all"
                                                                        )
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("v-divider", {
                                                        staticClass: "mt-2",
                                                      }),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                                {
                                                  key: "append-item",
                                                  fn: function () {
                                                    return [
                                                      _c("v-divider", {
                                                        staticClass: "mb-2",
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            disabled: "",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-avatar",
                                                            {
                                                              attrs: {
                                                                color:
                                                                  "grey lighten-3",
                                                              },
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "\n                                                            mdi-food-apple\n                                                        "
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "division.review"
                                                                        ) +
                                                                          _vm.$t(
                                                                            "division.count"
                                                                          )
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item-subtitle",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .selectedReview
                                                                          .length
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
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
                                              ]),
                                              model: {
                                                value: _vm.selectedReview,
                                                callback: function ($$v) {
                                                  _vm.selectedReview = $$v
                                                },
                                                expression: "selectedReview",
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
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.lessonList,
                                                label:
                                                  _vm.$t("division.lesson"),
                                                "item-value": "content_id",
                                                "item-text": "name",
                                                multiple: "",
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "prepend-item",
                                                  fn: function () {
                                                    return [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: { ripple: "" },
                                                          on: {
                                                            click:
                                                              _vm.toggleByLesson,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-action",
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      _vm
                                                                        .selectedLesson
                                                                        .length >
                                                                      0
                                                                        ? "indigo darken-4"
                                                                        : "",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.icon
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "division.all"
                                                                        )
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("v-divider", {
                                                        staticClass: "mt-2",
                                                      }),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                                {
                                                  key: "append-item",
                                                  fn: function () {
                                                    return [
                                                      _c("v-divider", {
                                                        staticClass: "mb-2",
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            disabled: "",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-avatar",
                                                            {
                                                              attrs: {
                                                                color:
                                                                  "grey lighten-3",
                                                              },
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "\n                                                            mdi-food-apple\n                                                        "
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "division.review"
                                                                        ) +
                                                                          _vm.$t(
                                                                            "division.count"
                                                                          )
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item-subtitle",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .selectedLesson
                                                                          .length
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
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
                                              ]),
                                              model: {
                                                value: _vm.selectedLesson,
                                                callback: function ($$v) {
                                                  _vm.selectedLesson = $$v
                                                },
                                                expression: "selectedLesson",
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
                                  [_vm._v(_vm._s(_vm.$t("model.cancel")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.save },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("model.submit")))]
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
                        model: {
                          value: _vm.dialogDelete,
                          callback: function ($$v) {
                            _vm.dialogDelete = $$v
                          },
                          expression: "dialogDelete",
                        },
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", { staticClass: "text-h5" }, [
                              _vm._v(
                                "Are you sure you want to delete this item?"
                              ),
                            ]),
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
                                    on: { click: _vm.closeDelete },
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.deleteItemConfirm },
                                  },
                                  [_vm._v("OK")]
                                ),
                                _vm._v(" "),
                                _c("v-spacer"),
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
            key: "item.users",
            fn: function (ref) {
              var item = ref.item
              return _vm._l(item.users, function (user) {
                return _c(
                  "div",
                  { staticClass: "long-text" },
                  [
                    _c("v-icon", [_vm._v("mdi-account")]),
                    _vm._v(
                      "\n                " +
                        _vm._s(user.name) +
                        "\n            "
                    ),
                  ],
                  1
                )
              })
            },
          },
          {
            key: "item.tbas",
            fn: function (ref) {
              var item = ref.item
              return _vm._l(item.tbas, function (tba) {
                return _c(
                  "div",
                  { staticClass: "long-text" },
                  [
                    _c("v-icon", [_vm._v("mdi-book-open")]),
                    _vm._v(
                      "\n                " + _vm._s(tba.name) + "\n            "
                    ),
                  ],
                  1
                )
              })
            },
          },
          {
            key: "item.actions",
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
                  [_vm._v("\n                mdi-pencil\n            ")]
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
                  [_vm._v("\n                mdi-delete\n            ")]
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
                  [_vm._v("\n                Reset\n            ")]
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