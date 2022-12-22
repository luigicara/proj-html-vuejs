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
            ],

            commandIcons: [
                'fa-solid fa-magnifying-glass',
                'fa-solid fa-cart-shopping',
                'fa-regular fa-heart',
                'fa-solid fa-signal'
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

        <div class="book" v-for="book in books">
            <div class="book-image">
                <img :src="`product-book-${book.img}-400x400.jpg`" alt="book">

                <div class="commands">
                    <div class="icon" v-for="icon in commandIcons">
                        <font-awesome-icon :icon="icon" />
                    </div>
                </div>
            </div>

            <div class="name">
                {{ book.name }}
            </div>

            <div class="price">
                {{ book.price.slice(0, 3) }}<span>{{ book.price.slice(3, 5) }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.container {
    display: flex;
    gap: 2rem;
    margin: 5rem auto;

    .info {


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

    .book {
        width: 35%;
        text-align: center;

        .book-image {
            position: relative;

            &:hover .commands {
                display: block;
            }

            img {
                max-width: 100%;
            }

            .commands {
                position: absolute;
                display: none;
                top: 20%;
                right: 10%;

                .icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin-bottom: 0.5rem;
                    border-radius: 50%;
                    line-height: 2.5rem;
                    vertical-align: middle;
                    text-align: center;
                    background-color: white;
                    font-size: 0.8rem;
                    color: $tertiaryText;
                    cursor: pointer;
                }
            }
        }


        .price {
            color: $secondaryText;
            font-weight: 700;
            font-size: 1.5rem;

            span {
                font-size: 1.2rem;
            }
        }

        .name {
            color: $primaryText;
            font-weight: 700;
            font-size: 1.2rem;
            margin: 1.5rem 0 0.5rem;
        }
    }
}
</style>