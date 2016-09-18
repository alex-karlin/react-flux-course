"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authodApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        // Dispatcher, go tell all the stores that an author just has been created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        // Dispatcher, go tell all the stores that an author just has been updated
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function (id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;