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

    export default Vue.extend({
        name: 'login',
        components: { LoginForm },
        methods: {
            handleSubmit() {
                console.log('yes')
            },
        },
    })
</script>

<style></style>
