<script>
export default {
    name: "NewsComp"
}
</script>

<template>
    <section>
        <div class="container extra-cont">
            <div class="contenuto col-8">

                <div>
                    <span class="subtitle">newsletter</span>

                    <div id="titolo">
                        <h2 class="know">Know</h2>
                        <h2>First</h2>
                    </div>

                    <span>Follow closely and receive content about our company and the news of the current market</span>
                </div>

                <div id="iscriviti">

                    <div>
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                    </div>

                    <button class="mt-1 bottone">subscribe</button>

                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url("/img/bg-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 40vh;
    padding-top: 100px;

    .extra-cont {
        display: flex;
        justify-content: center;

        .contenuto {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;

            #titolo {
                display: flex;
                align-items: center;
                padding-top: 10px;

                .know {
                    background-color: rgb(4, 131, 131, 0.2);
                    padding: 10px;
                    border-radius: 5px;
                    margin-right: 10px;
                }
            }

            #iscriviti {
                margin-left: 50px;


                input {
                    margin-bottom: 10px;
                    padding: 10px;
                    border-radius: 5px;
                    border: none;
                    width: 20rem;
                    opacity: 0.4;
                }

                .bottone {
                    color: white;
                    background-color: rgb(5 130 131);
                    border-radius: 5px;
                    padding: 10px;
                    text-transform: uppercase;
                    border: none;
                }

            }

        }
    }
}
</style>