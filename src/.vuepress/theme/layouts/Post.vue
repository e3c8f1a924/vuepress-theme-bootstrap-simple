<template>
  <div class="article-content" v-highlight>
    <b-container>
      <Content />
      <div class="none-select details" v-if="this.$page.frontmatter.tag || this.$page.frontmatter.tags || this.$page.lastUpdated || this.$page.frontmatter.time">
        <b-icon icon="clock" font-scale="1" v-if="this.$page.frontmatter.time"></b-icon>
        <span v-if="this.$page.frontmatter.time">{{ time }}</span>
        <br>
        <b-icon icon="pen" font-scale="1" v-if="this.$page.lastUpdated"></b-icon>
        <span v-if="this.$page.lastUpdated">{{ lastUpdated }}</span>
        <br>
        <div v-if="this.$page.frontmatter.tag || this.$page.frontmatter.tags">
          <b-icon icon="tags" font-scale="1"></b-icon>
          <div class="tag-badge" v-for="tag in this.$page.frontmatter.tag">
              <b-button size="sm" variant="primary" :href="base+'tag/'+tag">
                  {{ tag }}
              </b-button>
          </div>
          <div class="tag-badge" v-for="tag in this.$page.frontmatter.tags">
              <b-button size="sm" variant="primary" :href="base+'tag/'+tag">
                  {{ tag }}
              </b-button>
          </div>
        </div>
      </div>
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
    },
    base(){
        return this.$site.base;
    }
  }
}
</script>
<style>
.details{
  color: #888;
  border-radius: 5px;
  border-left: 2px solid indigo;
  border-right: 2px solid indigo;
  border-top: 2px solid indigo;
  border-bottom: 2px solid indigo;
  padding: 10px 10px 10px 10px;
}
.tag-badge{
    display: inline-block;
    margin: 0 2px 0 2px;
    padding: 2px 0 2px 0;
}
</style>