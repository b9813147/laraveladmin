"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_group_GroupChannel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GroupChannel",
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      dialog2: false,
      statusDialog: false,
      shareDialog: false,
      valid: true,
      search: '',
      headers: [],
      status: [],
      stages: [],
      grade: [],
      subjects: [],
      ratings: [],
      result: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        name: null,
        thumbnail: null,
        HiTeachNote: null,
        LessonPlan: null,
        Material: null,
        date: null,
        alias: null,
        rating: null,
        grade: null,
        teacher: null,
        description: null,
        user_id: null,
        habook: null,
        course_core: null,
        observation_focus: null
      },
      defaultItem: {
        id: null,
        name: null,
        status: null,
        thumbnail: null,
        HiTeachNote: null,
        LessonPlan: null,
        Material: null,
        date: null,
        subject: null,
        rating: null,
        grade: null,
        teacher: null,
        description: null,
        user_id: null,
        habook: null,
        course_core: null,
        observation_focus: null
      },
      editedItemScore: {
        tba_id: null,
        user_id: null,
        textbook_practice: 0,
        instructional_design: 0,
        teaching_process: 0,
        teaching_effect: 0,
        technology_application: 0,
        fusion_Innovation: 0
      },
      defaultItemScore: {
        textbook_practice: 0,
        instructional_design: 0,
        teaching_process: 0,
        teaching_effect: 0,
        technology_application: 0,
        fusion_Innovation: 0
      },
      nameRules: [function (v) {
        return !!v || _this2.$t('validate.name_required');
      }],
      numberRules: [function (v) {
        return Number(v) <= 99 || _this2.$t('validate.maximum_value');
      }],
      success: [],
      error: [],
      isSuccess: true,
      groupList: {},
      shareGroupId: null,
      checkbox: false
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
    },
    'editedItemScore.teaching_process': function editedItemScoreTeaching_process() {
      this.operation();
    },
    'editedItemScore.instructional_design': function editedItemScoreInstructional_design() {
      this.operation();
    },
    'editedItemScore.fusion_Innovation': function editedItemScoreFusion_Innovation() {
      this.operation();
    },
    'editedItemScore.technology_application': function editedItemScoreTechnology_application() {
      this.operation();
    },
    'editedItemScore.teaching_effect': function editedItemScoreTeaching_effect() {
      this.operation();
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
      var groupChannelUrl = "/api/group/channel/content/".concat(groupId);

      var _this = this;

      _this.$store.dispatch("updateLoading", true); // 無效不顯示  invalid (0, 0) 1
      // 頻道內觀摩  valid (1, 0)  2
      // 全平台分享  share (1, 1) 3
      // 尚待審核中  pending (2, 0) 4


      axios.get(groupChannelUrl).then(function (response) {
        // 取回來的資料
        _this.result = response.data.map(function (v) {
          return {
            id: v.id,
            name: v.name,
            status: _this3.statusDisplay(v.status),
            thum: _.isEmpty(v.thumbnail) ? null : "".concat(_this3.$store.state.Path.tba).concat(v.id, "/").concat(v.thumbnail, "?").concat(_.random(0, 9)),
            date: v.date,
            alias: v.alias,
            rating: v.rating,
            grade: v.grade,
            course_core: v.course_core,
            observation_focus: v.observation_focus,
            share_status: v.share_status,
            // educational_stage_id: v.educational_stage_id,
            description: v.description,
            teacher: v.teacher,
            user_id: _this3.$store.state.Auth.user.id,
            tba_statistics: v.tba_statistics,
            habook: v.habook_id
          };
        });

        _this.$store.dispatch("updateLoading", false);
      })["catch"](function (error) {
        console.log(error);
      });

      _this.defaultColumns();
    },
    defaultColumns: function defaultColumns() {
      var groupId = this.$store.state.Auth.user.group_id;
      var subjectUrl = "/api/group/subjects/".concat(groupId);
      var ratingUrl = "/api/group/rating/".concat(groupId);
      var gradeUrl = '/api/group/grade/lang';
      var harder = [{
        text: this.$t('lesson_id'),
        value: 'id',
        align: 'left',
        sortable: false
      }, {
        text: this.$t('name'),
        value: 'name',
        sortable: false
      }, {
        text: this.$t('teacher'),
        value: 'teacher',
        sortable: false
      }, {
        text: this.$t('teamModelId'),
        value: 'habook',
        sortable: false
      }, {
        text: this.$t('status'),
        value: 'status',
        sortable: false
      }, {
        text: this.$t('rating'),
        value: 'rating.text',
        sortable: false
      }, {
        text: this.$t('alias'),
        value: 'alias.text',
        sortable: false
      }, {
        text: this.$t('grade'),
        value: 'grade.text',
        sortable: false
      }, {
        text: this.$t('video_thumbnail'),
        value: 'thumbnail',
        sortable: false
      }, {
        text: this.$t('create_at'),
        value: 'date'
      }, {
        text: this.$t('operation'),
        value: 'action',
        sortable: false
      }];
      var status = [// {text: this.$t('invalid'), value: 1},
      {
        text: this.$t('valid'),
        value: 2
      }, {
        text: this.$t('share'),
        value: 3
      }, {
        text: this.$t('pending'),
        value: 4
      }]; // const stages = [
      //     {text: this.$t('Preschool'), value: 1},
      //     {text: this.$t('primary_school'), value: 2},
      //     {text: this.$t('middle_school'), value: 3},
      //     {text: this.$t('high_school'), value: 4},
      //     {text: this.$t('higher_vocational'), value: 5},
      //     {text: this.$t('University'), value: 6}
      // ];

      var grade = [];
      axios.get(gradeUrl).then(function (response) {
        response.data.grades.map(function (v) {
          grade.push({
            text: v.name,
            value: v.id
          });
        });
      });
      var subjects = [];
      axios.get(subjectUrl).then(function (response) {
        response.data.subjects.map(function (v) {
          subjects.push({
            text: v.alias,
            value: v.id
          });
        });
      });
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
      this.editedIndex = this.result.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    editCount: function editCount(item) {
      var _this4 = this;

      this.editedItemScore = Object.assign({}, this.defaultItemScore);
      this.editedItemScore.tba_id = item.id;
      this.editedItemScore.user_id = this.$store.state.Auth.user.id;
      item.tba_statistics.forEach(function (i) {
        if (i.type === 55) {
          _this4.editedItemScore.textbook_practice = i.idx;
        }

        if (i.type === 56) {
          _this4.editedItemScore.instructional_design = i.idx * 100;
        }

        if (i.type === 57) {
          _this4.editedItemScore.teaching_process = i.idx * 100;
        }

        if (i.type === 58) {
          _this4.editedItemScore.teaching_effect = i.idx * 100;
        }

        if (i.type === 59) {
          _this4.editedItemScore.technology_application = i.idx * 100;
        }

        if (i.type === 60) {
          _this4.editedItemScore.fusion_Innovation = i.idx * 100;
        }
      }); // this.editedIndex = this.result.indexOf(item);
      // 0.95 +0.95+0.95+0.95+0.93  * 100

      this.dialog2 = true;
    },
    editStatus: function editStatus(item) {
      var _this = this;

      this.editedIndex = this.result.indexOf(item);
      this.editedItem = Object.assign({}, item);
      _this.statusDialog = true;
    },
    saveCount: function saveCount() {
      var _this5 = this;

      var url = "/api/group/channel/content/";

      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      axios.put(url, {
        data: _this.editedItemScore
      }).then(function (response) {
        setTimeout(function () {
          _this5.initialize();
        }, 300);
        _this5.dialog2 = false;
      });
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var groupId = this.$store.state.Auth.user.group_id;
      var url = "/api/group/channel/content/".concat(groupId);

      var index = _this.result.indexOf(item);

      if (confirm('Are you sure you want to delete this item?')) {
        _this.result.splice(index, 1);

        _this.$store.dispatch("updateLoading", true);

        axios["delete"](url, {
          data: item
        }).then(function (response) {
          _this.$store.dispatch("updateLoading", false);
        });
      }
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      this.dialog2 = false;
      this.statusDialog = false;
      this.shareDialog = false;
      setTimeout(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var groupId = this.$store.state.Auth.user.group_id;

      var _this = this;

      if (this.editedIndex > -1) {
        // 編輯
        var url = "/api/group/channel/content/".concat(groupId); // 格式轉換

        var obj = {
          grade: _this.editedItem.grade === null || _this.editedItem.grade === undefined ? 'Other' : _this.editedItem.grade.value,
          // educational_stage_id: _this.editedItem.educational_stage_id.value ? _this.editedItem.educational_stage_id.value : _this.editedItem.educational_stage_id,
          status: isNaN(_this.editedItem.status) ? _this.editedItem.status.value : _this.editedItem.status,
          rating: isNaN(_this.editedItem.rating) ? _this.editedItem.rating.value : _this.editedItem.rating !== null ? _this.editedItem.rating : _.minBy(this.ratings, function (v) {
            return v.value;
          }).value,
          // subject: _this.editedItem.subject.value ? _this.editedItem.subject.value : _this.editedItem.subject,
          // 這裡續注意 不論新增或修改學科 只會改 alias
          subject: isNaN(_this.editedItem.alias) ? _this.editedItem.alias.value : _this.editedItem.alias
        };
        var formData = new FormData();

        if (_this.editedItem.thumbnail) {
          formData.append('thumbnail', _this.editedItem.thumbnail[0]);
        }

        if (_this.editedItem.HiTeachNote) {
          formData.append('HiTeachNote', _this.editedItem.HiTeachNote[0]);
        }

        if (_this.editedItem.LessonPlan) {
          formData.append('LessonPlan', _this.editedItem.LessonPlan[0]);
        }

        if (_this.editedItem.Material) {
          formData.append('Material', _this.editedItem.Material[0]);
        } // 合併修改


        var data = Object.assign({}, this.editedItem, obj);

        _this.$store.dispatch("updateLoading", true);

        axios.post(url, formData, {
          params: data
        }, {
          config: config
        }).then(function (response) {
          _this.initialize();

          _this.$store.dispatch("updateLoading", false);
        });
        Object.assign(this.result[this.editedIndex], this.editedItem); // console.log('編輯')

        return this.close();
      } else {// _this.$store.dispatch("updateLoading", true);
        // // 新增 格式轉換
        // const obj = {
        //     grade: this.editedItem.grade.value,
        //     educational_stage_id: this.editedItem.educational_stage_id.value,
        //     status: this.editedItem.status.value,
        // };
        // // 合併修改
        // const data = Object.assign({}, this.editedItem, obj);
        // let url = `/api/group/member`;
        // axios.post(url, data)
        //     .then((response) => {
        //         response.data.status !== 401 ? this.initialize() : response.data.status.message;
        //         _this.$store.dispatch("updateLoading", false);
        //     }).catch((error) => {
        //     console.log(error)
        // });
        // // console.log('新增')
        // return this.close()
      }
    },
    // 無效不顯示  invalid (0, 0) 1
    // 頻道內觀摩  valid (1, 0)  2
    // 全平台分享  share (1, 1) 3
    // 尚待審核中  pending (2, 0) 4
    getColor: function getColor(status) {
      if (status.value === 1) return 'red';else if (status.value === 4) return 'orange';else return 'green';
    },
    operation: function operation() {
      this.editedItemScore.textbook_practice = Math.round((Number(this.editedItemScore.teaching_process) + Number(this.editedItemScore.instructional_design) + Number(this.editedItemScore.fusion_Innovation) + Number(this.editedItemScore.technology_application) + Number(this.editedItemScore.teaching_effect)) * 0.01 / 5 * 100);
    },
    getLessonPlayer: function getLessonPlayer(item) {
      var groupId = this.$store.state.Auth.user.group_id;
      var url = "/api/group/lesson/example/".concat(groupId);
      axios.post(url, {
        data: item
      }).then(function (response) {
        window.open(response.data.url);
      });
    },
    getUserGroupInfo: function getUserGroupInfo() {
      var _this = this;

      var userUrl = "/api/group/member/".concat(_this.$store.state.Auth.user.id);
      axios.get(userUrl).then(function (response) {
        _this.groupList = response.data.groups.map(function (v) {
          return {
            'value': v.id,
            'text': v.name
          };
        });
      });
    },
    statusDisplay: function statusDisplay(status) {
      switch (status) {
        case 2:
          return {
            text: this.$t('valid'),
            value: 2
          };

        case 3:
          return {
            text: this.$t('share'),
            value: 3
          };

        default:
          return {
            text: this.$t('pending'),
            value: 4
          };
      }
    },
    shareVideo: function shareVideo(item) {
      var _this = this;

      this.editedIndex = this.result.indexOf(item);
      this.editedItem = Object.assign({}, item);
      _this.shareDialog = true;
    },
    saveShareVideo: function saveShareVideo() {
      var _this = this;

      _this.$store.dispatch("updateLoading", true);

      var url = "/api/group/share/channel/content/".concat(this.shareGroupId.value);
      axios.post(url, {
        params: this.editedItem
      }).then(function (response) {
        if (response.status !== 201) {
          alert('Sharing failed');
        }

        _this.$store.dispatch("updateLoading", false);
      });
      return this.close();
    }
  },
  mounted: function mounted() {
    this.getUserGroupInfo();
  }
});

