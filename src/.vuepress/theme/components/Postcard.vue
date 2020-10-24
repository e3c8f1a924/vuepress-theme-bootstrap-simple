<template>
    <div class="postcard">
        <b-card footer-tag="footer" :title="post.title" :sub-title="post.frontmatter.subtitle"
            :text-variant="post.frontmatter.dark?'white':'black'"
            overlay 
            :img-src="post.frontmatter.image"
            v-if="post.frontmatter.image"
        >
            <PostCardContent :post="post" :base="base" />
            <PostCardFooter slot="footer" :post="post" v-if="post.frontmatter.tag || post.frontmatter.tags" />
        </b-card>
        <b-card footer-tag="footer" :title="post.title" :base="base" :sub-title="post.frontmatter.subtitle"
            :text-variant="post.frontmatter.dark?'white':'black'"
            v-else
        >
            <PostCardContent :post="post" :base="base" />
            <PostCardFooter slot="footer" :post="post" :base="base" v-if="post.frontmatter.tag || post.frontmatter.tags" />
        </b-card>
    </div>
</template>
<script>
import PostCardContent from '@theme/components/PostCardContent.vue';
import PostCardFooter from '@theme/components/PostCardFooter.vue';

export default {
    props: {
        post: Object,
        base: String
    },
    components: {PostCardContent,PostCardFooter}
}
</script>
<style>
.postcard{
    padding: 5px 0 5px 0;
}
.tag-badge{
    display: inline-block;
    margin: 0 2px 0 2px;
    padding: 2px 0 2px 0;
}
</style>