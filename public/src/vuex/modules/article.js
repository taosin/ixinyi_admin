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
		const data = Vue.prototype.$dealWithArticlesData(articles);
		Vue.prototype.$h5setValue('articles-tx', data);
		// const datas = JSON.parse(Vue.prototype.$h5getValue('articles-tx'));
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
