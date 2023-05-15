<script>
import HeaderComp from './components/HeaderComp.vue';
import CompanyComp from './components/CompanyComp.vue';
import BusinnesComp from './components/BusinnesComp.vue';
import ProcessComp from './components/ProcessComp.vue';
import TeamComp from './components/TeamComp.vue';
import LatestComp from './components/LatestComp.vue';
import NewsComp from './components/NewsComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
    name: "app",
    components: {
        HeaderComp,
        CompanyComp,
        BusinnesComp,
        ProcessComp,
        TeamComp,
        LatestComp,
        NewsComp,
        FooterComp
    }
}
</script>

<template>
    <HeaderComp />
    <CompanyComp />
    <BusinnesComp />
    <ProcessComp />
    <TeamComp />
    <LatestComp />
    <NewsComp />
    <FooterComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
