const provider = [{
	providerName: '11',
	num: '10',
	hosts: [],
	health: '90',
	balance: 'polling',
	cusomer: '50',
	op: '111'
}, {
	providerName: '12',
	num: '64',
	hosts: [],
	health: '34',
	balance: 'polling',
	cusomer: '65',
	op: '111'
}, {
	providerName: '31',
	num: '10',
	hosts: [],
	health: '45',
	balance: 'IP_hase',
	cusomer: '50',
	op: '111'
}, {
	providerName: '51',
	num: '15',
	hosts: [],
	health: '5',
	balance: 'polling',
	cusomer: '42',
	op: '111'
}, {
	providerName: '99',
	num: '60',
	hosts: [],
	health: '12',
	balance: 'IP_hash',
	cusomer: '51',
	op: '111'
}];
export const getProvider = ({
	dispatch
}, userType) => {
	Vue.http.get('/yggdrasil/provider').then((data) => {
		dispatch('getProvider', data.data.data);
	});
};