<template>
    <v-card>
        <v-card-title>
            <span class="headline">重設密碼</span>
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <v-text-field
                    label="Email"
                    v-model="email"
                    required
                ></v-text-field>
                <v-text-field
                    name="password"
                    label="Password"
                    v-model="password"
                    hint="至少 6 個字符"
                    min="6"
                    type="password"
                    required
                ></v-text-field>
                <v-text-field
                    name="passwordConfirmation"
                    label="Password confirmation"
                    v-model="passwordConfirmation"
                    hint="至少 6 個字符"
                    min="6"
                    type="password"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1">Close</v-btn>
            <v-btn
                :loading="loading"
                flat
                :color="done ? 'green' : 'blue'"
                @click.native="reset"
            >
                <v-icon v-if="done">done</v-icon>
                &nbsp;
                <template v-if="!done">Reset</template>
                <template v-else>Done</template>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['user'],
    data() {
        return {
            email               : this.email,
            loading             : false,
            done                : false,
            password            : '',
            passwordConfirmation: '',
            valid               : false
        }
    },
    computed: {
        showResetPassword: {
            get() {
                return this.internalAction && (this.internalAction === 'reset_password')
            },
            set(value) {
                if (value) this.internalAction = 'reset_password'
                else this.internalAction = null
            }
        }
    },
    methods : {
        reset() {
            const user = {
                'password'             : this.password,
                'password_confirmation': this.passwordConfirmation,
            }
            // this.loading = true
            // this.$store.dispatch(actions.RESET_PASSWORD, user).then(response => {
            //   this.loading = false
            //   this.done = true
            //   sleep(4000).then(() => {
            //     this.showResetPassword = false
            //     window.location = '/home'
            //   })
            // }).catch(error => {
            //   if (error.response && error.response.status === 422) {
            //     this.showError({
            //       message: 'Invalid data'
            //     })
            //   } else {
            //     this.showError(error)
            //   }
            //   this.errors = error.response.data.errors
            // }).then(() => {
            //   this.loading = false
            // })
        }
    }
}
</script>

<style scoped>

</style>
