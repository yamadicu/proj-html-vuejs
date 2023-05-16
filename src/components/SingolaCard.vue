<script>
export default {
    name: "SingolaCard",
    props: ['Singola'],
}
</script>

<template>
    <div class="cont">
        <img :src="Singola.latest" alt="">
        <div class="titolo">
            <div class="sfondo">

                <h4>{{ Singola.titolo }}</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    position: relative;
    height: 350px;
    widows: 350px;

    img {
        margin-top: 50px;
        height: 350px;
        width: 350px;
        border-radius: 10px;
        z-index: -1;
    }

    .titolo {
        position: absolute;
        height: 100%;
        bottom: 0;

        .sfondo {
            margin-top: 25px;
            background-color: rgba(0, 0, 0, 0.404);
            width: 100%;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: end;

            h4 {
                color: white;
                margin-bottom: 25px;
                text-align: center;
                font-weight: bold;
            }
        }
    }
}
</style>