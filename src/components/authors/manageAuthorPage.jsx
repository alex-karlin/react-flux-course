"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var AuthorForm = require('./authorForm.jsx');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Toastr = require('toastr');
var withRouter = ReactRouter.withRouter;

var ManageAuthorPage = React.createClass({
    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            isDirty: false,
            errors: {}
        };
    },
    componentWillMount: function() {
        var id = this.props.params.id; // this is from the path 'author/:id'
        if(id){
            var author = AuthorStore.getAuthorById(id);
            this.setState({author: author});
        }
    },
    componentDidMount: function () {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    },
    routerWillLeave: function(nextLocationgul){
        if(this.state.isDirty){
            return 'Your work is not saved. Are you sure you want to leave?';
        }
    },
    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author, isDirty: true});
    },
    validateAuthorForm: function () {
        var isValid = true;
        this.state.errors = {}; // clear any previous errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "First name msut be at tleast 3 characters.";
            isValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last name msut be at tleast 3 characters.";
            isValid = false;
        }

        this.setState({errors: this.state.errors});

        return isValid;

    },
    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.validateAuthorForm()) {
            return;
        }

        if(this.state.author.id){
            AuthorActions.updateAuthor(this.state.author);
        }
        else{
            AuthorActions.createAuthor(this.state.author);
        }

        this.setState({isDirty: false}, function stateUpdated(){
            ReactRouter.browserHistory.push('authors');
            Toastr.success('Author saved.');
        });
    },
    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}/>
        );
    }
});

module.exports = withRouter(ManageAuthorPage);