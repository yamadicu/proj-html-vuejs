<script>
import CompanyComp from './CompanyComp.vue';
import BusinnesComp from './BusinnesComp.vue';
import ProcessComp from './ProcessComp.vue';
import TeamComp from './TeamComp.vue';
import LatestComp from './LatestComp.vue';
import NewsComp from './NewsComp.vue';
export default {
    name: "MainComp",
    components: {
        CompanyComp,
        BusinnesComp,
        ProcessComp,
        TeamComp,
        LatestComp,
        NewsComp,
    }
}
</script>

<template>
    <CompanyComp />
    <BusinnesComp />
    <ProcessComp />
    <TeamComp />
    <LatestComp />
    <NewsComp />
</template>

<style lang="scss" scoped></style>