export const doLogin = ({
  dispatch
}, data) => {
  const login = new AV.Query('Users');
  login.equalTo('username', data.username);
  login.equalTo('password', data.password);
  login.find().then(function (results) {
    dispatch('doLogin', results);
  }, function (error) {
  });
};