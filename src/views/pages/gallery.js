import m, { route, redraw } from 'mithril'
import Saints from '../../models/Saints'
import { download } from '../components/icons'


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
                m('h1', m('a', { href: '/saint/' + vnode.attrs.saint }, vnode.state.saint?.patron_name),
                    m('br'),
                    'Icon Gallery'),//vnode.attrs.saint),

                m('.icon_gallery',
                    m('.icons',
                        vnode.state.saint?.icons
                            // .concat
                            // (vnode.state.saint?.icons).concat
                            // (vnode.state.saint?.icons).concat
                            // (vnode.state.saint?.icons).concat
                            // (vnode.state.saint?.icons).concat
                            // (vnode.state.saint?.icons)

                            .map(icon => [
                                m('.icon_tile',
                                    m('img.icon', { src: image_base + icon.code + '.jpg' }),

                                    m('i.icon_title', 'Jonah survives'),
                                    m('a.icon_source', {href: icon.sourcelink}, icon.source),
                                    m('a.icon_download', {
                                        href: image_base + icon.code + '_800.jpg'
                                    },
                                        'Full Size',
                                        m(download))
                                )
                            ])),


                ),

            )
        ]
    }
}

export default Page