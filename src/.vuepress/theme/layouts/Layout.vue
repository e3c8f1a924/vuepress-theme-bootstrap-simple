<template>
    <b-container>
        <Postcard v-for="post in this.$pagination.pages" v-bind:post="post" v-bind:base="base" />
        <b-pagination-nav align="center" pills
            :number-of-pages="this.$pagination._paginationPages.length"
            :link-gen="linkGen"
        />
    </b-container>
</template>
<script>
import Postcard from '@theme/components/Postcard.vue';
export default {
    components: {Postcard},
    methods: {
        linkGen(pageNum){
            return this.$pagination._paginationPages[pageNum-1].path;
        }
    },
    computed: {
        base(){
            return this.$site.base;
        }
    }
}
</script>