/***/ }),

/***/ "./resources/js/components/group/GroupChannel.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/group/GroupChannel.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true& */ "./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true&");
/* harmony import */ var _GroupChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupChannel.vue?vue&type=script&lang=js& */ "./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a3090a82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/group/GroupChannel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupChannel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupChannel_vue_vue_type_template_id_a3090a82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/group/GroupChannel.vue?vue&type=template&id=a3090a82&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.result,
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
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.nameRules,
                                                label: _vm.$t("name"),
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
                                              cols: "6",
                                              sm: "6",
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                "item-text": "text",
                                                label: _vm.$t("teacher"),
                                              },
                                              model: {
                                                value: _vm.editedItem.teacher,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "teacher",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.teacher",
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
                                              cols: "6",
                                              sm: "6",
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("team_model_id"),
                                              },
                                              model: {
                                                value: _vm.editedItem.habook,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "habook",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.habook",
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
                                              cols: "6",
                                              sm: "6",
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: _vm.$t("course_core"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.course_core,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "course_core",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.course_core",
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
                                              cols: "6",
                                              sm: "6",
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label:
                                                  _vm.$t("observation_focus"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem
                                                    .observation_focus,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "observation_focus",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.observation_focus",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-textarea", {
                                              attrs: {
                                                rows: "10",
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
                                              md: "6",
                                            },
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.subjects,
                                                "item-text": "text",
                                                label: _vm.$t("alias"),
                                              },
                                              model: {
                                                value: _vm.editedItem.alias,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "alias",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.alias",
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
                                                items: _vm.grade,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label: _vm.$t("grade"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value: _vm.editedItem.grade,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "grade",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.grade",
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
                                        _vm._v(" "),
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
                                            _c("v-file-input", {
                                              attrs: {
                                                multiple: "",
                                                label:
                                                  _vm.$t("video_thumbnail"),
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
                                        _vm._v(" "),
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
                                            _c("v-file-input", {
                                              attrs: {
                                                multiple: "",
                                                label: _vm.$t("HiTeachNote"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.HiTeachNote,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "HiTeachNote",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.HiTeachNote",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-file-input", {
                                              attrs: {
                                                multiple: "",
                                                label: _vm.$t("LessonPlan"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItem.LessonPlan,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "LessonPlan",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.LessonPlan",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-file-input", {
                                              attrs: {
                                                multiple: "",
                                                label: _vm.$t("Material"),
                                              },
                                              model: {
                                                value: _vm.editedItem.Material,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "Material",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.Material",
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
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "350px" },
                        model: {
                          value: _vm.dialog2,
                          callback: function ($$v) {
                            _vm.dialog2 = $$v
                          },
                          expression: "dialog2",
                        },
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.$t("score_editing"))),
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
                                            _c("v-text-field", {
                                              attrs: {
                                                disabled: "",
                                                label:
                                                  _vm.$t("textbook_practice"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .textbook_practice,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "textbook_practice",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.textbook_practice",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.numberRules,
                                                type: "number",
                                                hint: "(0 - 100)",
                                                label:
                                                  _vm.$t("teaching_process"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .teaching_process,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "teaching_process",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.teaching_process",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.numberRules,
                                                type: "number",
                                                hint: "(0 - 100)",
                                                label: _vm.$t(
                                                  "instructional_design"
                                                ),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .instructional_design,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "instructional_design",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.instructional_design",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.numberRules,
                                                type: "number",
                                                hint: "(0 - 100)",
                                                label:
                                                  _vm.$t("fusion_Innovation"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .fusion_Innovation,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "fusion_Innovation",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.fusion_Innovation",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.numberRules,
                                                type: "number",
                                                hint: "(0 - 100)",
                                                label: _vm.$t(
                                                  "technology_application"
                                                ),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .technology_application,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "technology_application",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.technology_application",
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
                                              md: "12",
                                            },
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                rules: _vm.numberRules,
                                                type: "number",
                                                hint: "(0 - 100)",
                                                label:
                                                  _vm.$t("teaching_effect"),
                                              },
                                              model: {
                                                value:
                                                  _vm.editedItemScore
                                                    .teaching_effect,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editedItemScore,
                                                    "teaching_effect",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItemScore.teaching_effect",
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
                                    on: { click: _vm.saveCount },
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
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "500px" },
                        model: {
                          value: _vm.statusDialog,
                          callback: function ($$v) {
                            _vm.statusDialog = $$v
                          },
                          expression: "statusDialog",
                        },
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.$t("videoStatus"))),
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
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "500px" },
                        model: {
                          value: _vm.shareDialog,
                          callback: function ($$v) {
                            _vm.shareDialog = $$v
                          },
                          expression: "shareDialog",
                        },
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.$t("shareVideo"))),
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
                                                items: _vm.groupList,
                                                "item-text": "text",
                                                "item-value": "value",
                                                label: _vm.$t("selectChannel"),
                                                "return-object": "",
                                                required: "",
                                              },
                                              model: {
                                                value: _vm.shareGroupId,
                                                callback: function ($$v) {
                                                  _vm.shareGroupId = $$v
                                                },
                                                expression: "shareGroupId",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("v-checkbox", {
                                              attrs: {
                                                label:
                                                  _vm.$t("share_description"),
                                              },
                                              model: {
                                                value: _vm.checkbox,
                                                callback: function ($$v) {
                                                  _vm.checkbox = $$v
                                                },
                                                expression: "checkbox",
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
                                      disabled: !_vm.checkbox,
                                    },
                                    on: { click: _vm.saveShareVideo },
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
                      attrs: { src: "/storage/default.png" },
                    }),
              ]
            },
          },
          {
            key: "item.alias.text",
            fn: function (ref) {
              var item = ref.item
              return [
                _c("pre", [
                  _vm._v(
                    _vm._s(
                      item.alias !== null ? item.alias.text : _vm.$t("Other")
                    )
                  ),
                ]),
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
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function ($event) {
                        return _vm.editCount(item)
                      },
                    },
                  },
                  [_vm._v("C")]
                ),
                _vm._v(" "),
                item.share_status
                  ? _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "" },
                        on: {
                          click: function ($event) {
                            return _vm.shareVideo(item)
                          },
                        },
                      },
                      [_vm._v("share")]
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
                        return _vm.editStatus(item)
                      },
                    },
                  },
                  [_vm._v("mdi-earth")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function ($event) {
                        return _vm.getLessonPlayer(item)
                      },
                    },
                  },
                  [_vm._v("slideshow")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
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