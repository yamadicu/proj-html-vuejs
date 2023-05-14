<script>
import HeaderComp from './components/HeaderComp.vue';
import CompanyComp from './components/CompanyComp.vue';
import BusinnesComp from './components/BusinnesComp.vue';
import ProcessComp from './components/ProcessComp.vue';
import TeamComp from './components/TeamComp.vue';
export default {
    name: "app",
    components: {
        HeaderComp,
        CompanyComp,
        BusinnesComp,
        ProcessComp,
        TeamComp,
    }
}
</script>

<template>
    <HeaderComp />
    <CompanyComp />
    <BusinnesComp />
    <ProcessComp />
    <TeamComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
