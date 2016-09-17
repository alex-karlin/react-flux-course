"use strict";

var React = require("react");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <IndexLink to="/" className="navbar-brand">
                        <img src="images/PS_logo_footer_F-03.png"/>
                    </IndexLink>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to="/authors">Authors</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

        );
    }
});

module.exports = Header;