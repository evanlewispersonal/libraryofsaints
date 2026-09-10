
const Saints =

{
    list: [

        {
            patron_name: 'St. Mary',
            monikers: ['of Egypt'],
            icons: [
                { code: 'saintmary' },
                { code: 'saintmary_2' },
                { code: 'saintmary_3' }
            ],
            tags: [
                'Ascete',
                'Desert Mother'
            ]
        },

        {
            patron_name: 'St. Moses',
            monikers: ['the Black', 'the Ethiopian', 'the Strong', 'the Robber'],
            icons: [

                {
                    code: 'saintmoses_2',
                    name: '',
                    source: 'St. Andrew Greek Orthodox Church',
                    sourcelink: 'https://saintandrewgoc.org/blog/2015/8/28/love-for-all-creation'
                },
                {
                    code: 'saintmoses',
                    title: '',
                    source: 'Orthodox Road',
                    sourcelink: 'https://www.orthodoxroad.com/saint-moses-the-black/'
                },
                {
                    code: 'saintmoses_3',
                    source: 'Unknown'
                },
                {
                    code: 'saintmoses_4',
                    source: 'St. Innocent of Alaska Monastery',
                    sourcelink: 'https://stinnocentmonastery.org/life_of_st_moses_the_black'
                }
            ],
            tags: ['Monk', 'Abbot', 'Priest', 'Desert Father'],
            websites: [
                {
                    title: 'Fellowship of St. Moses the Black',
                    link: 'https://mosestheblack.org/'
                }

            ]
        },
        {
            patron_name: 'St. Paisios',
            monikers: [
                'the Athonite',
                'the Hagiorite'
            ],
            icons: [
                { code: 'saintpaisiosofmountathos' },
            ],
            tags: [
                'Monk',
                'Carpenter',
                'Radio Technician'
            ]
        },
        {
            patron_name: 'Prophet Jonah',
            icons: [{ code: 'jonah' }],
            // tags: [
            //     ''
            // ]
        },
        {
            patron_name: 'Prophet Noah',
            icons: [{ code: 'noah' }],
        },
        {
            patron_name: 'St. John',
            monikers: ['The Baptist'],
            icons: [{ code: 'saintjohnthebaptist' }]
        },
        {
            patron_name: 'Prophet Moses',
            monikers: ['the God-Seer'],
            icons: [{ code: 'moses' }]
        },
        {
            patron_name: 'Abraham',
            monikers: ['the Patriarch'],
            icons: [{ code: 'abraham' }]
        },
        {
            patron_name: 'St. Nephon',
            monikers: ['Bishop of Consantinople'],
            icons: [{ code: 'nephon' }],
            tags: ['Monk']
        },
        {
            patron_name: 'St. Christopher',
            monikers: ['the Christ-bearer', 'of Lycia', 'the Great Martyr'],
            icons: [{ code: 'saintchristopher' }],
            tags: ['Martyr']
        },
        {
            patron_name: 'St. Paul',
            monikers: ['the Apostle'],
            icons: [{ code: 'saintpaul' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Peter',
            monikers: ['the Apostle', 'Bishop of Rome', 'Bishop of Antioch'],
            icons: [{ code: 'saintpeter' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Simeone',
            monikers: ['the Stylite'],
            icons: [{ code: 'saintsimeon' }],
            tags: ['Monk']

        },
        {
            patron_name: 'St. Marina',
            monikers: ['the Great Martyr'],
            icons: [{ code: 'saintmarina' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Elizabeth',
            monikers: ['the Grand Duchess'],
            icons: [{ code: 'saintelizabeth' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Adrian',
            monikers: ['of Nicomedia'],
            icons: [{ code: 'adrianandnatalia' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Natalia',
            monikers: ['of Nicomedia'],
            icons: [{ code: 'adrianandnatalia' }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Phanourius',
            monikers: ['the Newly-Revealed'],
            icons: [{ code: 'saintphanourius' }],
            tags: ['Martyr'],
            websites: [
                {
                    title: 'Life of Saint Phanourious - Orthodox Church of Americal',
                    link: 'https://www.oca.org/saints/lives/2022/08/27/108969-saint-phanourius'
                }
            ]

        },
        {
            patron_name: 'St. Alexander',
            monikers: ['of Munich'],
            icons: [
                {
                    code: 'saintalexanderofmunich',
                    source: 'https://ocf.net/theres-a-saint-for-that-st-alexander-of-munich/',
                    sourcelink: 'https://ocf.net/theres-a-saint-for-that-st-alexander-of-munich/'
                }],
            tags: ['Martyr']

        },
        {
            patron_name: 'St. Gabriel',
            monikers: ['of Georgia'],
            icons: [
                {
                    code: 'saintgabrielofgeorgia',
                    source: 'American Carpatho-Russian Orthodox Diocese of North America',
                    sourcelink: 'https://www.acrod.org/orthodox-christianity/articles/saints/st-gregory-urgebadze'
                }],
            tags: [
                'Confessor of Faith',
                'Fool for Christ'
            ]

        },
        {
            patron_name: 'St. George',
            monikers: ['the Holy Great Martyr', 'the Victory-Bearer', 'the Wonderworker'],
            icons: [
                {
                    code: 'saintgeorge',
                    source: 'Orthodox Church in America',
                    sourcelink: 'https://www.oca.org/saints/lives/2026/04/23/101184-greatmartyr-victory-bearer-and-wonderworker-george'
                }],
            tags: ['Martyr', 'Warrior']

        },



        // Saint Elois
        // Cyprian and Justina https://www.youtube.com/watch?v=nor581GvVg4
        // Pantaleimon
    ]

}


Saints.list.forEach(saint => {
    saint.code = saint.patron_name.replace(/ |\./g, '').toLowerCase()
})

module.exports = Saints


