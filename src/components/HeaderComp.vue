<script>
import { store } from '../store';
export default {
    name: "HeaderComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- sezione con immagine di sfondo -->
    <section>

        <!-- sezione con social e orario -->
        <div id="notte">

            <div class="container">

                <div id="orario">
                    <i class="fa-solid fa-clock"></i>
                    <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
                </div>

                <div>
                    <i class="fa-solid fa-phone"></i>
                    <span>{{ store.OurPhone }}</span>
                    <i class="fa-solid fa-envelope"></i>
                    <span>{{ store.OurEmail }}</span>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>

        <nav class="mt-4">
            <div class="container cont-nav">

                <div class="d-flex align-items-center">

                    <span class="fs-4 fw-medium text-uppercase text-nex nex">nex</span>
                    <span class="fs-4 fw-medium text-uppercase">gen</span>

                </div>

                <div id="lista">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">service</a>
                        </li>
                        <li>
                            <a href="#">process</a>
                        </li>
                        <li>
                            <a href="#">team</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li class="ms-1">
                            <a href="#" id="get-it">get in touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url(../public/img/bg-6.jpg);
    height: 90vh;

    #notte {
        background-color: rgb(33 51 62);
        height: 5vh;
        color: rgb(174 176 176);
        display: flex;
        align-items: center;

        .container {

            display: flex;
            justify-content: space-between;

            .fa-solid {
                margin-inline: 10px;
            }

            .fa-brands {
                margin-inline: 20px;
            }
        }
    }

    nav {
        display: flex;
        justify-content: space-between;

        .cont-nav {

            display: flex;
            justify-content: space-between;

            .nex {
                background-color: rgb(192 218 220);
                padding-left: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }

            .text-nex {
                color: rgb(0 166 166);
            }

            #lista {

                ul {

                    display: flex;
                    align-items: center;

                    li {
                        list-style: none;

                        a {
                            text-decoration: none;
                            margin-inline: 10px;
                            color: black;
                            text-transform: uppercase;

                        }

                        #get-it {
                            color: white;
                            background-color: rgb(5 130 131);
                            padding: 10px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>