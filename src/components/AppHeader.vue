<script>
export default {
    data() {
        return {
            navElements: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop']
        }
    }
}
</script>

<template>
    <header>
        <div class="container">

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../partials/variables' as *;

header {
    background-color: $primaryBackground;
    background-image: url('../../public/background-pattern-wavify.png');
    height: 800px;
}
</style>