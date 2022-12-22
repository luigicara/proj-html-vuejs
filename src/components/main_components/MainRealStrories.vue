<script>
export default {
    data() {
        return {
            autoPlayProperty: undefined,

            activeImage: 0,

            slides: [
                {
                    photo: 'testimonial-avata-02.jpg',
                    name: 'Mina Hollace',
                    quote: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                    role: 'Freelancer'
                },
                {
                    photo: 'testimonial-avata-01.jpg',
                    name: 'Pinco Panco',
                    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam repellendus iure facilis eveniet neque minus sint asperiores, pariatur dolore, sit id culpa animi iusto delectus obcaecati, commodi ullam magnam.',
                    role: 'Business Manager'
                },
                {
                    photo: 'testimonial-avata-04.jpg',
                    name: 'Panco Pinco',
                    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere harum eum saepe dolor, maiores nemo sed! Rerum consectetur explicabo nemo facilis? Nisi a ea vel iusto eligendi magni culpa quos.",
                    role: 'Social Media Managaer'
                },
                {
                    photo: 'testimonial-avata-03.jpg',
                    name: 'Stregatto',
                    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eveniet excepturi praesentium explicabo, neque fugit quam, adipisci beatae natus corrupti, nobis dolorum eum odit facere. Ab, tenetur perferendis? Dolorem, nesciunt.',
                    role: 'CEO'
                },
            ]

        }
    },

    methods: {
        // function to go forward in the slider
        nextImage() {
            this.activeImage++;

            if (this.activeImage > this.slides.length - 1) {
                this.activeImage = 0;
            }
        },


        // function to go backward in the slider
        prevImage() {
            this.activeImage--;

            if (this.activeImage < 0) {
                this.activeImage = this.slides.length - 1;
            }
        },

        autoPlay() {
            this.autoPlayProperty = setInterval(() => {
                this.nextImage();
            }, 3000)
        },

        stopAutoPlay() {
            clearInterval(this.autoPlayProperty);
        }
    },

    mounted() {
        this.autoPlay();
    }
}
</script>

<template>
    <!-- automatic sliding carousel -->
    <div class="wrapper" tabindex="0" @mouseover="stopAutoPlay" @mouseout="autoPlay">
        <div class="testimonial">
            <div class="title">
                REAL STORIES
            </div>

            <div class="quote">
                {{ slides[activeImage].quote }}
            </div>

            <div class="photo">
                <img :src="slides[activeImage].photo" alt="testimonial">
            </div>

            <div class="name">
                {{ slides[activeImage].name }}
            </div>

            <div class="role">
                / {{ slides[activeImage].role }}
            </div>
        </div>

        <div class="image">
            <img src="home-movation-testimonial-image-768x562.jpg" alt="testimonial">
        </div>

        <div class="cursor">
            <div @click="prevImage">
                <img src="image.png" alt="up">
            </div>

            <div>
                {{ `${activeImage + 1} / ${slides.length}` }}
            </div>

            <div @click="nextImage">
                <img src="image (1).png" alt="down">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.wrapper {
    display: flex;
    margin: 10rem 0;
    position: relative;

    &>div {
        width: 50%;
    }

    .image {
        img {
            width: 100%;
        }
    }

    .testimonial {
        background-color: $primaryBackground;
        background-image: url('background-pattern-wavify.png');
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &>div {
            width: 50%;
        }

        .title {
            color: $secondaryText;
        }

        .quote {
            font-size: 1.5rem;
            line-height: 2;
            margin: 3rem 0;
        }

        .photo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10%;

            img {
                border-radius: 50%;
                max-width: 100%;
            }
        }

        .name {
            font-size: 1.3rem;
            margin: 1rem 0;
        }

        .role {
            color: $tertiaryText;
            font-size: 0.9rem;
        }
    }

    .cursor {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        background-color: white;
        transform: translate(-50%, -50%);

        &>div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: calc(100% / 3);
            cursor: pointer;
            user-select: none;
        }
    }
}
</style>