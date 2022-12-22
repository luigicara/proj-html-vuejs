<script>
import Button1 from '../buttons/Button1.vue';

export default {
    data() {
        return {
            books: [
                {
                    img: "11",
                    price: "29.00",
                    name: "Aplha man by Maxcoach",
                },
                {
                    img: "10",
                    price: "39.00",
                    name: "Real man 4.0 by Maxcoach",
                }
            ],
            features: [
                "Help you understand yourself better",
                "Revealing mature tips",
                "Give the right advice",
                "Fascinating examples of alpha man"
            ]
        };
    },
    components: { Button1 }
}
</script>

<template>
    <div class="container">
        <div class="info">
            <div class="title">BOOK STORE ONLINE</div>

            <h2>
                Be Alpha With
                <span>
                    Wingsman's Book
                </span>
            </h2>

            <ul>
                <li v-for="feature in features">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-check" /> &nbsp;
                    </span>
                    {{ feature }}
                </li>
            </ul>

            <Button1 :msg="'Get Free Ebook'" />
        </div>

        <div class="book">

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.container {
    display: flex;
    margin: 5rem auto;

    .info {
        width: 30%;

        h2 {
            font-size: 2.5rem;
            color: $primaryText;
            margin: 1rem 0 2rem;

            span {
                color: $secondaryText;
            }
        }

        ul {
            color: $tertiaryText;

            li {
                font-size: 0.9rem;
                margin: 0.8rem 0;
            }

            span {
                color: $secondaryText;
                font-size: 1rem;
            }
        }
    }
}
</style>