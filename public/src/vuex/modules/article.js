const state = {
	articles: [],
	addArticleResult: [],
	article:[]
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
	}

};

export default {
	state,
	mutations
};
