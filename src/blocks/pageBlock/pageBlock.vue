<template>
    <div>
        <article class="block pageblock">
            <h2>{{ title }}</h2>
            <p v-html="body"></p>
            <p v-if="downloads">
                <a :href="'downloads/' + download.file" v-for="(download, index) in files" download>{{ download.name }}<br></a>
            </p>

            <ul class="checklist" v-if="checklist">
                <li v-for="(item, index) in checklist">
                    {{ item }}
                </li>
            </ul>

            <section class="infoblock" v-if="info">
                <span class="infoblock_loader1"></span>
                <span class="infoblock_loader2"></span>
                <h3>{{ info.title }}</h3>
                <ul>
                    <li v-for="(item, index) in info.items" v-html="item"></li>
                </ul>
                <p class="continuation" v-if="continuation && info">
                    <lineButton class="continuebutton" :text="continuation.text" :url="continuation.url" :color="'green'"></lineButton>
                </p>
            </section>

            <p class="continuation" v-if="continuation && !info">
                <lineButton class="continuebutton" :text="continuation.text" :url="continuation.url" :color="'green'"></lineButton>
            </p>
        </article>
    </div>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './pageBlock.css'

    // elements
    import lineButton from '../../elements/lineButton/lineButton'

    export default {
        components: {
            lineButton
        },
        data () {
            return {
                files: data.downloads.data
            }
        },
        props: {
            body: String,
            checklist: Array,
            continuation: Object,
            downloads: Boolean,
            info: Object,
            title: String
        }
    }
</script>
