<template>
    <div class="menu">
        <span class="icon-menu"></span>
        <nav></nav>
    </div>
</template>

<script>
    export default {
        name: 'menu'
    }
</script>

<style lang="scss" scoped>
    .menu {
        font-size: 1.6em;
        position: absolute;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        line-height: 1;
    }
</style>
