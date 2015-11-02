import NProgress from 'nProgress';

module.exports = {
  path: 'tables',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Tables'))
    });
  }
}