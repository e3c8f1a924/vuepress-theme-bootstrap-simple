module.exports = {
	title: 'vuepress-theme-bootstrap-simple-test',
	description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.',
	themeConfig: {
		pluginOptions: {
			feed: {
				canonical_base: "https://bambusoideae.cn/"
			}
		},
		preferences: {
			links: [
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"},
				{title: "A quick brown fox jumps over the lazy dog.",href: "#"}
			],
			navlinks: [
				{title: "GitHub",href: "https://github.com/Bambusaceae/vuepress-theme-bootstrap-simple"},
				{title: "Report",href: "https://github.com/Bambusaceae/vuepress-theme-bootstrap-simple/issues"}
			],
			source: {
				show: true,
				srcDir: "https://github.com/Bambusaceae/vuepress-theme-bootstrap-simple/tree/master/src/",
				history: true,
				historyDir: "https://github.com/Bambusaceae/vuepress-theme-bootstrap-simple/commits/master/src/"
			},
			gitalk: {
				test: "test"
			}
		}
	}
}