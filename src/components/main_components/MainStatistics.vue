<script>
export default {
    data() {
        return {
            stats: [
                {
                    name: 'Finished Sessions',
                    value: '1.926'
                },

                {
                    name: 'Satisfaction Rate',
                    value: '100%'
                },

                {
                    name: 'Enrollled Leaders',
                    value: '3092+'
                },

                {
                    name: 'Online Instructors',
                    value: '200'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="stat in stats">
            <div class="value">
                {{ stat.value }}
            </div>

            <div class="name">
                {{ stat.name.toUpperCase() }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../partials/_variables' as *;

.container {
    margin: 7rem auto;
    display: flex;

    .card {
        width: calc(100% / 4);
        text-align: center;
        padding: 0.5rem;
        background-image: url('background-pattern-grid-line-06.png');

        .value {
            color: $secondaryText;
            font-size: 2.2rem;
            font-weight: 700;
        }
    }
}
</style>