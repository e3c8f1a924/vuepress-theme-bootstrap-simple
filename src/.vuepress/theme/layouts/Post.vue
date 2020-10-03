<template>
  <div class="article-content" v-highlight>
    <b-container>
      <Content />
      <div class="none-select details">
        <b-icon icon="clock" font-scale="1" v-if="this.$page.frontmatter.time"></b-icon>
        <span v-if="this.$page.frontmatter.time">{{ time }}</span>
        <br>
        <b-icon icon="pen" font-scale="1" v-if="this.$page.lastUpdated"></b-icon>
        <span v-if="this.$page.lastUpdated">{{ lastUpdated }}</span>
      </div>
      <hr v-if="this.$site.themeConfig.preferences.gitalk">
      <Comment v-if="this.$site.themeConfig.preferences.gitalk"/>
    </b-container>
  </div>
</template>
<script>
import Comment from '@theme/components/Comment.vue';

import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc'

dayjs.extend(dayjsPluginUTC);

export default{
  components: {Comment},
  computed: {
    time() {
        return dayjs.utc(this.$page.frontmatter.time).format(this.$themeConfig.preferences.timeFormat || "YYYY MM DD ddd hh:mm:ss");
    },
    lastUpdated() {
        if(!this.$page.lastUpdated)return "";
        return dayjs.utc(this.$page.lastUpdated).format(this.$themeConfig.preferences.lastUpdatedTimeFormat || "YYYY MM DD ddd hh:mm:ss");
    }
  }
}
</script>
<style>
.details{
  color: #888;
}
</style>