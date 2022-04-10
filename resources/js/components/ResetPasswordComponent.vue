<template>
    <v-container fluid fill-height>
        <v-row justify="center">
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>重置密碼</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="onSubmit">
                            <v-text-field
                                label="信箱"
                                type="text"
                                disabled
                                v-model="email"
                            >
                                <v-icon slot="append">mdi-email</v-icon>
                            </v-text-field>
                            <v-text-field
                                label="密碼"
                                type="password"
                                v-model="password"
                                :error-messages="errors"
                                :success-messages="success"
                                required
                            >
                                <v-icon slot="append">mdi-lock</v-icon>
                            </v-text-field>
                            <v-text-field
                                label="確認密碼"
                                type="password"
                                v-model="password_confirmation"
                                :error-messages="errors"
                                :success-messages="success"
                                required
                            >
                                <v-icon slot="append">mdi-lock</v-icon>
                            </v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="onSubmit" @keydown.enter :loading="this.$store.state.Status.isLoading">送出</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    props: ['token', 'email'],
    name : "Reset",
    data() {
        return {
            password             : '',
            password_confirmation: '',
            errors               : [],
            success              : [],
        }
    },

    methods: {
        onSubmit() {
            this.$store.dispatch("updateLoading", true);
            let result = {
                'token'                : this.token,
                'email'                : this.email,
                'password'             : this.password,
                'password_confirmation': this.password_confirmation
            }
            axios.post('/password/reset', result)
                .then((response) => {
                    if (response.status === 200) {
                        this.success = response.data.message;
                        window.location.replace('/');
                        this.errors = [];
                        this.$store.dispatch("updateLoading", false);

                    }
                })
                .catch((error) => {
                    let response = error.response;
                    if (response.status === 422) {
                        this.errors = response.data.message;
                        this.success = [];
                        this.$store.dispatch("updateLoading", false);
                    }
                })
        }
    },
    mounted() {
        // this.email = this.email;
    }
}
</script>

<style scoped>

</style>
