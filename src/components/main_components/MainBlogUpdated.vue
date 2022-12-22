<script>
export default {
    data() {
        return {
            cards: [
                {
                    image: '04',
                    date: 'May 13, 2020',
                    title: 'How to Stay True to Your Personal Brand',
                    info: 'When it comes to your business or career, you want ...'
                },

                {
                    image: '03',
                    date: 'May 13, 2020',
                    title: '5 Vital Lessons in 5 Years of Freelancing',
                    info: "Being self-employed and working from home, it's easy to get ..."
                },

                {
                    image: '02',
                    date: 'May 13, 2020',
                    title: '11 Super Useful Tips for Small-Business Owners',
                    info: 'Being a small-business owner poses a ton of challenges. We ...'
                },

                {
                    image: '01',
                    date: 'May 13, 2020',
                    title: 'How to Give Yourself Grace to Start Again',
                    info: 'Forgive yourself for bad habits you may have started or ...'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="sec-title">
            BLOG UPDATED
        </div>

        <h2>
            Interesting <span>articles updated</span> daily
        </h2>

        <div class="cards">
            <!-- card loop -->
            <div v-for="card in cards" class="card">
                <img :src="`motivation-blog-${card.image}-480x325.jpg`" alt="blog">

                <div class="info">
                    <div class="date">
                        {{ card.date }}
                    </div>

                    <div class="title">
                        {{ card.title }}
                    </div>

                    <div class="bottom-info">
                        {{ card.info }}
                    </div>
                </div>

            </div>
        </div>

        <div class="more">
            <a href="#">VIEW ALL POSTS</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.container {
    margin: 10rem auto;
}

h2 {
    font-size: 2.5rem;
    margin: 1rem 0;

    span {
        color: $secondaryText;
    }
}

.cards {
    display: flex;
    gap: 1rem;
    margin: 4rem 0 2rem;

    .card {
        width: calc((100% - 3rem) / 4);

        &:hover {
            background-color: rgba(128, 128, 128, 0.1);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
        }

        img {
            max-width: 100%;
        }

        .info {
            padding: 0 0.5rem;

            .date {
                margin: 1.5rem 0 0.5rem;
                color: $tertiaryText;
                font-size: 0.9rem;
            }

            .title {
                font-weight: 700;
                font-size: 1.2rem;
            }

            .bottom-info {
                margin: 1rem 0;
                color: $tertiaryText;
                font-size: 0.9rem;
            }
        }
    }
}

.more {
    text-align: center;

    a {
        text-decoration: underline;
        color: $secondaryText;
        font-size: 0.8rem;
        font-weight: bold;
    }
}
</style>