const state = {
	provider: []
};

// mutations
const mutations = {
	getProvider(allState, provider) {
		allState.provider = provider;
	}

};

export default {
	state,
	mutations
};
