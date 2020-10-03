<template>
    <div id="global-layout">
        <Nav/>
        <GlobalLayout/>
        <Footer/>
    </div>
</template>
<script>
import GlobalLayout from '@app/components/GlobalLayout.vue';
import Nav from '@theme/components/Nav.vue';
import Footer from '@theme/components/Footer.vue';
export default {
    components: {GlobalLayout,Nav,Footer}
}
</script>