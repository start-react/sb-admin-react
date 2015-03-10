/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var LazyLoader = require('services/LazyLoader');




window.jQuery = require('jquery');
window.$ = window.jQuery;

require('metisMenu/dist/metisMenu.min.js');


require('bootstrap');

require('bootstrap/dist/css/bootstrap.min.css');
require('metisMenu/dist/metisMenu.min.css');

require('./sb-admin-2.less');

require('font-awesome/css/font-awesome.min.css');


require('sb-admin-2.js');

var routes = (
    <Route name="app" path="/" handler={require('Dashboard')}>

    	{/*<Route name="login" path="login" handler={require('Login')} />*/}

    	<Route name="login" path="/login" handler={require('Dashboard/Login')} />

        <Route name="dashboard" handler={require('Dashboard/Layout')}>
            <Route name="blank" handler={LazyLoader(require('bundle?lazy!Dashboard/Blank'))}/>
            <Route name="home" handler={LazyLoader(require('bundle?lazy!Dashboard/Home'))} />
            <Route name="flot-chart" handler={LazyLoader(require('bundle?lazy!Dashboard/Charts/FlotCharts'))} />
            <Route name="morris-chart" handler={LazyLoader(require('bundle?lazy!Dashboard/Charts/MorrisCharts'))} />
            <Route name="tables" handler={LazyLoader(require('bundle?lazy!Dashboard/Tables'))} />
            <Route name="forms" handler={LazyLoader(require('bundle?lazy!Dashboard/Forms'))} />

            <Route name="panels" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Panels'))} />
            <Route name="buttons" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Buttons'))} />
            <Route name="grid" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Grid'))} />
            <Route name="notifications" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Notifications'))} />
            <Route name="typography" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Typography'))} />
            <Route name="icons" handler={LazyLoader(require('bundle?lazy!Dashboard/UIElements/Icons'))} />



            <DefaultRoute handler={LazyLoader(require('bundle?lazy!Dashboard/Home'))}/>

        </Route>

        <DefaultRoute handler={require('Dashboard/Layout')}/>
         
    </Route>
   
      );



Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    $('body').trigger('click');
    //GrowlService.empty();
    React.render(<Handler routeState={state} params={state.params} query={state.query}/>, document.getElementById('content'));
    
});

module.exports = {};