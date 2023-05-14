<script>
export default {
    name: "BusinnesComp"
}
</script>

<template>
    <section>
        <div class="container">
            <span class="subtitle">our businnes area</span>

            <div id="titolo">
                <h2 class="fw-bold">Excellence in</h2>
                <h2 id="service">Services</h2>
            </div>

            <div class="d-flex justify-content-between">
                <span class="col-9">
                    We are leader in providing consultancy services with a set of cutting-edge technologies and a team of
                    experienced and renowned professional. These are some options that you can hire.
                </span>
                <button id="see-all">see all</button>
            </div>

            <!-- CARD -->
            <div id="sez-card">

                <!-- CARD 1 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-network-wired"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Audit & Assurance</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

                <!-- CARD 2 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-briefcase">
                        </i> <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Financial Advisory</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

                <!-- CARD 3 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-chart-simple"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Analystics and M&A</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

                <!-- CARD 4 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-plane"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Middle Marketing</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

                <!-- CARD 5 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-earth-europe"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Legal Consulting</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

                <!-- CARD 6 -->
                <div class="singola-card">
                    <div class="logo-card">
                        <i class="fa-solid fa-inbox"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <h5 class="pt-4">Regulatory Risk</h5>
                    <span>Lorem ipsum dolor sit amet consecretur adispiscing alit.</span>
                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: rgb(238 244 237);
    display: flex;
    align-items: center;
    height: 90vh;

    #titolo {
        display: flex;
        align-items: center;

        #service {
            margin-left: 10px;
            padding: 10px;
            border-radius: 5px;
            color: rgb(5 130 131);
            background-color: rgb(204 227 222);
            font-weight: bold;
        }
    }

    #see-all {
        color: white;
        padding-inline: 15px;
        background-color: rgb(5 130 131);
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
    }

    #sez-card {
        padding-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .singola-card {
            background-color: white;
            padding: 50px;
            border-radius: 5px;
            width: calc(100% / 3 - 100px);
            margin-top: 20px;

            .logo-card {
                display: flex;
                justify-content: space-between;

                .fa-solid {
                    color: rgb(5 130 131);
                    font-size: 1.8rem;

                }

                .fa-arrow-right {
                    color: rgb(130 193 193);
                }
            }
        }

    }
}
</style>