<script>
export default {

}
</script>

<template>
    <div class="container">
        <div class="title">ABOUT ME</div>

        <section class="howtobe">
            <div class="left col">
                <h2>How to Be an Alpha Male: The 15 Habits of True Alphas</h2>
            </div>

            <div class="right col">
                <div class="description">
                    Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man
                    you've always wanted to be?
                </div>

                <div class="sub-description">
                    Your goal is to show the conistency of business, core values, and customer care. Punctuality,
                    responsibility, individuality, accuracy, enthusiasm - you have to clearly explain how these
                    qualities are applicable to your work. And the importante thing is you do love what you do.
                </div>
            </div>

        </section>

        <section class="video">
            <div class="videoplayer">
                <img src="home-movation-video-poster-670x450.jpg" alt="videopreview" id="videopreview">
                <img src="icon-youtube-play.png" alt="play-button" id="play-button">
            </div>

            <div class="quote">
                <h3>
                    "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."
                </h3>

                <div class="signature">
                    <img src="home-movation-shape-01.png" alt="logo">

                    <div class="sign">
                        Kaixa Stark
                    </div>

                    <div class="role">
                        WINGMAN
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/partials/_variables.scss' as *;

.title {
    color: $secondaryText;
}

.howtobe {
    display: flex;
    margin: 2rem 0;

    .col {
        width: 50%;
    }

    .left {
        padding-right: 10rem;

        h2 {
            font-size: 2.5rem;
        }
    }

    .right {
        .description {
            font-size: 1.1rem;
            line-height: 2;
            margin-bottom: 1rem;

            span {
                color: $secondaryText;
            }
        }

        .sub-description {
            font-size: 0.9rem;
            color: $tertiaryText;
        }
    }
}

.video {
    display: flex;
    margin: 6rem 0;

    .videoplayer {
        width: 58%;
        position: relative;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

        #videopreview {
            border-radius: 0.3rem;

        }

        #play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .quote {
        padding: 0 5rem;

        h3 {
            font-size: 1.5rem;
            line-height: 2;
            margin: 4rem 0;
        }

        .signature {
            .sign {
                color: $primaryText;
                font-size: 1.3rem;
                font-weight: bold;
                margin: 1rem 0 0.5rem;
            }

            .role {
                color: $tertiaryText;
                font-size: 0.8rem;
            }
        }
    }
}
</style>