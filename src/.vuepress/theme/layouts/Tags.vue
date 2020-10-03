<template>
    <div id="tags">
        <b-container>
            <div class="tag-badge" v-for="tag in this.$frontmatterKey.list">
                <b-button size="sm" variant="primary" :href="tag.path">
                    {{ tag.name }}
                    <b-badge variant="light">{{ tag.pages.length }}</b-badge>
                </b-button>
            </div>
        </b-container>
    </div>
</template>
<style>
.tag-badge{
    display: inline-block;
    margin: 0 2px 0 2px;
    padding: 2px 0 2px 0;
}
</style>