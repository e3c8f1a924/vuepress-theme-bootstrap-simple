module.exports=(themeConfig,ctx)=>{
    let pluginOptions={
        directories: [
            {
                id: "post",
                dirname: "_posts",
                path: "/",
                pagination: {
                    lengthPerPage: 10
                }
            }
        ],
        frontmatters: [
            {
                id: "tag",
                keys: ["tag","tags"],
                path: "/tag/",
                layout: "Tags",
                scopeLayout: "Tag"
            }
        ]
    };
    let themeConfigPluginOptions=(themeConfig.pluginOptions?themeConfig.pluginOptions:{});
    pluginOptions=Object.assign(pluginOptions,themeConfigPluginOptions);
    return{
        globalLayout: "./layouts/GlobalLayout.vue",
        plugins: [
            ["@vuepress/blog",pluginOptions]
        ]
    }
}