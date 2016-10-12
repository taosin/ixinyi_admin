const state = {
	articles: [],
	addArticleResult: [],
	article:[],
	articleCount:0,
	serArticleResult:[]
};

// mutations
const mutations = {
	getArticles(allState, articles) {
		allState.articles =	Vue.prototype.$transDataFromLc(articles);
	},
	addArticle(allState, result) {
		allState.addArticleResult = result;
	},
	getArticleById(allState, result) {
		allState.article = result;
	},
	getArticleCount(allState, result) {
		allState.articleCount = result;
	},
	searchArticles(allState, result) {
		allState.serArticleResult = Vue.prototype.$transDataFromLc(result);
	}

};

export default {
	state,
	mutations
};
