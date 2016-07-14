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


export const addArticle = ({
  dispatch
}, data) => {
  const Article = AV.Object.extend('Articles');
  const addarticle = new Article();
  addarticle.save({
    title: data.title,
    content: data.content,
    cate:data.cate,
    state: data.state,
    op: data.op,
  }).then(function (object) {
    dispatch('addArticle', object);
  });
};