<template>
    <a-form-model
        :model="user"
        :rules="rules"
        layout="vertical"
        ref="registerForm"
        @submit.native.prevent="handleSubmit"
    >
        <a-form-model-item label="First name" prop="firstName">
            <a-input v-model="user.firstName" placeholder="First name" />
        </a-form-model-item>
        <a-form-model-item label="Last name" prop="lastName">
            <a-input v-model="user.lastName" placeholder="Last name" />
        </a-form-model-item>
        <a-form-model-item label="Email" prop="email">
            <a-input v-model="user.email" placeholder="Email" />
        </a-form-model-item>
        <a-form-model-item label="password" prop="password">
            <a-input
                v-model="user.password"
                placeholder="Password"
                type="password"
            />
        </a-form-model-item>
        <a-form-model-item>
            <a-button html-type="submit" type="primary">
                Register
            </a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { FormModel } from 'ant-design-vue/types/form-model/form'

    export default Vue.extend({
        name: 'RegisterForm',
        data() {
            return {
                user: {
                    firstName: undefined,
                    lastName: undefined,
                    email: undefined,
                    password: undefined,
                },
                rules: {
                    firstName: [
                        {
                            required: true,
                            message: 'Please fill in a first name',
                            trigger: 'blur',
                        },
                    ],
                    lastName: [
                        {
                            required: true,
                            message: 'Please fill in a last name',
                            trigger: 'blur',
                        },
                    ],
                    email: [
                        {
                            required: true,
                            message: 'Please fill in an email',
                            trigger: 'blur',
                        },
                        {
                            type: 'email',
                            message: "this isn't a valid email",
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            message: 'Please fill in an password',
                            trigger: 'blur',
                        },
                        {
                            min: 6,
                            message: 'must be at least 6 characters',
                            trigger: 'blur',
                        },
                    ],
                },
            }
        },
        methods: {
            handleSubmit() {
                const formRef = this.$refs.registerForm as FormModel
                formRef.validate(valid => {
                    if (valid) {
                        this.$emit('onSubmit', this.user)
                    } else {
                        this.$emit('onError')
                    }
                })
            },
        },
    })
</script>

<style scoped></style>
