export const Api =
    {
        server: {
            host: 'http://localhost',
            port: ':8000',
            prefix: '/api',
        },
        book: {
            apiAddBook: '/books/add',
            apiDellBook: '/dell-book',
        },
        news: {
            apiAddNew: '/api-add-New',
            apiDellNew: '/api-dell-New',
        },
        language: {
            apiAdd: '/language/add',
            getAll: '/language/all',
            apiDell: '/language/dell',
            apiEdit: '/language/edit',
        },
        author: {
            apiAdd: '/author/add',
            getAll: '/author/all',
            apiDell: '/author/dell',
            apiEdit: '/author/edit',
        },
        edition: {
            apiAdd: '/edition/add',
            getAll: '/edition/all',
            apiDell: '/edition/dell',
            apiEdit: '/edition/edit',
        },

    };

export const Root = Api.server.host + Api.server.port + Api.server.prefix;