import NProgress from 'nProgress';

module.exports = {
  path: 'forms',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Forms'))
    });
  }
}
