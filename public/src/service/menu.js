const leftmenu = [{
  id: 1,
  text: '首页',
  url: '#',
  level:'1'
}, {
  id: 1,
  text: '文章',
  url: '#/index/articlelist',
  level:'1'
}, {
  id: 1,
  text: '分类',
  url: '#/index/catelist',
  level:'1'
}, {
  id: 1,
  text: '标签',
  url: '#/index/biolist',
  level:'1'

},
// }, {
//   id: 1,
//   text: '相册',
//   url: '#/index/photolist',
//   level:'1'
// }, {
{
  id: 1,
  text: '相册',
  url: '#/index/photolist',
  level:'1'
}, {
  id: 1,
  text: '关于',
  url: '#/index/about',
  level:'1'
}
];
export const getLeftMenus = ({ dispatch }, userType) => {
  setTimeout(() => dispatch('getLeftMenus', leftmenu), 100);
};