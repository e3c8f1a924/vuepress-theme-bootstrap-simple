<template>
    <div id="postcard-content">
        <b-card-text>{{ post.frontmatter.description }}</b-card-text>
        <b-link :href="post.path" class="card-link">Read more</b-link>
        <b-link v-if="this.$site.themeConfig.preferences.source && this.$site.themeConfig.preferences.source.show"
            :href="this.$site.themeConfig.preferences.source.srcDir+post.relativePath"
            class="card-link"
        >Source code</b-link>
        <b-link v-if="this.$site.themeConfig.preferences.source && this.$site.themeConfig.preferences.source.history"
            :href="this.$site.themeConfig.preferences.source.historyDir+post.relativePath"
            class="card-link"
        >History</b-link>
        <b-card-text v-if="post.frontmatter.time || post.lastUpdated">
            <b-icon icon="clock" font-scale="1" v-if="post.frontmatter.time"></b-icon>
            <span v-if="post.frontmatter.time">{{ time }}</span>
            <b-icon icon="pen" font-scale="1" v-if="post.lastUpdated"></b-icon>
            <span v-if="post.lastUpdated">{{ lastUpdated }}</span>
        </b-card-text>
    </div>
</template>
<script>
import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc';

dayjs.extend(dayjsPluginUTC);

export default {
    props: {
        post: Object,
        base: String
    },
    computed: {
        time() {
            return dayjs.utc(this.post.frontmatter.time).format(this.$themeConfig.preferences.timeFormat || "YYYY MM DD ddd hh:mm:ss");
        },
        lastUpdated() {
            if(!this.post.lastUpdated)return "";
            return dayjs.utc(this.post.lastUpdated).format(this.$themeConfig.preferences.lastUpdatedTimeFormat || "YYYY MM DD ddd hh:mm:ss");
        }
    }
}
</script>
<style>
.tag-badge{
    display: inline-block;
    margin: 0 2px 0 2px;
    padding: 2px 0 2px 0;
}
</style>