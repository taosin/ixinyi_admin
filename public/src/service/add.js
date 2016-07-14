export const addCate = ({
  dispatch
}, data) => {
  const Cates = AV.Object.extend('Cates');
  const addcate = new Cates();
  addcate.save({
    name: data.name,
    iscate: data.iscate,
    state: data.state,
    op: data.op
  }).then(function (object) {
    dispatch('addCate', object);
  });
};

export const queryCates = ({
  dispatch
}, data) => {
  const cates = new AV.Query('Cates');
  cates.find().then(function (results) {
    dispatch('queryCates', results);
  }, function (error) {
  });
};