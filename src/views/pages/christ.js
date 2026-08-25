import m, { route, redraw } from 'mithril'

const Page = {

    view: function (vnode) {

        return [

            m('.page',
                m('h1', 'Christ'),


                m('.life_of_christ',

                    m('h3', 'Life of Christ'),

                    m('p', m('i', 'And there are also so many other things that Jesus did, which if they were written one by one, I suppose that even the world itself could not contain the books that would be written. Amen')),

                    m('p', m('', 'John 21:25'))

                ),


                m('.quotes',
                    m('.quote',
                        m('i', 'But seek first the kingdom of God and his righteousness, and all these things shall be added to you.'),
                        m('p', 'Matthew 6:33')
                    ),
                    m('.quote',
                        m('i', 'I did not come to call the righteous, but sinners, to repentance'),
                        m('p', 'Mark 2:17')
                    ),
                    m('.quote',
                        m('i', 'For where two or three are gathered together in My name, I am in the midst of them.'),
                        m('p', 'Matthew 18:20')
                    ),
                ),

                m('.come_and_see',
                    m('p', m('i', 'Come and see.')),

                    m('p', m('', 'John 1:39'))

                ),

                m('.churches',
                    m('p',
                        m('', 'Australian Orthodox Churches'),
                        m('a', { href: 'https://orthodoxyinaustralia.com/churches-in-australia-using-english/' }, 'English-speaking'),
                        m('a', { href: 'https://orthodoxyinaustralia.com/' }, 'All')

                    ),
                    m('p',
                        m('', 'U.S.'),
                        // m('a', { href: '/' }, 'English-speaking'),
                        m('a', { href: 'https://www.oca.org/parishes' }, 'All')

                    ),
                    m('p',
                        m('', 'U.K.'),
                        // m('a', { href: '/' }, 'English-speaking'),
                        m('a', { href: 'https://orthodoxwords.wordpress.com/orthodox-churches-in-the-uk/' }, 'All')

                    ),
                    // m('p',
                    //     m('', 'India'),
                    //     m('a', { href: '/' }, 'All')

                    // ),
                    m('p',
                        m('', 'Other'),
                        // m('a', { href: '/' }, 'English-speaking'),
                        m('a', { href: 'https://orthodox-world.org/en/index' }, 'All')

                    ),
                )
            )
        ]

    }
}

export default Page