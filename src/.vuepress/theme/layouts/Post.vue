<template>
  <div class="article-content" v-highlight>
    <b-container>
      <Content />
      <Comment v-if="this.$site.themeConfig.preferences.gitalk"/>
    </b-container>
  </div>
</template>
<script>
import Comment from '@theme/components/Comment.vue';
export default{
  components: {Comment}
}
</script>