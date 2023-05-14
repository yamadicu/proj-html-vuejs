<script>
export default {
    name: "ProcessComp"
}
</script>

<template>
    <section>
        <div class="container text-center">

            <div>

                <span class="subtitle">how it works in practice</span>

                <div id="titolo">
                    <h2 class="proces">Process</h2>
                    <h2>Management</h2>
                </div>

                <span>
                    We work with innovative methoddologies to ensure that the entire reformatting process is done from
                    start to finish as planned.
                </span>
            </div>

        </div>

        <hr>

        <div id="card-container">

            <!-- CARD -->
            <div class="card-cont">

                <div class="titolo-card">
                    <h4>01</h4>
                </div>

                <h3>Collection of information</h3>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <!-- CARD 2 -->
            <div class="card-cont">

                <div class="titolo-card">
                    <h4>02</h4>
                </div>

                <h3>Strategic planning</h3>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <!-- CARD 3 -->
            <div class="card-cont">

                <div class="titolo-card">
                    <h4>03</h4>
                </div>

                <h3>Assignment</h3>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <!-- CARD 4 -->
            <div class="card-cont">

                <div class="titolo-card">
                    <h4>04</h4>
                </div>

                <h3>Formatting process</h3>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <!-- CARD 5 -->
            <div class="card-cont">

                <div class="titolo-card">
                    <h4>05</h4>
                </div>

                <h3>Continuity formalization</h3>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    height: 50vh;
    margin-top: 100px;

    #how-it {
        color: rgb(53 170 168);
        font-weight: bold;
        text-transform: uppercase;
    }

    #titolo {
        display: flex;
        align-items: center;
        margin-top: 25px;
        justify-content: center;

        h2 {
            font-weight: bold;
        }

        .proces {
            color: rgb(4 130 131);
            background-color: rgb(218 236 237);
            padding: 10px;
            border-radius: 5px;
            margin-right: 10px;
        }
    }

    hr {
        margin-top: 50px;
        border-top: 5px solid rgb(218 236 237);
    }

    #card-container {
        display: flex;
        justify-content: center;

        .card-cont {
            text-align: center;
            width: 15rem;
            margin-inline: 20px;
            position: relative;
            top: -35px;

            .titolo-card {
                display: flex;
                justify-content: center;

                h4 {
                    color: rgb(16 132 132);
                    background-color: rgb(218 236 237);
                    padding: 5px;
                    border-radius: 50px;
                }
            }

            span {
                color: grey;
            }
        }
    }
}
</style>