import m, { route, redraw } from 'mithril'

import Saints from '../../models/Saints'

const Page = {

    oninit: vnode => {
        Saints.load(() => m.redraw())
    },

    view: function (vnode) {

        return [

            m('.page',

                m('.saint_tiles',

                    Saints.list.map(saint => [
                        m('a.saint_tile',
                            {
                                href: '/saint/' + saint.code
                            },
                            m('.saint_tile_title.saint_tile_name', saint.patron_name),
                            saint.monikers ? m('.saint_tile_title.saint_tile_moniker', saint.monikers[0]) : [],
                            m('.saint_tile_image', m('img', { src: 'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/' + (saint.icons ? saint.icons[0] : '') + '.jpg' }))
                        )

                    ])
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



