<template>
    <a-form
        :form="form"
        @submit.prevent="handleSubmit"
        class="login-form"
        id="form"
    >
        <a-form-item>
            <a-input
                placeholder="Username"
                v-decorator="[
                    'userName',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ],
                    },
                ]"
            >
                <a-icon
                    slot="prefix"
                    style="color: rgba(0,0,0,.25)"
                    type="user"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                placeholder="Password"
                type="password"
                v-decorator="[
                    'password',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ],
                    },
                ]"
            >
                <a-icon
                    slot="prefix"
                    style="color: rgba(0,0,0,.25)"
                    type="lock"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                v-decorator="[
                    'remember',
                    {
                        valuePropName: 'checked',
                        initialValue: true,
                    },
                ]"
            >
                Remember me
            </a-checkbox>
            <a class="login-form-forgot" href="">
                Forgot password
            </a>
            <a-button
                class="login-form-button"
                html-type="submit"
                type="primary"
            >
                Log in
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { WrappedFormUtils } from 'ant-design-vue/types/form/Form'

    interface DataInterface {
        form: WrappedFormUtils
    }

    export default Vue.extend({
        name: 'LoginForm',
        data() {
            return {
                form: this.$form.createForm(this, { name: 'login' }),
            }
        },
        methods: {
            handleSubmit() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values)
                        this.$emit('onSubmit', values)
                    } else {
                        this.$emit('onError', err)
                    }
                })
            },
        },
    })
</script>

<style scoped>
    #form .login-form {
        max-width: 300px;
    }
    #form .login-form-forgot {
        float: right;
    }
    #form .login-form-button {
        width: 100%;
    }
</style>
