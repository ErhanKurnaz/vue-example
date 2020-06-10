<template>
    <ARow type="flex" justify="center">
        <ACol span="12">
            <a-card>
                <LoginForm @onSubmit="handleSubmit" />
            </a-card>
        </ACol>
    </ARow>
</template>

<script lang="ts">
    import Vue from 'vue'
    import LoginForm from '@/components/form/LoginForm.vue'
    import { User } from '@/entities/user'

    export default Vue.extend({
        name: 'login',
        components: { LoginForm },
        methods: {
            handleSubmit(values: Record<string, string>) {
                const { email, password } = values
                const response = this.$store.state.users.filter(
                    (u: User) => u.email === email
                )

                if (response.length > 0 && response[0].password === password) {
                    this.$root.$notification.success({
                        message: 'Logged in',
                        description: 'Log in successful',
                    })

                    this.$store.dispatch('login', response[0])
                } else {
                    this.$notification.error({
                        message: 'invalid credentials',
                        description: '',
                    })
                }
            },
        },
    })
</script>

<style></style>
