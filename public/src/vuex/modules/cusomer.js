const state = {
	cusomers: []
};

// mutations
const mutations = {
	getCusomers(allState, cusomers) {
		allState.cusomers = cusomers;
	}

};

export default {
	state,
	mutations
};
