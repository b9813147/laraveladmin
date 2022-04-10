<template>
    <v-main class="my-15">
        <v-container fluid fill-height>
            <v-row justify="center">
                <v-col xs="12" sm="8" md="5">
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>DMP 登入</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    prepend-icon="mdi-email"
                                    name="Email"
                                    label="Email"
                                    type="text"
                                    v-model:value="email"
                                    :error-messages="errors_message.email"
                                ></v-text-field>
                                <v-text-field
                                    id="password"
                                    prepend-icon="mdi-lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    v-model:value="password"
                                    :error-messages="errors_message.password"
                                ></v-text-field>
                                <v-row>
                                    <v-col xs="12" sm="8" md="8">
                                        <v-text-field
                                            id="captcha_error"
                                            name="captcha"
                                            label="驗證碼"
                                            type="text"
                                            v-model="code"
                                            :error-messages="errors_message.captcha"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col xs="12" sm="4" md="4">
                                        <div style="cursor:pointer;" v-html="captcha" @click="refresh_captcha"></div>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="login" @keydown.enter :loading="this.$store.state.Status.isLoading">登入</v-btn>
                            <v-btn color="primary" @click="forgetPassword">忘記密碼</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            code          : '',
            email         : '',
            password      : '',
            captcha       : '',
            errors_message: {},

        }
    },
    methods: {
        refresh_captcha() {
            axios.get('refresh_captcha').then((response) => {
                this.captcha = response.data.captcha
            })
        },

        login() {
            this.$store.dispatch("updateLoading", true);
            let form_data = {
                password: this.password,
                email   : this.email,
                captcha : this.code,
            };
            axios.post('login', form_data)
                .then((response) => {
                    if (response.status === 204) {
                        window.location.replace('/');
                        this.$store.dispatch("updateLoading", false);
                    }
                })
                .catch((error) => {
                    let result = error.response
                    this.errors_message = result.data.errors
                    if (result.status === 422) {
                        this.refresh_captcha();
                        this.$store.dispatch("updateLoading", false);
                    }
                })
        },
        forgetPassword() {
            return window.location.replace('/password/reset')
        }
    },
    mounted() {
        this.refresh_captcha();
    }
}
</script>

<style scoped>

</style>
