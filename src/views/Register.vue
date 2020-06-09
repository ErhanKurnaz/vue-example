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
                this.$store.dispatch('newUser', user)
            },
        },
    })
</script>

<style scoped></style>
