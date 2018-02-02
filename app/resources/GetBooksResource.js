(function () {
    "use strict";   
    let books =[]
    let bookOne = {
            id: '0',
            title: 'I am Batman',
            author: 'Bruce Wheny',
            gener: 'Bio',
            publish: 'DC',
            date: '1997.04.25',
            price: '150kr',
            descriton: 'a book about Batman By himself'
    }
    let bookTwo = {
            id: '1',
            title: 'The Jocker',
            author: '??',
            gener: 'Bio',
            publish: 'DC',
            date: '2000.10.02',
            price: '200kr',
            descriton: 'why so serious'
    }
    let bookTrhee = {
        id: '2',
        title: 'What are Human',
        author: 'Dansi Dans',
        gener: 'fakta',
        publish: 'human company',
        date: '2010.01.01',
        price: '350kr',
        descriton: 'a book about what it menns to be a human living '
    }
    var LibraryDAO = require('../dao/LibraryDAO'); 
    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        books.push(bookOne,bookTwo,bookTrhee)
        callback(JSON.stringify(books))
    };

}());
