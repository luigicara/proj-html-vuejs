<script>
export default {
    props: {
        msg: String,
    }
}
</script>

<template>
    <button>
        {{ msg }} &nbsp;
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
    </button>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

button {
    margin: 1.5rem 0;
    padding: 1rem 3.5rem;
    border: none;
    border-radius: 0.3rem;
    color: white;
    font-weight: bold;
    background-color: $secondaryText;

    &:hover {
        background-color: $primaryText;
    }
}
</style>