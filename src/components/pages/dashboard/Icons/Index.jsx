import NProgress from 'nProgress';

module.exports = {
  path: 'icons',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Icons'))
    });
  }
}