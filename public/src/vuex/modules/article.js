const state = {
	articles: [],
	addArticleResult: [],
	article:[],
	articleCount:0,
	serArticleResult:[],
	readLineDatas:[],
	readLineDates:[]
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
	},
	getReadInfos(allState, result){
		// for(let i in result){
		// 	const date = Vue.prototype.$formatDate(result[i].createdAt, 'yyyy-MM-dd');
		// }
		const keys = {};
		const dates = [];
		const values = {};
		for (let i = result.length-1; i >= 0; i--) {
			const key = Vue.prototype.$formatDate(result[i].createdAt, 'yyyy-MM-dd');
			const value = keys[key];
			if (!value) {
				keys[key]=key;
				dates.push(key);
				values[key] = [];
				values[key].push(result[i]);
			} else {
				values[key].push(result[i]);
			}
		}
		const keyAttr = Object.keys(keys).sort(function(a, b) {
			return new Date(b) - new Date(a);
		});
		allState.readLineDatas = values;
		allState.readLineDates = keyAttr;
	}

};

export default {
	state,
	mutations
};
