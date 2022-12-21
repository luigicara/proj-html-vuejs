<script>
export default {
    data() {
        return {
            navElements: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
            socialIcons: ['fa-brands fa-twitter', 'fa-brands fa-facebook-f', 'fa-brands fa-instagram', 'fa-brands fa-linkedin']
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <section class="topbar">
                <img src="dark-logo.png" alt="logo">

                <nav>
                    <ul>
                        <li v-for="link in navElements">
                            <a href="#">
                                {{ link }}
                                <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron-down" />
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul class="social">
                    <li v-for="icon in socialIcons">
                        <a href="#">
                            <font-awesome-icon :icon="icon" />
                        </a>
                    </li>
                </ul>
            </section>

            <section class="hero">
                <div class="left col">
                    <span>
                        I'M WINGMAN
                    </span>

                    <h1>
                        Peace On Earth A Wonderful Wish But No Way
                    </h1>

                    <div class="sub-title">
                        Success isn't overnight. It's when everyday you get a little better than the day before. It
                        all adds up.
                    </div>

                    <button>Get Started For Free</button>
                </div>

                <div class="right col">
                    <img src="home-movation-hero-image.png" alt="hero">
                </div>
            </section>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../partials/_variables' as *;

header {
    background-color: $primaryBackground;
    background-image: url('background-pattern-wavify.png'), url('home-movation-shape-face.png');
    background-repeat: repeat, no-repeat;
    background-position: 77% 125%;

    .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;

        img {
            width: 150px;
        }

        nav {
            ul {
                min-width: 550px;
                display: flex;
                justify-content: space-between;

                a {
                    color: $primaryText;
                }
            }

            .chevron-down {
                font-size: 0.6rem;
            }
        }

        .social {
            min-width: 150px;
            display: flex;
            justify-content: space-between;

            a {
                font-size: 1.1rem;
            }
        }
    }

    .hero {
        margin-top: 5rem;
        display: flex;
        // align-items: center;

        .col {
            width: 50%;
        }

        .left.col {
            padding-top: 5rem;
            padding-right: 9rem;

            h1 {
                font-size: 3.5rem;
                margin: 1rem 0;
            }

            .sub-title {
                color: grey;
                line-height: 2;
            }

            button {
                margin: 1.5rem 0;
                padding: 1rem 3.5rem;
                border: none;
                border-radius: 0.3rem;
                color: white;
                font-weight: 700;
                background-color: $secondaryText;
            }
        }

        .right.col {
            display: flex;
            justify-content: center;
        }
    }
}
</style>