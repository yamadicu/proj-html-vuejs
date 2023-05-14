<script>
export default {
    name: "CompanyComp",
}
</script>

<template>
    <!-- sezione con sfondo nero -->
    <section>

        <div id="sezione-testo" class="container">

            <!-- div about the network -->
            <div class="col-4">
                <span class="subtitle">about the network</span>
                <div id="titolo" class="mt-3">
                    <h1 id="the-company">The</h1>
                    <h1>Company</h1>
                </div>
                <div class="mt-3">
                    <span>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cras iaculis diam varius diam ultrices eu
                        volutpat sit amet, finibus a ipsum

                    </span>
                </div>
                <div class="mt-3">
                    <span>

                        Carubitur convalis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in
                        leo.

                    </span>
                </div>
            </div>

            <!-- div con mini card -->
            <div class="col-5 ps-5 cont-card">

                <!-- CARD 1 -->
                <div class="cont">
                    <div class="titolo-card">
                        <i class="fa-solid fa-award"></i>
                        <h4>Tradition</h4>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </span>
                </div>

                <!-- CARD 2 -->
                <div class="cont">
                    <div class="titolo-card">
                        <i class="fa-solid fa-lock"></i>
                        <h4>Tradition</h4>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </span>
                </div>

                <!-- CARD 3 -->
                <div class="cont">
                    <div class="titolo-card">
                        <i class="fa-regular fa-pen-to-square"></i>
                        <h4>Tradition</h4>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </span>
                </div>

                <!-- CARD 4 -->
                <div class="cont">
                    <div class="titolo-card">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h4>Tradition</h4>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </span>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {

    background-color: rgb(17 17 23);
    height: 50vh;
    display: flex;
    align-items: center;

    #sezione-testo {
        color: white;
        display: flex;



        #titolo {
            display: flex;
            align-items: center;

            #the-company {
                background-color: rgb(4, 131, 131, 0.2);
                margin-right: 5px;
                padding: 10px;
                border-radius: 5px;
            }
        }

        .cont-card {
            display: flex;
            flex-wrap: wrap;

            .cont {
                max-width: 200px;
                margin: 20px;

                .titolo-card {
                    display: flex;

                    .fa-solid {
                        color: rgb(0 166 166);
                        font-size: 1.5rem;
                        margin-right: 5px;
                    }

                    .fa-regular {
                        color: rgb(0 166 166);
                        font-size: 1.5rem;
                        margin-right: 5px;
                    }
                }

                span {
                    color: grey;
                }
            }
        }
    }

}
</style>