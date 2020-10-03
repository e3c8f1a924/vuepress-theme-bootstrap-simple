<template>
    <div id="footer">
        <b-container>
            <b-row>
                <b-col>
                    <h1>Links</h1>
                    <b-row v-for="link in this.$site.themeConfig.preferences.links">
                        <b-col><a :href="link.href">{{ link.title }}</a></b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <h1>Description</h1>
                    <p>{{ this.$site.description }}</p>
                </b-col>
            </b-row>
            <b-row><hr></b-row>
            <b-row>
                <b-col><div class="info">Theme: <a href="https://github.com/Bambusaceae/vuepress-theme-bootstrap-simple">bootstrap-simple</a></div></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#footer{
    background-color: #563d7c;
    margin-top: 2rem;
    box-shadow: 0 -0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
    padding: 4rem 0 4rem 0;
    color: #ddd;
}
#footer h1{
    text-align: center;
    font-size: 24px;
    color: #fff !important;
}
#footer a{
    color: #ddd;
}
.info{
    text-align: center;
}
</style>