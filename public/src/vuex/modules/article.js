const state = {
	articles: []
};

// mutations
const mutations = {
	getArticles(allState, articles) {
		allState.articles = articles;
	}

};

export default {
	state,
	mutations
};
