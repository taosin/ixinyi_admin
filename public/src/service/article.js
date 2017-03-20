/*
* @Author: iMocco
* @Date:   2017-03-17 14:41:23
* @Last Modified by:   iMocco
* @Last Modified time: 2017-03-20 19:19:34
*/
export const getArticles = ({
  dispatch
}, data) => {
  Vue.http.get('/articles', data).then((err) => {
  }, (result) => {
    dispatch('getArticles', result.data);
  });
};

// export const addArticle = ({
//   dispatch
// }, data) => {
//   const Article = AV.Object.extend('Articles');
//   const addarticle = new Article();
//   addarticle.save({
//     title: data.title,
//     content: data.content,
//     tag: data.tag,
//     state: data.state
//   }).then(function(object) {
//     dispatch('addArticle', object);
//   });
// };

// export const getArticleById = ({
//   dispatch
// }, id) => {
//   var query = new AV.Query('Articles');
//   query.get(id).then(function(result) {
//         // 成功获得实例
//         const data = {};
//         data.title = result.get('title');
//         data.content = result.get('content');
//         data.tag = result.get('tag');
//         data.state = result.get('state');
//         data.id = result.id;
//         data.createdAt = result.createdAt;
//         data.updatedAt = result.updatedAt;
//         dispatch('getArticleById', data);
//       }, function(error) {
//         console.log(error);
//       });
// };

export const getArticleCount = ({
  dispatch
}, data) => {
  Vue.http.get('/articlesCount', data).then((err) => {
  }, (result) => {
    dispatch('getArticleCount', result.data);
  });
};
export const searchArticles = ({
  dispatch
}, data) => {
  Vue.http.get('/queryArticles', data).then((err) => {
  }, (result) => {
    dispatch('searchArticles', result);
  });
};
export const getReadInfos = ({
  dispatch
}) => {
  Vue.http.get('/readInfo').then((err) => {
  }, (result) => {
    dispatch('getReadInfos', result.data);
  });
};