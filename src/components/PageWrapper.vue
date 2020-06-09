<template>
    <a-layout id="page-wrapper">
        <a-layout-header>
            <a-menu
                theme="dark"
                mode="horizontal"
                v-model="current"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item v-for="item in routes" :key="item.key">
                    <router-link :to="item.to">
                        {{ item.label }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content>
            <slot />
        </a-layout-content>
    </a-layout>
</template>

<script lang="ts">
    import Vue from 'vue'

    export interface RouterInterface {
        name: string
        to: string
        label: string
    }

    interface DataInterface {
        routes: Array<RouterInterface>
        current: Array<string>
    }

    const routes: Array<RouterInterface> = [
        {
            name: 'login',
            to: '/login',
            label: 'Login',
        },
        {
            name: 'register',
            to: '/register',
            label: 'Register',
        },
    ]

    export default Vue.extend({
        name: 'PageWrapper',
        data: (): DataInterface => ({
            routes,
            current: [],
        }),
        mounted() {
            this.current = [this.$route.name || '']
        },
        watch: {
            $route(to) {
                console.log(to)
                this.current = [to.name]
            },
        },
        computed: {
            transformedCurrent() {
                return [this.current]
            },
        },
    })
</script>

<style scoped></style>
