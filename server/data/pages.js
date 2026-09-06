// const Formatter = require('../logic/formatter')

const Saints = require("./saints")

const s3_base = 'https://libraryofshortstories.s3.ap-southeast-2.amazonaws.com/'

const image_url = s3_base + 'small/'

const pages = {
    description_character_minimum: 70,
    description_character_limit: 155,
    basic_title: "Library of Saints",
    basic_description: "The Library of Saints | Read the lives of the Christian Saints.",
    basic_type: 'website',
    basic_keywords: 'Saints',
    home_description: `Library of Saints.`,

    get: () => [
        // {
        //     route: '/',
        //     topbarlink: true,
        //     title: "Home",
        //     get_index_title: () => pages.basic_title,
        //     get_description: () => pages.home_description,
        //     get_type: () => pages.basic_type
        // },
        {
            route: '/christ',
            topbarlink: true,
            title: "Christ",
            get_index_title: (_, query) => {

                return "Christ | Library of Saints"

            }
        },
        {
            route: '/contribute',
            topbarlink: true,
            title: "Contribute",
            get_index_title: (_, query) => {

                return "Contribute | Library of Saints"

            }
        },
        {
            route: '/saints',
            topbarlink: true,
            title: "Saints",
            get_index_title: (_, query) => {

                return "The Library | Library of Saints"

            }
        },
        {
            route: '/saint',
            subroute: '/:saint',
            title: "Saints",
            get_index_title: (_, query) => {

                return "The Library | Library of Saints"

            },
            possible_sub_routes: Saints.list.map(saint => saint.code),

        },
        {
            route: '/gallery',
            subroute: '/:saint',
            title: "Gallery",
            get_index_title: (_, query) => {

                return "Gallery | Library of Saints"

            },
            possible_sub_routes: Saints.list.map(saint => saint.code),

        }
    ]
}

module.exports = pages