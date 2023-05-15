<script>
export default {
    name: "LatestComp",

    data() {
        return {
            imgSfondo: [

                {
                    immagine: "/img/news-1.jpg"
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
            <div id="card-cont">

                <div id="img">

                    <div class="opacity">

                        <h4>
                            Increasing creativity is possible for everyone
                        </h4>

                    </div>

                </div>
                <div id="img2">
                    <h4>
                        Because market research is part of the businnes plan
                    </h4>
                </div>
                <div id="img3">
                    <h4>
                        Working from home is now a trend
                    </h4>
                </div>

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

    #card-cont {
        display: flex;

        #img {
            background-image: url("/img/news-1.jpg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 400px;
            width: 400px;


            .opacity {
                background-color: rgba(0, 0, 0, 0.5);
                height: 100%;
                display: flex;
                align-items: end;
                justify-content: center;

                h4 {
                    color: white;
                    text-align: center;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>