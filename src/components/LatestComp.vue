<script>
import SingolaCard from './SingolaCard.vue';
export default {
    name: "LatestComp",
    components: {
        SingolaCard
    },
    data() {
        return {
            immagini: [
                {
                    "latest": "/img/news-1.jpg",
                    "titolo": "Increasing creativity is possible for everyone"
                }, {
                    "latest": "/img/news-2.jpg",
                    "titolo": "Because market research is part of the business plan"
                }, {
                    "latest": "/img/news-3.jpg",
                    "titolo": "Working from home is now a trend"
                }
            ]
        }
    }
}
</script>

<template>
    <section>

        <div class="container mt-5">

            <!-- into e titolo -->
            <div>

                <span class="subtitle">our editorial content</span>

                <div id="titolo">
                    <h1>Latest</h1>
                    <h1 id="news">News</h1>
                </div>

                <div class="cont-text">
                    <span>Every week we publish content about what is best in the business world</span>
                    <button id="see-all">see all</button>
                </div>

            </div>

            <!-- card -->
            <div class="cont">
                <SingolaCard v-for="(element, index) in immagini" :key="index" :Singola="element" />
            </div>


        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    height: 70vh;

    #titolo {
        margin-top: 20px;
        display: flex;
        align-items: center;

        h1 {
            font-weight: bold;
        }

        #news {
            color: rgb(4 130 131);
            background-color: rgb(218 236 237);
            padding: 10px;
            border-radius: 5px;
            margin-left: 10px;
        }

    }

    .cont-text {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        #see-all {
            color: white;
            padding: 10px;
            background-color: rgb(5 130 131);
            border: none;
            border-radius: 5px;
            text-transform: uppercase;
        }
    }

    .cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>