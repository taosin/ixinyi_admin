const state = {
	articles: [],
	addArticleResult:[]
};

// mutations
const mutations = {
	getArticles(allState, articles) {
		allState.articles = articles;
	},
	addArticle(allState, result) {
		allState.addArticleResult = result;
	}

};

export default {
	state,
	mutations
};
