import m, { route, redraw } from 'mithril'

import Saints from '../../models/Saints'

import { search_icon, down_arrow } from '../components/icons'


const image_base = 'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/'

const skeleton_list = [{ tskeletonest: true }, { skeleton: true }, { skeleton: true }]

const Page = {

    oninit: vnode => {
        Saints.load(() => m.redraw())
        vnode.state.input = ''
    },

    view: function (vnode) {

        return [
            m('.library_bar',

                m('.search_bar_section',
                    m('.search_bar',
                        m('input', {
                            id: 'WhyIgottamakeanid?',
                            type: 'text',
                            oninput: e => {
                                vnode.state.input = e.target.value
                            }

                        }, ''),
                        m(search_icon)
                    )
                ),


                m('.filter_bar_section'),
            ),

            m('.page',

                m('.display_section'),
                m('.sort_section',
                    m(sort_button)
                ),


                m('.saint_tiles',

                    (Saints.list || skeleton_list)
                        .filter(saint => saint.patron_name.toLowerCase().includes(vnode.state.input.toLowerCase()))

                        .map(saint => [
                            m('a.saint_tile',
                                {
                                    href: '/saint/' + saint.code
                                },
                                m('.saint_tile_title.saint_tile_name', saint.patron_name),
                                saint.monikers ? m('.saint_tile_title.saint_tile_moniker', saint.monikers[0]) : [],
                                m('.saint_tile_image', m('img', { src: image_base + (saint.icons ? saint.icons[0].code : '') + '.jpg' }))
                            )

                        ])
                )

            )
        ]

    }
}

const sort_button = {
    view: vnode => {
        return [
            m('.sort_by',
                m('.sort_by_button_wrapper',
                    m('select.sort_by_button',
                        {
                            id: 'sortbutton',
                            value: vnode.attrs.sort_code,
                            onchange: vnode.attrs.onchange
                        },

                        // vnode.attrs.columns
                        [
                            {code: 'name', title: 'Name'},
                            {code: 'dob', title: 'Date (Birth)'},
                        ]
                            .filter(c => ['name', 'dob'].includes(c.code))

                            .map(c => m('option', { value: c.code }, 'By ' + c.title)),
                    )
                ),

                m('button.light_button.button_link.reverse_sort_button', {
                    onclick: vnode.attrs.reverse,
                    title: vnode.attrs.sorting_reversed ? 'Ascending' : 'Descending'
                },
                    vnode.attrs.sorting_reversed ? m(up_arrow, { fill: 'currentColor' }) : m(down_arrow, { fill: 'currentColor' }),

                )
            )
        ]
    }
}

export default Page

// const saints =
//     [

//         { patron_name: 'St. Mary', monikers: ['of Egypt'], icons: ['saintmary'] },
//         { patron_name: 'St. Moses', monikers: ['the Black', 'the Ethiopian', 'the Strong'], icons: ['saintmoses'] },
//         { patron_name: 'St. Paisios', monikers: ['the Athonite'], icons: ['saintpaisiosofmountathos'] },
//         { patron_name: 'Prophet Jonah', icons: ['jonah'] },
//         { patron_name: 'Prophet Noah', icons: ['noah'] },
//         { patron_name: 'St. John', monikers: ['The Baptist'], icons: ['saintjohnthebaptist'] },
//         { patron_name: 'Prophet Moses', monikers: ['the God-Seer'], icons: ['moses'] },
//         { patron_name: 'Abraham', monikers: ['the Patriarch'], icons: ['abraham'] },
//         { patron_name: 'St. Nephon', monikers: ['Bishop of Consantinople'], icons: ['nephon'] },
//         { patron_name: 'St. Christopher', monikers: ['the Christ-bearer', 'of Lycia', 'the Great Martyr'], icons: ['saintchristopher'] },
//         { patron_name: 'St. Paul', monikers: ['the Apostle'], icons: ['saintpaul'] },
//         { patron_name: 'St. Peter', monikers: ['the Apostle', 'Bishop of Rome', 'Bishop of Antioch'], icons: ['saintpeter'] },
//         { patron_name: 'St. Simeone', monikers: ['the Stylite'], icons: ['saintsimeon'] },
//         { patron_name: 'St. Marina', monikers: ['the Great Martyr'], icons: ['saintmarina'] },
//         { patron_name: 'St. Elizabeth', monikers: ['the Grand Duchess'], icons: ['saintelizabeth'] },
//     ]



