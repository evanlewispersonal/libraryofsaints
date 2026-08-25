import m, { route, redraw } from 'mithril'
import Saints from '../../models/Saints'


const image_base = 'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/'

const Page = {

    oninit: vnode => {
        Saints.load(() => {
            vnode.state.saint = Saints.list.find(saint => saint.code == vnode.attrs.saint)
            if (vnode.state.saint) console.log(vnode.state.saint)
            m.redraw()
        })
    },

    view: function (vnode) {

        return [

            m('.page',
                m('h1', vnode.state.saint?.patron_name),//vnode.attrs.saint),
                m('.monikers', (vnode.state.saint?.monikers || ['the Strong', 'the Robber', 'the Nubian'])
                    .map(moniker => m('.moniker', moniker))
                ),
                m('.tags', (vnode.state.saint?.tags || ['Monk', 'Abbot', 'Priest']).map(tag => m('.tag', tag))),

                m('.icon_window',
                    m('.icons',
                        vnode.state.saint?.icons.map(icon => [
                            m('img.icon', { src: image_base + icon + '.jpg' })
                        ])),

                    m('a.icon_gallery_link',
                        {
                            href: '/gallery/' + vnode.state.saint?.code
                        },
                        'Full Icon Gallery'
                    )
                ),

                m('.lifeof',
                    m('.lifeof_reader',
                        {
                            class: vnode.state.life_of_expanded ? 'expanded' : '',

                        },
                        m('h3', 'Life of ', vnode.state.saint?.patron_name),
                        m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                        m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                        m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),

                    ),

                    m('.life_of_expand',
                        {
                            onclick: () => {
                                vnode.state.life_of_expanded = !vnode.state.life_of_expanded
                            }
                        },

                        vnode.state.life_of_expanded ? [
                            m('.collapse_line')
                        ] : m('.circles',
                            m('.circle'),
                            m('.circle'),
                            m('.circle')
                        ),

                    )


                ),

                m('.external_links',
                    m('h3', 'External Links'),
                    m('ul',
                        m('li', m('a', { href: '/' }, 'Website 1')),
                        m('li', m('a', { href: '/' }, 'Website 2')),
                        m('li', m('a', { href: '/' }, 'Website 3')),
                    )
                )
            )
        ]
    }
}

export default Page