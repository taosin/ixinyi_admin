const state = {
	articles: [],
	addArticleResult: []
};

// mutations
const mutations = {
	getArticles(allState, articles) {
		allState.articles =	Vue.prototype.$transDataFromLc(articles);
	},
	addArticle(allState, result) {
		allState.addArticleResult = result;
	}

};

export default {
	state,
	mutations
};
