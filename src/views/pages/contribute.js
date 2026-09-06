import m, { route, redraw } from 'mithril'

const Page = {

    view: function (vnode) {

        return [

            m('.page',
                m('h1', 'Contribue'),

                m('.default_box',

                    m('p', 'If you would like to help grow the Library of Saints, please send information based on one or more of the boxes below to eclauthor@gmail.com')

                ),

                m('.quotes',

                    m('.default_box',

                        m('h3', 'Data'),


                        m('p',
                            `{
            main_name: '`, m('b', `St. X`), `',
            secondary_names: ['`, m('b', `of Y`), `', '`, m('b', `the Z`), `'],
            icons: [
                { code: '`, m('b', `saintx`), `' },
                { code: '`, m('b', `saintx_2`), `' },
                { code: '`, m('b', `saintx_3`), `' }
            ],
            tags: [
                '`, m('b', `Ascetic`), `',
                '`, m('b', `Priest`), `'
            ]
            websites: [
                {
                    title: '`, m('b', `Fellowship of St. X`), `',
                    link: '`, m('b', `https://saintx.org/`), `'
                }
            ]
        },

Possible Tags:
Monk
Priest
Warrior
Desert Father/Mother
Martyr
Confessor of Faith
Prophet
Fool for Christ`
                        )

                    ),

                    m('.default_box',

                        m('h3', 'Lives of Saints'),


                        m('p', 'Maximum 1000 words. No minimum.'

                        )

                    ),

                    m('.default_box',

                        m('h3', 'Icons'),


                        m('p',
                            `Three versions: Full quality, 800px wide and 180px wide.`
                        )

                    ),
                )
            )
        ]

    }
}

export default Page