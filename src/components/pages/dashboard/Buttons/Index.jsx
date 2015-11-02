import NProgress from 'nProgress';

module.exports = {
  path: 'buttons',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Buttons'))
    })
  }
}