import NProgress from 'nProgress';

module.exports = {
  path: 'flot-charts',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./FlotCharts'))
    });
  }
}