import NProgress from 'nProgress';

module.exports = {
  path: 'forms',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Forms'))
    });
  }
}
