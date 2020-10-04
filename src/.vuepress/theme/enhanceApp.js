import Vue from 'vue';
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue';
import hljs from 'highlight.js';

import 'gitalk/dist/gitalk.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'highlight.js/styles/tomorrow-night-bright.css';
import 'gitalk/dist/gitalk.css';

import './css/global.css'

Vue.directive('highlight',(el)=>{
	let blocks=el.querySelectorAll('pre code');
	blocks.forEach((block)=>{hljs.highlightBlock(block);});
});

export default ({
	Vue
})=>{
	Vue.use(BootstrapVue);
	Vue.use(IconsPlugin);
};