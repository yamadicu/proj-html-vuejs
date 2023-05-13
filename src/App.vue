<script>
import HeaderComp from './components/HeaderComp.vue';
import CompanyComp from './components/CompanyComp.vue';
export default {
    name: "app",
    components: {
        HeaderComp,
        CompanyComp
    }
}
</script>

<template>
    <HeaderComp />
    <CompanyComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
