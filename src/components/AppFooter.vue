<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,

            addressLi: [
                '382 NE 191st St # 87394 Miami, FL 33179-3899',
                '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                'support@maxcoach.com'
            ],

            exploreLi: [
                'Start here', 'Blog', 'About us', 'Success story', 'Courses', 'Contact us'
            ],

            informationLi: [
                'Membership', 'Purchase guide', 'Privacy policy', 'Terms of service'
            ]
        }
    }

}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <section>
                <div class="left col">
                    <div class="title">
                        Address
                    </div>

                    <ul>
                        <li v-for="li in addressLi">
                            {{ li }}
                        </li>

                        <li>
                            <span v-for="icon in store.socialIcons">
                                <font-awesome-icon :icon="icon" />
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="right col">
                    <ul>
                        <div class="title">Explore</div>

                        <li v-for="li in exploreLi">
                            {{ li }}
                        </li>
                    </ul>

                    <ul>
                        <div class="title">Information</div>

                        <li v-for="li in informationLi">
                            {{ li }}
                        </li>
                    </ul>
                </div>
            </section>

            <div class="copyright">
                2020 Maxcoach. All Rights Reserved
            </div>
        </div>

        <div class="go-up">
            <a href="#header">
                <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/variables.scss' as *;

.wrapper {
    background-color: $footerBackground;
    height: 400px;
    position: relative;

    .container {
        height: 100%;

        section {
            display: flex;
            padding: 4rem 0;
            max-height: 325px;

            .col {
                width: 50%;
            }

            .left {
                li {
                    color: $footerText;
                    margin: 1rem 0;
                    font-size: 0.9rem;

                    span {
                        font-size: 1.5rem;
                        margin-right: 2rem;
                    }
                }
            }

            .right {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;

                .title {
                    margin-bottom: 0.5rem;
                }

                ul {
                    max-height: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    gap: 1rem 0;

                    li {
                        width: fit-content;
                        color: $footerText;
                        font-size: 0.9rem;
                    }
                }
            }

            .title {
                color: white;
                font-size: 1.1rem;
                font-weight: 700;
            }
        }

        .copyright {
            text-align: center;
            color: $footerText;
            font-size: 0.85rem;
        }
    }

    .go-up {
        position: absolute;
        bottom: 2rem;
        right: 1rem;
        height: 4rem;
        line-height: 4rem;
        vertical-align: middle;
        text-align: center;
        width: 4rem;
        background-color: $secondaryText;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            background-color: $primaryText;
        }

        a {
            color: white;
        }
    }
}
</style>