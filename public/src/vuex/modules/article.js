const state = {
	articles: [],
	addArticleResult: []
};

// mutations
const mutations = {
	getArticles(allState, articles) {
		const newObject = [];
		for (const key in articles) {
			if (key) {
				newObject[key] = articles[key]._serverData;
				newObject[key].id = articles[key].id;
				newObject[key].createdAt = articles[key].createdAt;
				newObject[key].updatedAt = articles[key].updatedAt;
			}
		}
		allState.articles = newObject;
	},
	addArticle(allState, result) {
		allState.addArticleResult = result;
	}

};

export default {
	state,
	mutations
};
