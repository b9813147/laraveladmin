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
            :loading="this.$store.state.Status.isLoading"
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
                                            <v-text-field v-model="editedItem.name" :error-messages="errors.name" :label="$t('users.name')"/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.email" :error-messages="errors.email" :label="$t('users.email')"/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-select :items="identities" item-text="text" item-value="value" :label="$t('users.identity')" v-model="editedItem.identity" :error-messages="errors.identity" return-object required/>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-select :items="is_actives" item-text="text" item-value="value" :label="$t('users.is_active')" v-model="editedItem.is_active" :error-messages="errors.is_active" return-object required/>
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
                <!--                <v-icon small @click="deleteItem(item)">delete</v-icon>-->
            </template>
            <template v-slot:item.identity="{ item }">
                <pre>{{ identities.find((v) => v.value === item.identity).text }}</pre>
            </template>
            <template v-slot:item.is_active="{ item }">
                <pre>{{ is_actives.find((v) => v.value === item.is_active).text }}</pre>
            </template>
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
            is_actives : [],
            editedIndex: -1,
            editedItem : {
                id       : null,
                name     : null,
                identity : null,
                is_active: null,
            },
            defaultItem: {
                id       : null,
                name     : null,
                identity : null,
                is_active: null,
            },
            success    : [],
            errors     : [],
            isSuccess  : true,
        };
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? this.$t('users.create') : this.$t('users.edit')
        },
    },
    watch   : {
        dialog(val) {
            val || this.close()
        },
    },
    created() {
        // this.initialize()
    },
    methods: {
        defaultColumns() {
            const harder = [
                {text: this.$t('users.name'), value: 'name', sortable: true},
                {text: this.$t('users.identity'), value: 'identity', sortable: true},
                {text: this.$t('users.email'), value: 'email', sortable: true},
                {text: this.$t('users.is_active'), value: 'is_active', sortable: true},
                {text: this.$t('common.action'), value: 'action', sortable: false}
            ];
            const identities = [
                {text: this.$t('users.admin'), value: 1},
                {text: this.$t('users.general'), value: 2}
            ];
            const is_actives = [
                {text: this.$t('common.enable'), value: 1},
                {text: this.$t('common.disable'), value: 0}
            ];

            this.headers = harder;
            this.is_actives = is_actives;
            this.identities = identities;
        },
        editItem(item) {
            this.editedIndex = this.resources.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            // let _this = this;
            // let url = ``;
            // const index = _this.resources.indexOf(item);
            //
            // if (confirm('Are you sure you want to delete this item?')) {
            //     _this.resources.splice(index, 1);
            //     _this.$store.dispatch("updateLoading", true);
            //     axios.delete(url, {data: item}).then((response) => {
            //         _this.$store.dispatch("updateLoading", false);
            //     })
            // }

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
            this.$store.dispatch("updateLoading", true);
            let _this = this;
            // format conversion
            const obj = {
                identity : _.isObject(_this.editedItem.identity) ? _this.editedItem.identity.value : _this.editedItem.identity,
                is_active: _.isObject(_this.editedItem.is_active) ? _this.editedItem.is_active.value : _this.editedItem.is_active,
            };
            // merger
            const result = Object.assign({}, this.editedItem, obj);

            if (this.editedIndex > -1) {
                let url = `/admin/${_this.editedItem.id}`
                axios.patch(url, result).then((response) => {
                    console.log(response.status)
                    if (response.status === 204) {
                        this.$store.dispatch("updateLoading", false);
                        Object.assign(this.resources[this.editedIndex], result);
                        return this.close()
                    }
                }).catch((error) => {
                    _this.errors = error.response.data.errors;
                    this.$store.dispatch("updateLoading", false);
                })
            } else {
                let url = `/admin`
                axios.post(url, result)
                    .then((response) => {
                        if (response.status === 200) {
                            this.resources.push(response.data)
                            this.sendResetPassword(result.email);
                            this.$store.dispatch("updateLoading", false);
                            return this.close()
                        }
                    }).catch((error) => {
                    _this.errors = error.response.data.errors;
                    this.$store.dispatch("updateLoading", false);
                });
            }
        },

        sendResetPassword(email) {
            axios.post('/password/email', {'email': email})
                .then((response) => {
                    // if (response.status === 200)
                    // this.loading = false;
                }).catch((error) => {
                console.log(error);
                let response = error.response
                if (response.status === 422) {
                    console.log(response.data);
                }
            })
        }
    },
    mounted() {
        let _this = this;
        _this.defaultColumns();
        _this.resources = _this.users;
    }
}
</script>
