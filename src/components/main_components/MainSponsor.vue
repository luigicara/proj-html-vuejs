<script>
export default {
    data() {
        return {
            imgStrings: ['05', '06', '07', '04', '03', '02']
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="img in imgStrings">
            <img :src="`client-logo-${img}-primary.png`" alt="sponsor">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 1rem;
    margin: 7rem auto;

    div {
        width: calc((100% - 5rem) / 6);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        filter: saturate(40%) opacity(30%);
    }
}
</style>