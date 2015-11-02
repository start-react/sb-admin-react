import NProgress from 'nProgress';

module.exports = {
  path: 'buttons',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Buttons'))
    })
  }
}