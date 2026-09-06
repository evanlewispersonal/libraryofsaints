import m, { route, redraw } from 'mithril'
import Menu from '../models/Menu'
import { noai_icon } from './components/icons'

const Page = {
    oninit: vnode => {
        vnode.state.dark_mode = localStorage.getItem('dark_mode') == 'true'
    },

    view: function (vnode) {

        return [

            m('.website',
                m(top_section),

                vnode.children,

                m(noai_icon),
                m('.in_progress', 'Work In Progress'),


                m('footer',
                    m('.links',
                        m('', 
                            m('a', { href: '/contribute'}, 'Contribute')
                        )
                    )
                )
            )
        ]
    }
}

const top_section = {
    view: vnode => {
        return [
            m('.top_section',
                m('.top_section_workable',
                    m(top_bar),
                    m(nav_bar)
                )
            ),

        ]
    }

}

const top_bar = {
    view: vnode => {
        return [
            m("header.top_bar",
                {
                    id: 'top_bar',
                },

                m('.title_and_logo_wrapper',
                    m('a.title_and_logo',
                        {
                            href: '/'
                        },
                        m('img.logo', {
                            src: 'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/libraryofsaintslogo.png',
                        }),
                        m('.title',
                            "Library of Saints"
                        )
                    )
                )
            )
        ]
    }
}

const nav_bar = {
    view: vnode => {
        return [
            m('nav.page_bar',

                m('.pages',

                    //Single Links
                    Menu.pages.filter(p => p.topbarlink && !p.parent).map(page =>
                        m(menu_title, { page: page })
                    ),


                )
            )
        ]
    }
}

const menu_title = {
    view: vnode => {
        let page = vnode.attrs.page
        return [
            m('a.menu_title',
                {
                    href: page.route,
                    class: `${page.title == 'Home' ? 'd_computer' : ''} ${route.get() == page.route ? 'active' : ''}`,
                },
                page.title
            )
        ]
    }
}

export default Page