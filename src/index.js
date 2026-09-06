// Author -Evan Lewis

// Main js script called by index.html
// Front end framework - Mithril

import m, { route as _route } from 'mithril'
import Menu from "./models/Menu"


// import missingpage from './views/pages/404'
import layout from './views/layout'

_route.prefix = ''

var root = document.body

let routes = {}

import home from "./views/pages/home.js"
import saints from "./views/pages/saints.js"
import saint from "./views/pages/saint.js"
import christ from "./views/pages/christ.js"
import gallery from "./views/pages/gallery.js"
import contribute from "./views/pages/contribute.js"


let pages = {
    '/home': home,
    '/saints': saints,
    '/saint': saint,
    '/gallery': gallery,
    '/christ': christ,
    '/contribute': contribute,
}


Menu.get_pages()
    .filter(p => p.file !== false)
    .forEach(page => {

        let view = pages[page.route]

        let route = page.route
        if (page.subroute) { route += page.subroute }


        routes[route] =
        {
            render: function (vnode) {
                return (
                    m(layout, m(view, vnode.attrs))
                )
            }
        }
    })

routes['/'] = {
    render: vnode => m(layout, m(saints))
}

//404, doesn't override other urls because it is set after the others
//DONT MOVE ABOVE OTHER ROUTES OR IT WILL ACTIVATE FIRST AND EVERYTHING WILL BE 404

// routes['/:*'] = {
//     render: vnode => m(layout, m(missingpage))
// }
// routes['/:*/:*'] = {
//     render: vnode => m(layout, m(missingpage))
// }


//Home is default (libraryofsaints.com -> /)
_route(root, "/", routes);