
export const getArticles = ({
	dispatch
}) => {
	const query = new AV.Query('Articles');
  	query.find().then(function (results) {
      debugger;
      	dispatch('getArticles', results);
  		}, function (error) {
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