const state = {
	leftmenus: []
};

// mutations
const mutations = {
	getLeftMenus(allState, menus) {
		allState.leftmenus = menus;
	}

};

export default {
	state,
	mutations
};
