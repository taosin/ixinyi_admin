/*
* @Author: iMocco
* @Date:   2017-03-17 14:41:23
* @Last Modified by:   iMocco
* @Last Modified time: 2017-03-17 15:08:07
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
//   export const searchArticles = ({
//     dispatch
//   }, data) => {
//     const query = new AV.Query('Articles');
//     query.descending('createdAt');
//     query.limit(data.limit); // 最多返回 10 条结果
//     query.skip(data.start);
//     query.contains('title',data.title);
//     query.find().then(function(results) {
//       dispatch('searchArticles', results);
//     }, function(error) {});
//   };
//   export const getReadInfos = ({
//     dispatch
//   }, data) => {
//     const query = new AV.Query('ReadInfo');
//     query.descending('createdAt');
//     // query.limit(data.limit); // 最多返回 10 条结果
//     // query.skip(data.start);
//     query.find().then(function(results) {
//       dispatch('getReadInfos', results);
//     }, function(error) {});
//   };