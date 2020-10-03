<template>
    <div id="gitalk-container">

    </div>
</template>
<script>
import Gitalk from 'gitalk';
export default {
    mounted(){
        let gitalk=new Gitalk(this.$site.themeConfig.preferences.gitalk);
        gitalk.render('gitalk-container');
    }
}
</script>