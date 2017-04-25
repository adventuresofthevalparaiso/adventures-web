<template>
    <aside class="modal">
        <div class="modal-backdrop" @click="closeModal"></div>
        <section class="modal-inner" :style="style">
            <floatingButton class="closeBtn" :callback="closeModal" :color="'white'" :text="'X'" :url="''"></floatingButton>

            <!-- Text -->
            <div v-if="type === 'text'" class="textwrapper">
                <p v-html="data"></p>
            </div>

            <!-- Video -->
            <div v-if="type === 'video'" class="videowrapper">
                <youtube :video="data" :ready="setStyle"></youtube>
            </div>

            <!-- Image -->
            <figure v-if="type === 'image'" class="imagewrapper">
                <img :src="data" alt="">
            </figure>

        </section>
    </aside>
</template>

<script>
    // stylesheet
    import css from './modal.css'

    // elements
    import floatingButton from '../../elements/floatingButton/floatingButton'
    import youtube from '../../elements/youtube/youtube'

    export default {
        components: {
            floatingButton, youtube
        },
        data () {
            return {
                style: {}
            }
        },
        computed: {
            type () {
                return this.$store.state.modal.type
            },
            data () {
                return this.$store.state.modal.data
            }
        },
        mounted () {
            setTimeout(() => {
                this.setStyle()
            }, 200)
        },
        methods: {
            closeModal (event) {
                this.$store.dispatch('CLOSE_MODAL').then(() => {
                    this.$store.dispatch('UPDATE_MODAL', {type: '', data: ''})
                })
            },
            setStyle () {
                let attributes = {}
                if (this.type === 'text') {
                    // attributes.height = Math.round(this.data.length * 0.4) + 'px'
                    attributes.height = 'auto'
                    attributes.opacity = 1

                    const wrapper = document.querySelector('.textwrapper')
                    const wrapper_height = wrapper.offsetHeight
                    attributes.height = (wrapper_height + 20) + 'px'

                    this.style = attributes
                } else if (this.type === 'video') {
                    let video = document.querySelector('.videowrapper iframe')
                    if (video) {
                        attributes.height = video.offsetHeight + 2 + 'px'
                        attributes.top = '-' + (video.offsetHeight / 10) + 'px'
                        attributes.opacity = 1
                        this.style = attributes
                    }
                } else if (this.type === 'image') {
                    let image = document.querySelector('.imagewrapper img')
                    if (image) {
                        attributes.height = image.offsetHeight + 2 + 'px'
                        attributes.top = '-' + (image.offsetHeight / 10) + 'px'
                        attributes.width = image.offsetWidth + 2 + 'px'
                        attributes.opacity = 1
                        this.style = attributes
                    }
                }
            },
            animate () {
                const el = document.querySelector('.modal-inner')
                const timeline = new TimelineLite()

                timeline.fromTo(el, 0.7, { scale: 0.85 }, { scale: 1, opacity: 1, ease: Sine.easeIn })
            }
        }
    }
</script>
