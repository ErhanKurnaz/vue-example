<template>
    <ARow type="flex" justify="center">
        <ACol span="12">
            <a-card>
                <RegisterForm @onSubmit="handleSubmit" />
            </a-card>
        </ACol>
    </ARow>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RegisterForm from '@/components/form/RegisterForm.vue'
    import { User } from '@/entities/user'

    export default Vue.extend({
        name: 'Register',
        components: {
            RegisterForm,
        },
        methods: {
            handleSubmit(user: User) {
                this.$store.dispatch('newUser', user).then(() => {
                    this.$root.$notification.success({
                        message: 'Registration successful',
                        description: 'Registration was a success',
                    })
                    this.$router.push('/login')
                })
            },
        },
    })
</script>

<style scoped></style>
