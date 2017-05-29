// todo: this needs to render the upcoming event and show the rest on click

<template>
    <aside class="calendar">
        <figure>
            <span class="icon icon-calendar"></span>
            <span class="day">5</span>
            <figcaption>
                May<br>
                <strong>Vrijland Festival</strong>
            </figcaption>
        </figure>
    </aside>
</template>

<script>
    export default {
        name: 'calendar'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .calendar {
        font-size: 0.8em;
        text-transform: uppercase;
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        line-height: 1;
        figure {
            .icon, figcaption {
                display: inline-block;
                vertical-align: top;
            }
            .icon {
                font-size: 2.3em;
                margin-right: 0.2em;
            }
            .day {
                font-size: 2em;
                margin: 0 3px 0 0;
            }
        }
    }
</style>
