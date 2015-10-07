var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var AuthStore = require('../../stores/AuthStore');

var LogoutPage = React.createClass({
    
    componentWillUnmount: function(){
    },
    
    mixins: [Reflux.connect(AuthStore), Router.Navigation],

    render: function(){
        return <div>Redirecting</div>;
    }

});

export default LogoutPage;