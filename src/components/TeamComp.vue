<script>
export default {
    name: "TeamComp"
}
</script>

<template>
    <section>

        <div class="container contenitore-totale">

            <aside class="col-6 aside-left">

                <span class="subtitle">
                    we like what we do
                </span>

                <div id="titolo">

                    <h2 id="team">Team</h2>
                    <h2>of Expert</h2>

                </div>

                <span>
                    Ethics and integrity are the bases on which our professionals buils their careers. They are fundamentals
                    that became daily attitudes.
                </span>

                <!-- TEAM CARD -->
                <div id="cont-card">

                    <!-- card-1 -->
                    <div class="team-card">
                        <img src="/img/team-1.jpg" alt="">
                        <!-- contenuto card team -->
                        <div class="text-card">

                            <h4>David Cooper</h4>
                            <span class="ruolo-card">cto & co-founder</span>

                            <!-- icone -->
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>

                        </div>
                    </div>

                    <!-- card-2 -->
                    <div class="team-card">

                        <img src="/img/team-2.jpg" alt="">

                        <div class="text-card">

                            <h4>Emma Lopez</h4>
                            <span class="ruolo-card">chief marketing</span>

                            <!-- icone -->
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>

                        </div>

                    </div>

                    <!-- card-3 -->
                    <div class="team-card">

                        <img src="/img/team-3.jpg" alt="">

                        <div class="text-card">

                            <h4>Oliver Jones</h4>
                            <span class="ruolo-card">chief procurament</span>

                            <!-- icone -->
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>

                        </div>

                    </div>

                    <!-- card-4 -->
                    <div class="team-card">

                        <img src="/img/team-4.jpg" alt="">

                        <div class="text-card">

                            <h4>T.Johnson</h4>
                            <span class="ruolo-card">ceo & president</span>

                            <!-- icone -->
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>

                        </div>

                    </div>

                </div>

            </aside>

            <aside class=" col-3 aside-right">

                <div class="container-text">

                    <h4>President Speech</h4>

                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.
                    </span>

                    <span>
                        Vivamus efficitus et est quis posuere. Nulla sollicitudin vulputare dui, id pretium tortor conque
                        eu. Integer aliquet justo eu quam volutpat ullamcorper.
                    </span>

                    <span>
                        Duis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.
                    </span>

                    <div id="fine-testo">
                        <h5>T.Johnson</h5>
                        <i class="fa-solid fa-quote-right"></i>
                    </div>

                </div>

            </aside>


        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: rgb(17 17 23);
    height: 70vh;
    padding-top: 80px;

    .contenitore-totale {
        display: flex;
        justify-content: center;

        .aside-left {
            color: white;

            #titolo {
                display: flex;
                display: flex;
                align-items: center;
                margin-top: 20px;

                #team {
                    background-color: rgb(4, 131, 131, 0.2);
                    padding: 10px;
                    border-radius: 5px;
                    margin-right: 10px;
                }
            }

            #cont-card {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                height: 400px;

                .team-card {
                    display: flex;
                    padding-top: 50px;
                    padding-right: 50px;

                    img {
                        margin-right: 20px;
                        height: 120px;
                        width: 100px;
                        border-radius: 5px;
                    }

                    .text-card {
                        margin-top: 10px;

                        .ruolo-card {
                            text-transform: uppercase;
                        }

                        .fa-brands {
                            color: rgb(5 130 131);
                            background-color: rgb(4, 131, 131, 0.2);
                            padding: 10px;
                            border-radius: 50px;
                            margin: 10px;
                        }
                    }
                }

            }
        }

        .aside-right {
            color: white;
            background-color: rgb(5 130 131);
            margin-top: 50px;
            height: 450px;
            border-radius: 5px;
            margin-left: 100px;
            display: flex;
            align-items: center;

            .container-text {
                padding: 30px;
                display: flex;
                flex-direction: column;

                span {
                    padding-top: 10px;
                    padding-bottom: 10px;
                }

                #fine-testo {
                    display: flex;
                    justify-content: space-between;

                    .fa-solid {
                        font-size: 2rem;
                        color: rgb(4 97 98);
                    }
                }
            }
        }
    }
}
</style>