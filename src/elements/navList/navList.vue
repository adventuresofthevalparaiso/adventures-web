<template>
    <nav class="navlist" role="navigation">
        <h4 class="title">{{ list.title }}</h4>
        <ul>
            <li v-for="(item, index) in list.items" v-if="item.visible" :key="item.id">
                <router-link :to="item.slug">{{ item.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import css from './navList.css'

    export default {
        props: {
            list: Object
        }
    }
</script>
