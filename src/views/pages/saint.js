import m, { route, redraw } from 'mithril'
import Saints from '../../models/Saints'
import { up_circle } from '../components/icons'


const image_base = 'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/'

const Page = {

    oninit: vnode => {
        Saints.load(() => {
            vnode.state.saint = Saints.list.find(saint => saint.code == vnode.attrs.saint)
            if (vnode.state.saint) console.log(vnode.state.saint)
            m.redraw()
        })

        Saints.load_saints_life(vnode.attrs.saint, (life) => {
            vnode.attrs.life = life
            m.redraw()
        })
    },

    view: function (vnode) {


        let common_name = [vnode.state.saint?.patron_name,
        vnode.state.saint?.monikers ? [' ',
            vnode.state.saint?.monikers[0]] : []]

        let secondary_monikers = vnode.state.saint?.monikers ? vnode.state.saint.monikers.slice(1) : []
        return [

            m('.page',
                vnode.attrs.test ? m(background_frieze) : [],
                m('.inner_page',
                    m('h1',
                        common_name

                    ),//vnode.attrs.saint),
                    m('.monikers', (secondary_monikers)
                        .map(moniker => m('.moniker', moniker))
                    ),
                    vnode.state.saint?.tags ? m('.tags', (vnode.state.saint?.tags.map(tag => m('.tag', tag)))) : [],

                    m('.icon_window',
                        m('.icons',
                            vnode.state.saint?.icons.map(icon => [
                                m('img.icon', { src: image_base + icon.code + '.jpg' })
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
                            vnode.attrs.life ? m.trust(vnode.attrs.life) : [
                                m('p', 'If you know of a public domain summary of the life of ', common_name, ' or are willing to write a short summary yourself, use the ', m('a', { href: '/contribute' }, 'contribute'), ' page'),

                                m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                                m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                                m('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                                m('p', m('i', 'Source: Submitted by Joe Bloggs of St. Mary, Sydney Australia')),
                            ]
                        ),

                        m('.life_of_expand',
                            {
                                onclick: () => {
                                    vnode.state.life_of_expanded = !vnode.state.life_of_expanded
                                }
                            },

                            vnode.state.life_of_expanded ? [

                                m(up_circle),

                                // m('.collapse',
                                //     m('.collapse_line_1'),
                                //     m('.collapse_line_2'),
                                //     m('.collapse_line_3'),
                                //     m('.collapse_line_4'),

                                // )

                            ] : m('.circles',
                                m('.circle'),
                                m('.circle'),
                                m('.circle')
                            ),

                        )


                    ),

                    m('.external_links',
                        m('h3', 'External Links'),
                        vnode.state.saint?.websites ? m('ul',
                            vnode.state.saint?.websites.map(website => [
                                m('li', m('a', { href: website.link }, website.title)),
                                // m('li', m('a', { href: '/' }, 'Website 2')),
                                //     m('li', m('a', { href: '/' }, 'Website 3')),
                            ]
                            )
                        ) : m('p', 'If you know of any churches, monasteries, communities or websites associated with ', common_name, ', please use the ', m('a', { href: '/contribute' }, 'contribute'), ' page'),

                    )
                )
            )
        ]
    }
}


const background_frieze = {
    view: vnode => {
        return [
            m('.crosses',
                [...Array(600)].map(x => m(cross))
            ),
            m('.crosses',
                [...Array(600)].map(x => m(cross))
            ),
        ]
    }
}


const cross = {
    view: vnode => {
        return [
            m('.cross',
                m('.vertical'),
                m('.horizontal'),
                m('.plaque'),
                m('.footstand'),
            )
        ]
    }
}

export default Page