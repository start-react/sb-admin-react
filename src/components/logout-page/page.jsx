var React = require('react');
var AppActions = require('../../actions/app-actions');
var Router = require('react-router');
var Reflux = require('reflux');
var AppStore = require('../../stores/app-store');

var LogoutPage = React.createClass({
    
    componentWillUnmount: function(){
    },
    
    mixins: [Reflux.connect(AppStore), Router.Navigation],

    render: function(){
        return <div>Redirecting</div>;
    }

});

export default LogoutPage;