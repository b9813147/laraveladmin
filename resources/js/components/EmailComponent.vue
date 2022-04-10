<template>
    <v-container fluid fill-height>
        <v-row justify="center">
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <v-card elevation="2">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>重置密碼</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="onSubmit">
                            <v-text-field v-model="email"
                                          :error-messages="error"
                                          :success-messages="success"
                                          label="Email"
                                          required
                            >
                                <v-icon slot="append">mdi-email</v-icon>
                            </v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="onSubmit" :loading="this.$store.state.Status.isLoading"> 送出</v-btn>
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
    name: "Email",
    data() {
        return {
            email  : '',
            error  : [],
            success: [],
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("updateLoading", true);
            axios.post('/password/email', {'email': this.email}).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    this.success = response.data.message;
                    this.error = [];
                    this.$store.dispatch("updateLoading", false);
                }
            }).catch((error) => {
                console.log(error);
                let response = error.response
                if (response.status === 422) {
                    this.error = response.data.message;
                    this.success = [];
                    this.$store.dispatch("updateLoading", false);
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
