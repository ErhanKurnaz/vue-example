<template>
    <div id="app">
        <PageWrapper>
            <router-view />
        </PageWrapper>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import PageWrapper from '@/components/PageWrapper.vue'

    export default Vue.extend({
        name: 'App',
        components: { PageWrapper },
    })
</script>
