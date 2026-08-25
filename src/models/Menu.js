import { redraw, route } from "mithril";
// import { capitalise_first } from "../logic/Formatter";

const base_canonical_url = 'https://www.libraryofsaints.com/'

const Menu = {
    content_size: 1,

    is_route: (given_route) => {
        return route.get() == given_route
    },


    get_pages: () => Menu.pages,

    get_page: (given_route) => {
        if (!given_route) {
            let changed_route = route.get().split('?')[0]
            changed_route = changed_route.split('#')[0]
            changed_route = changed_route.split('/')
            given_route = '/' + changed_route[1]
        }

        let page = Menu.pages.find(page => page.route == given_route)
        if (!page) {
            console.error(`No page for ${given_route}`)
        }
        return page
    },

    //Must match with Pages on server
    pages: [
        { route: '/', title: "Saints", topbarlink: true },

        { route: '/saint', subroute: '/:saint' },
        { route: '/gallery', subroute: '/:saint' },

        { route: '/christ', title: "Christ", topbarlink: true },

    ],

}

export default Menu