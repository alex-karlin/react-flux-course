"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes.jsx');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(<Routes/>, document.getElementById('app'));