const state = {
	articles: [],
	addArticleResult: [],
	article:[],
	articleCount:0
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
	}

};

export default {
	state,
	mutations
};
