<template>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            />
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resources"
            :search="search"
            class="elevation-1"
            :footer-props="{
               'items-per-page-text':$t('common.rows_per_page'),
               'items-per-page-options':[5,10,15,$t('common.all')]
            }"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>{{ $t('users.manage') }}</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    />
                    <v-spacer/>
                    <!-- Create user  -->
                    <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mx-2" v-on="on"> +</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.name" :label="$t('users.name')"/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.email" :label="$t('users.email')"/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.password" :label="$t('common.password')" type="password"/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-select :items="identities" item-text="text" item-value="value" :label="$t('users.identity')" v-model="editedItem.identity" return-object required/>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="blue darken-1" text @click="close">{{ $t('common.cancel') }}</v-btn>
                                <v-btn color="blue darken-1" text @click="save">{{ $t('common.submit') }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
                <v-icon small @click="deleteItem(item)">delete</v-icon>
            </template>
            <!--            <template v-slot:no-data>-->
            <!--                <v-btn color="primary" @click="initialize">Reset</v-btn>-->
            <!--            </template>-->
            <!--            <template v-slot:item.member_duty="{ item }">-->
            <!--                {{ item.member_duty.text }}-->
            <!--            </template>-->
            <!--            <template v-slot:item.member_status="{ item }">-->
            <!--                {{ item.member_status.text }}-->
            <!--            </template>-->
            <!--            <template v-slot:footer="{ pagination, options, updateOptions }">-->
            <!--                <v-data-footer-->
            <!--                    :pagination="pagination"-->
            <!--                    :options="options"-->
            <!--                    @update:options="updateOptions"-->
            <!--                    -->
            <!--                />-->
            <!--            </template>-->
        </v-data-table>

    </v-card>
</template>

<script>

export default {
    props: ['users'],
    data() {
        return {
            dialog     : false,
            valid      : true,
            search     : '',
            headers    : [],
            identities : [],
            resources  : [],
            stats      : [],
            editedIndex: -1,
            editedItem : {
                id      : null,
                name    : null,
                identity: null,
                password: null                // userId : null
            },
            defaultItem: {
                id      : null,
                name    : null,
                identity: null,
                password: null                // userId : null
            },
            success    : [],
            error      : [],
            isSuccess  : true
        };
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? this.$t('users.create') : this.$t('users.edit')
            // return this.editedIndex === -1 ? '新增使用者' : '編輯使用者'
        },
    },
    watch   : {
        dialog(val) {
            val || this.close()
        },
        // 'editedItem.habook'() {
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
        // this.validation();
        //     })
        // },
        // 'editedItem.member_status'() {
        //     this.validation();
        // },
        // 'editedItem.member_duty'() {
        //     this.validation();
        // },
    },
    created() {
        // this.initialize()
    },
    methods: {
        // 這裡需要傳入頻道ID
        // initialize() {
        //     let groupId = this.$store.state.Auth.user.group_id;
        //     let groupUserUrl = `/api/group/${groupId}`;
        //     let _this = this;
        //
        //     // _this.$store.dispatch("updateLoading", true);
        //     axios.get(groupUserUrl).then((response) => {
        //         // 預設值
        //         _this.defaultItem.group_name = response.data.name;
        //         // _this.defaultItem.groupId = this.$store.state.Auth.user.group_id;
        //         // _this.editedItem.groupId = this.$store.state.Auth.user.group_id;
        //
        //         // 取回來的資料
        //         _this.resources = response.data.users.map(v => {
        //             return {
        //                 // name       : `${v.name}(${v.habook})`,
        //                 // habook     : v.habook,
        //                 // member_duty: (v.pivot.member_duty === 'Admin')
        //                 //              ? {text: this.$t('admin'), value: 'Admin'} : (v.pivot.member_duty === 'Expert')
        //                 //                                                           ? {text: this.$t('expert'), value: 'Expert'} : {text: this.$t('general'), value: 'General'},
        //                 // // member_status: (v.pivot.member_status === 1) ? {text: this.$t('enable'), value: 1} : {text: this.$t('disable'), value: 0},
        //                 // userId    : v.pivot.user_id,
        //                 // groupId   : response.data.id,
        //                 // created_at: v.created_at,
        //             }
        //         });
        //         _this.$store.dispatch("updateLoading", false);
        //     }).catch((error) => {
        //         console.log(error)
        //     });
        //
        //     _this.defaultColumns();
        // },
        defaultColumns() {
            const harder = [
                {text: this.$t('users.name'), value: 'name', sortable: true},
                {text: this.$t('users.identity'), value: 'identity', sortable: true},
                {text: this.$t('users.email'), value: 'email', sortable: true},
                {text: this.$t('common.action'), value: 'action', sortable: false}
            ];
            const identities = [
                {text: this.$t('users.admin'), value: 1},
                {text: this.$t('users.general'), value: 2}
            ];

            this.headers = harder;
            this.identities = identities;
        },
        editItem(item) {
            this.editedIndex = this.resources.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            let _this = this;
            let url = `/api/group/member/${item.userId}`;
            const index = _this.resources.indexOf(item);

            if (confirm('Are you sure you want to delete this item?')) {
                _this.resources.splice(index, 1);
                _this.$store.dispatch("updateLoading", true);
                axios.delete(url, {data: item}).then((response) => {
                    _this.$store.dispatch("updateLoading", false);
                })
            }

        },
        close() {
            this.dialog = false;
            this.error = null;
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1
            }, 1)
        },
        save() {
            let _this = this;
            if (this.editedIndex > -1) {
                let url = `/admin/${_this.editedItem.id}`
                // 格式轉換
                const obj = {
                    identity: _.isObject(_this.editedItem.identity) ? _this.editedItem.identity.value : _this.editedItem.identity,
                };
                // 合併修改
                const data = Object.assign({}, this.editedItem, obj);
                console.log(data);
                // _this.$store.dispatch("updateLoading", true);
                axios.put(url, data).then((response) => {
                    if (response.status === 204) {
                        // _this.$store.dispatch("updateLoading", false);
                        Object.assign(this.resources[this.editedIndex], this.editedItem);
                        // _this.$store.dispatch("updateAlert", true);
                        return this.close()
                    }
                })
            } else {
                // _this.$store.dispatch("updateLoading", true);
                // 新增 格式轉換
                const obj = {
                    member_duty  : this.editedItem.member_duty.value,
                    member_status: 1
                };
                // 合併修改
                const data = Object.assign({}, this.editedItem, obj);
                let url = `/api/group/member`;
                // axios.post(url, data)
                //     .then((response) => {
                //         if (response.status === 201 || response.status === 200) {
                //             this.initialize()
                //             _this.$store.dispatch("updateLoading", false);
                //             return this.close()
                //         }
                //     }).catch((error) => {
                //     _this.error = error.response.data.message;
                //     _this.$store.dispatch("updateLoading", false);
                //
                // });
            }
        },

    },
    mounted() {
        let _this = this;
        _this.defaultColumns();
        _this.resources = _this.users;
    }
}
</script>
