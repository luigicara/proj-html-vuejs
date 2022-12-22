<script>
import Button1 from '../buttons/Button1.vue';

export default {
    data() {
        return {
            cards: [
                {
                    img: "06",
                    price: "30.00",
                    name: "How to be Succesful: Create A Growth Mindset For Success",
                    lessons: 3,
                    students: 50
                },
                {
                    img: "05",
                    price: "30.00",
                    name: "How to Build Confidence in Your Abilities",
                    lessons: 1,
                    students: 50
                },
                {
                    img: "04",
                    price: "20.00",
                    name: "Productivity Machine - Focus in a Distracted World",
                    lessons: 5,
                    students: 50
                },
                {
                    img: "03",
                    price: "20.00",
                    name: "Effective Time Management Mastery - Complete Guide",
                    lessons: 18,
                    students: 50
                },
                {
                    img: "02",
                    price: "25.99",
                    name: "Body Language Secrets for Entrepreneurs",
                    lessons: 19,
                    students: 50
                },
                {
                    img: "01",
                    price: "19.99",
                    name: "Management Skills: The Science of Leadership",
                    lessons: 17,
                    students: 50
                },
            ]
        };
    },
    components: { Button1 }
}
</script>

<template>
    <div class="container">
        <div class="title">BEGIN YOUR JOURNEY AT MAXCOACH</div>

        <h2>Latest <span>Online Courses</span></h2>

        <div class="cards">
            <!-- loop trough cards -->
            <div class="card" v-for="card in cards">
                <img :src="`motivation-course-${card.img}-480x298.jpg`" alt="test">

                <div class="info">
                    <div class="price">
                        {{ card.price.slice(0, 3) }}<span>{{ card.price.slice(3, 5) }}</span>
                    </div>

                    <div class="name">
                        {{ card.name }}
                    </div>

                    <div class="bottom-info">
                        <span class="lessons">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            &nbsp; {{ `${card.lessons} ${card.lessons > 1 ? 'lessons' : 'lesson'}` }}
                        </span>

                        <span class="students">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            &nbsp; {{ card.students }} Students
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="button">
            <Button1 :msg="'View all courses'" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.title {
    text-align: center;
    color: $tertiaryText;
}

h2 {
    text-align: center;
    font-size: 3rem;
    color: $primaryText;
    margin: 1rem 0;

    span {
        color: $secondaryText;
    }
}

.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 4rem 0 2rem;

    .card {
        width: calc((100% - 3rem) / 3);

        &:hover {
            background-color: rgba(128, 128, 128, 0.1);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
        }

        img {
            max-width: 100%;
        }

        .info {
            padding: 0 2rem;

            .price {
                color: $secondaryText;
                font-weight: 700;
                font-size: 1.5rem;
                margin: 1.5rem 0 0.5rem;

                span {
                    font-size: 1.2rem;
                }
            }

            .name {
                color: $primaryText;
                font-weight: 700;
                font-size: 1.2rem;
            }

            .bottom-info {
                margin: 2rem 0;
                color: $tertiaryText;
                font-size: 0.9rem;

                .lessons {
                    margin-right: 2rem;
                }
            }
        }

    }
}

.button {
    text-align: center;
}
</style>