<script>
import { store } from '../store';
export default {
    name: "FooterComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="container pt-5 extra-cont">
            <div class="contenuto pt-5">

                <div class="col-3">

                    <div id="titolo">
                        <h3 id="nex">nex</h3>
                        <h3>gen</h3>
                    </div>

                    <span>
                        A Functional HTMl Template for Corporate & Businnes.
                    </span>

                    <ul class="mt-4">
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            {{ store.OurPhone }}
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            {{ store.OurEmail }}
                        </li>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            Main Avenue, 987
                        </li>
                    </ul>

                    <span class="get">get in touch</span>

                </div>

                <!-- CARD -->
                <div>

                    <!-- card 1 -->
                    <div class="card-cont">

                        <div class="card-footer">
                            <h4>About</h4>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    The Company
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Institutional
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Social & Events
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Innovation
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Environment
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Technology
                                </li>
                            </ul>
                        </div>

                        <div class="card-footer">
                            <h4>Service</h4>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Audit & Assurance
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Financial Advisory
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Analytics M&A
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Middle Marketing
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Legal Consulting
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Regulatory Risk
                                </li>
                            </ul>
                        </div>

                        <div class="card-footer">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Responsibility
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Terms of Use
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    About Cookies
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Privacy Policy
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Accesibility
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    Information
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>

        <footer>

            <div class="container">

                <span>
                    Enjoy the low price. We are tracking any intention of priracy.
                </span>
                <span class="ms-5">
                    &#169;NEXGEN is Proudly Powered by <div class="text-info-emphasis d-inline">Codings</div>.
                </span>

            </div>

        </footer>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: rgb(13 13 17);
    height: 70vh;
    color: rgb(192 195 208);
    display: flex;
    flex-direction: column;

    #titolo {
        display: flex;
        align-items: center;
        text-transform: uppercase;

        #nex {
            background-color: hsl(191.61deg 52.54% 11.57%);
            padding-left: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: 5px;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
            color: rgb(0 166 166);
        }
    }

    ul {
        position: relative;
        left: -30px;
        margin-bottom: 30px;

        li {
            margin-top: 5px;
            list-style: none;
        }
    }

    .get {
        text-transform: uppercase;
        padding: 10px;
        border: 1px solid rgb(5 130 131);
        font-weight: bold;
        border-radius: 5px;
    }

    .card-cont {
        display: flex;
        justify-content: space-between;

        .card-footer {
            display: flex;
            flex-direction: column;
            background-color: rgb(25 25 31);
            padding: 30px 30px 0px 30px;
            border-radius: 10px;
            margin-left: 30px;
        }
    }

    footer {
        background-color: black;
        position: relative;
        bottom: -280px;
        height: 60px;
        display: flex;
        align-items: center;

        div {
            display: flex;
            justify-content: space-between;
        }

    }
}
</style>