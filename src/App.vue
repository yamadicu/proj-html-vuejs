<script>
import HeaderComp from './components/HeaderComp.vue';
import CompanyComp from './components/CompanyComp.vue';
import BusinnesComp from './components/BusinnesComp.vue';
export default {
    name: "app",
    components: {
        HeaderComp,
        CompanyComp,
        BusinnesComp,
    }
}
</script>

<template>
    <HeaderComp />
    <CompanyComp />
    <BusinnesComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
