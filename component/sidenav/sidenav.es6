import navtemplate from './sidenav.html';

var navTree = {
	"一级1": {
		"二级1": "goodlist",
		"二级2": "sellinglist",
		"二级3": "stockoutlist",
	},
	"一级2": "classmanage"
};

var subnav = vue.component('side-nav', {
	data: function() {
		return {'navTree': navTree, 'show': null}
	},
	methods: {
		clickSub: function(url) {
			this.show = this.show === url ? null : url;
		}
	},
	template: navtemplate
});

export default subnav;