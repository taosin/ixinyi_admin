// const appId = 'apLrGX1xumsj3TROPuj41A6z-gzGzoHsz';
// const appKey = 'pE0K2vCPp01I1DBS4NhcfOFo';

// AV.init({ appId, appKey, region: 'cn' });

export const getArticles = ({
	dispatch
}) => {
	const query = new AV.Query('Articles');
  	query.find().then(function (results) {
      	dispatch('getArticles', results);
  		}, function (error) {
  			debugger;
  	});
};