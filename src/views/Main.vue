<template>
    <main class="content" role="main">
        <section class="row" v-for="(row, index) in pagedata.blocks">
            <component
            v-for="(block, index) in row"
            :amount="block.amount"
            :body="block.body"
            :checklist="block.checklist"
            :continuation="block.continuation"
            :downloads="block.downloads"
            :height="block.height"
            :image="block.image"
            :info="block.info"
            :is="block.type"
            :text="block.text"
            :title="block.title"
            :video="block.video"
            :width="block.width"
            :url="block.url"
            :key="index"></component>
        </section>
    </main>
</template>

<script>
    import data from '../data'

    // data
    const pages = data.pages.data

    // dynamic blocks
    import highlightBlock from '../blocks/highlightBlock/highlightBlock'
    import popupBlock from '../blocks/popupBlock/popupBlock'
    import newsBlock from '../blocks/newsBlock/newsBlock'
    import pageBlock from '../blocks/pageBlock/pageBlock'
    import textBlock from '../blocks/textBlock/textBlock'
    import videoBlock from '../blocks/videoBlock/videoBlock'

    // special
    import blog from '../components/blog/blog'

    // utils
    import { fetchBlog } from '../services/utils'

    export default {
        components: {
            blog, highlightBlock, popupBlock, newsBlock, pageBlock, textBlock, videoBlock
        },
        data () {
            return {
                pagedata: pages[this.$route.name],
                blockStyles: {}
            }
        },
        watch: {
            $route (to, from) {
                if (!pages[to.name]) {
                    this.$router.back()
                } else {
                    this.pagedata = pages[to.name]
                    document.title = this.pagedata.title
                    setTimeout(() => {
                        this.$store.dispatch('CLOSE_NAV')
                    }, 150)
                }
            }
        },
        name: 'main'
    }
</script>
