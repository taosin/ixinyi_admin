const cusomer = [{
	provider: '192.168.1.45',
	host: '192.168.1.45:8080',
	balance: 'polling',
	servicenums: '50',
	CPU:'1',
	IO:'100',
	elastic:'1',
	op:''
}, {
	host: '192.168.1.45:88',
	provider: '192.168.1.45',
	balance: 'polling',
	servicenums: '50',
	CPU:'1',
	IO:'100',
	elastic:'1',
	op:''
}, {
	host: '192.168.1.52:8181',
	provider: '192.168.1.45',
	balance: 'polling',
	servicenums: '50',
	CPU:'1',
	IO:'100',
	elastic:'1',
	op:''
}, {
	host: '192.168.1.35:8900',
	provider: '192.168.1.45',
	balance: 'polling',
	servicenums: '50',
	CPU:'1',
	IO:'100',
	elastic:'1',
	op:''
}, {
	host: '192.168.1.453:80',
	provider: '192.168.1.45',
	balance: 'polling',
	servicenums: '50',
	CPU:'1',
	IO:'100',
	elastic:'1',
	op:''
}];
export const getCusomers = ({ dispatch }, userType) => {
	// Vue.http.get('/yggdrasil/consumer').then((data) => {
		dispatch('getCusomers', cusomer);
	// });
};