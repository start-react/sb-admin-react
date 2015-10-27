import React from 'react';
import Router from 'react-router';
import { Route, RouteHandler, Link } from 'react-router';
import NProgress from 'NProgress';

NProgress.configure({ showSpinner: false });

var AsyncElement = {
  loadedComponent: null,

  load: function () {

    if (this.constructor.loadedComponent){
      return;
    };

    NProgress.start();
    
    this.bundle(function (component) {
      NProgress.done();
      this.constructor.loadedComponent = component;
      this.forceUpdate();
    }.bind(this));
  },

  componentDidMount: function() {
    this.load();
  },

  render: function () {

    var Component = this.constructor.loadedComponent;
    if (Component) {
      // can't find RouteHandler in the loaded component, so we just grab
      // it here first.
      this.props.activeRoute = <RouteHandler/>;
      return <Component {...this.props}/>;
    }

    return this.preRender();

  }
};

export default AsyncElement;