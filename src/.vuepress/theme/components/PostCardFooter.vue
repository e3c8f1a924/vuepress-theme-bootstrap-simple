<template>
    <div id="postcard-footer">
        <b-icon icon="tags" font-scale="1" color="black"></b-icon>
        <div class="tag-badge" v-for="tag in post.frontmatter.tag">
            <b-button size="sm" variant="primary" :href="base+'tag/'+tag">
                {{ tag }}
            </b-button>
        </div>
        <div class="tag-badge" v-for="tag in post.frontmatter.tags">
            <b-button size="sm" variant="primary" :href="base+'tag/'+tag">
                {{ tag }}
            </b-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object,
        base: String
    }
}
</script>