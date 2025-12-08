/*
* @Author: iMocco
* @Date:   2017-03-17 14:41:23
* @Last Modified by:   iMocco
* @Last Modified time: 2017-03-21 09:51:20
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

export const getArticleById = ({
  dispatch
}, data) => {
  Vue.http.get('/articleById', data).then((err) => {
  }, (result) => {
    dispatch('getArticleById', result.data);
  });
};

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
  const query = new AV.Query('ReadInfo');
  query.descending('createdAt');
    // query.limit(data.limit); // 最多返回 10 条结果
    // query.skip(data.start);
    query.find().then(function(results) {
      dispatch('getReadInfos', results);
    }, function(error) {});
  };

  export const addMsg = ({
    dispatch
  }, data) => {
    const Message = AV.Object.extend('Messages');
    const addMessage = new Message();
    addMessage.save({
      name: data.name,
      mail: data.mail,
      website: data.website,
      type:data.type,
      content:data.content,
      state:data.state
    }).then(function(object) {
      dispatch('addMsg', object);
    });
  };

  export const getMessages = ({
  dispatch
}, data) => {
  const query = new AV.Query('Messages');
  query.descending('createdAt');
    query.limit(data.limit);
    query.skip(data.start);
    query.find().then(function(results) {
      dispatch('getMessages', results);
    }, function(error) {});
  };
