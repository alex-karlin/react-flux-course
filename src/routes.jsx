"use strict";

var React = require("react");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require("./components/app.jsx");
var HomePage = require("./components/homePage.jsx");
var AuthorPage = require("./components/authors/authorPage.jsx");
var ManageAuthorPage = require("./components/authors/manageAuthorPage.jsx");
var AboutPage = require("./components/about/aboutPage.jsx");
var NotFoundPage = require("./components/notFoundPage.jsx");

var Routes = React.createClass({
    render: function () {
        return (
            <Router history={ReactRouter.browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage}/>
                    <Route path="authors" component={AuthorPage}/>
                    <Route path="author" component={ManageAuthorPage}/>
                    <Route path="author/:id" component={ManageAuthorPage}/>
                    <Route path="about" component={AboutPage}/>
                    <Redirect from="about-us" to="about"/>
                    <Redirect from="about/*" to="about"/>
                    <Route path="*" component={NotFoundPage}/>
                </Route>
            </Router>
        );
    }
});

module.exports = Routes;