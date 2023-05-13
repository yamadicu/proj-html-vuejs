<script>
import HeaderComp from './components/HeaderComp.vue';
import CompanyComp from './components/CompanyComp.vue';
import BusinnesComp from './components/BusinnesComp.vue';
import ProcessComp from './components/ProcessComp.vue';
export default {
    name: "app",
    components: {
        HeaderComp,
        CompanyComp,
        BusinnesComp,
        ProcessComp,
    }
}
</script>

<template>
    <HeaderComp />
    <CompanyComp />
    <BusinnesComp />
    <ProcessComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
