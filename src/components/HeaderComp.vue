<script>
import { store } from '../store';
export default {
    name: "HeaderComp",
    data() {
        return {
            store,
            linkNav: [
                {
                    url: '/',
                    name: "home",
                    stato: true
                }, {
                    url: '/',
                    name: "about",
                    stato: false
                }, {
                    url: '/',
                    name: "service",
                    stato: false
                }, {
                    url: '/',
                    name: "process",
                    stato: false
                }, {
                    url: '/',
                    name: "team",
                    stato: false
                }, {
                    url: '/',
                    name: "blog",
                    stato: false
                }
            ]
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

        <!-- navbar con link per altre pagine -->
        <nav class="mt-4">
            <div class="container cont-nav">

                <div class="d-flex align-items-center">

                    <span class="fs-4 fw-medium text-uppercase nex">nex</span>
                    <span class="fs-4 fw-medium text-uppercase">gen</span>

                </div>

                <div id="lista">
                    <ul>
                        <li v-for="(element, index) in linkNav" :key="index" :class="element.stato ? 'active' : ''">
                            <a href="element.url">{{ element.name }}</a>
                        </li>
                        <li class="ms-1">
                            <a href="#" class="get-in">get in touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- sezione fusion and acquisitions -->
        <div class="d-flex container">

            <div class="col-9"></div>

            <div class="col-3 cont-iscr">

                <div id="iscrizione">

                    <span>fusions & acquisitions</span>
                    <h1 class="fw-bolder">Insurance Consulting</h1>

                    <div class="d-flex flex-wrap">

                        <!-- nome ed email -->
                        <div class="d-flex m-1">

                            <input type="text" class="form-control me-2 bg-inp" placeholder="Name">
                            <input type="email" class="form-control me-2 bg-inp" placeholder="Email">

                        </div>

                        <div class="d-flex m-1">

                            <input type="type" class="form-control me-2 bg-inp" placeholder="Phone">

                            <div>
                                <button type="button" class="form-control me-4 bg-inp dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Home</a></li>
                                    <li><a class="dropdown-item" href="#">About</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="mt-4">
                        <span class="get-in">gen in touch</span>
                        <span id="read">reade more</span>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url(img/bg-6.jpg);
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
            color: rgb(0 166 166);
        }

        #lista {

            ul {

                display: flex;
                align-items: center;

                li {
                    list-style: none;
                    margin: 0 10px;
                    line-height: 100px;

                    a {
                        text-decoration: none;
                        margin-inline: 10px;
                        color: black;
                        text-transform: uppercase;

                    }

                    &.active {
                        border-bottom: 3px solid rgb(5 130 131);
                    }

                    &.active a {
                        color: rgb(5 130 131);
                    }

                    .get-in {
                        color: white;
                        background-color: rgb(5 130 131);
                        padding: 10px;
                        border-radius: 5px;
                    }
                }
            }
        }

    }

    .cont-iscr {

        float: inline-end;

        #iscrizione {
            margin-top: 100px;

            span {
                color: rgb(0 166 166);
                text-transform: uppercase;
                font-weight: bolder;
            }

            .bg-inp {
                background-color: rgb(209 213 214);
            }

            .get-in {
                color: white;
                background-color: rgb(4 131 131);
                padding: 10px;
                border-radius: 5px;
            }

            input {
                width: 10rem;
            }

            button {
                width: 10rem;
            }

            #read {
                color: rgb(4 131 131);
                padding: 10px;
                border: 1px solid rgb(4 131 131);
                border-radius: 5px;
                margin-left: 10px;
            }
        }
    }
}
</style>