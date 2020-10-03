<template>
    <div class="postcard">{{  }}
        <b-card footer-tag="footer" no-body>
            <b-card-body>
                <b-card-title>{{ post.title }}</b-card-title>
                <b-card-sub-title class="mb-2">{{ post.frontmatter.subtitle }}</b-card-sub-title>
                <b-card-text>{{ post.frontmatter.description }}</b-card-text>
                <b-link :href="post.path" class="card-link">Read more</b-link>
            </b-card-body>
            <b-list-group flush v-if="post.frontmatter.time || post.lastUpdated">
                <b-list-group-item>
                    <b-icon icon="clock" font-scale="1" v-if="post.frontmatter.time"></b-icon>
                    <span v-if="post.frontmatter.time">{{ time }}</span>
                    <b-icon icon="pen" font-scale="1" v-if="post.lastUpdated"></b-icon>
                    <span v-if="post.lastUpdated">{{ lastUpdated }}</span>
                </b-list-group-item>
            </b-list-group>
            <template v-slot:footer>
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
            </template>
        </b-card>
    </div>
</template>
<script>
import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc'

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
.postcard{
    padding: 5px 0 5px 0;
}
.tag-badge{
    display: inline-block;
    margin: 0 2px 0 2px;
    padding: 2px 0 2px 0;
}
</style>