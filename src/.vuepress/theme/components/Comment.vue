<template>
    <div id="gitalk-container">

    </div>
</template>
<script>
import Gitalk from 'gitalk';
import md5 from 'md5';
export default {
    props: {
        post: Object
    },
    mounted(){
        let config=Object.assign(this.$site.themeConfig.preferences.gitalk,
            {
                id: md5(this.post.path)
            }
        );
        let gitalk=new Gitalk(config);
        gitalk.render('gitalk-container');
    }
}
</script>