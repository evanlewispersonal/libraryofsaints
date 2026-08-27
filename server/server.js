//Web Author - Evan Lewis

const express = require('express')
const mustacheExpress = require('mustache-express');

const cors = require('cors')
const app = express()
const helmet = require('helmet');
const fs = require('fs')
const path = require('path')

// const dbconnection = require('./data/dbconnection')
// const mongoSanitize = require('mongo-sanitize')

// dbconnection.connect_to_database()

// const gzipper = require('./logic/gzipper')

const pages = require('./data/pages')


const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')

let sitemap


// gzipper.zip_css()

const Saints = require('./data/saints')

const PORT = process.env.PORT || 3004;

var corsOptions = {
    origin: ['https://libraryofsaints.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(helmet({
    // crossOriginEmbedderPolicy: 'false', // enable COEP
    // crossOriginOpenerPolicy: "same-origin",
    // crossOriginOpenerPolicy: process.env.NODE_ENV == 'development' ? '' : 'same-origin',

    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    expectCt: false,
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "img-src": [
                "'self'",
                'https://libraryofsaints.s3.ap-southeast-2.amazonaws.com/'
            ],
            'upgrade-insecure-requests': process.env.NODE_ENV == 'development' ? null : [],
        }
    },

    'Cross-Origin-Embedder-Policy': 'same-origin',

}))

app.use(express.json())


app.enable('trust proxy');

app.set('views', __dirname);
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

const base_canonical_url = 'https://www.libraryofshortstories.com'


const basic_title = pages.basic_title
const basic_description = pages.basic_description
const basic_image = 'https://evanclewisimages.s3.ap-southeast-2.amazonaws.com/library_og.jpg'
const basic_image_alt = 'A collage of dramatic images and a logo underneath depicting several books and the title "Library of Short Stories"'

//HTTPS REDIRECT
app.use(function (request, response, next) {

    if (process.env.NODE_ENV != 'development' && (
        (!request.secure)
        ||
        (request.headers.host.match(/^www/) == null))
    ) {
        let url = "https://www." + request.headers.host.replace(/^www\./, '') + request.url

        return response.redirect(301, url);
    }
    else {
        next();
    }
})

let home_render = {
    bundle: 'bundle',

    canonical: base_canonical_url + '/',
    title: basic_title,
    description: pages.home_description,
    og_type: pages.basic_type,
    image: basic_image,
    image_alt: basic_image_alt,
    styling: 'saints',
    keywords: pages.basic_keywords,
}

app.get(['', '/'], (req, res) => {
    res.render('index', home_render)
})

pages.get().forEach(page => {

    if (page.subroute) {
        page.possible_sub_routes.forEach((subroute) => {

            app.get(page.route + '/' + encodeURI(subroute), (req, res) => {
                res.render('index', {
                    bundle: 'bundle',
                    canonical: base_canonical_url + page.route + '/' + subroute,
                    title: page.get_index_title ? page.get_index_title(subroute, req.query) : basic_title,
                    description: page.get_description ? page.get_description(subroute, req.query) : basic_description,
                    og_type: page.get_type ? page.get_type(subroute) : pages.basic_type,
                    image: page.get_image ? page.get_image(subroute) : basic_image,
                    image_alt: page.get_image_alt ? page.get_image_alt(subroute) : basic_image_alt,
                    keywords: page.get_keywords ? page.get_keywords(subroute) : pages.basic_keywords,
                    preloads: page.get_preloads ? page.get_preloads(subroute) : '',
                    styling: page.get_styling ? page.get_styling() : (page.route.replace('/', '')),
                })

                // res.sendFile(path.join(__dirname, '/../index.html'))
            })
        })
    }
    else {
        app.get(page.route, (req, res) => {
            res.render('index', {
                bundle: 'bundle',
                canonical: base_canonical_url + req.url,
                title: page.get_index_title ? page.get_index_title(null, req.query) : basic_title,
                description: page.get_description ? page.get_description(null, req.query) : basic_description,
                og_type: page.get_type ? page.get_type() : pages.basic_type,
                image: basic_image,
                image_alt: basic_image_alt,
                preloads: page.get_preloads ? page.get_preloads(null, req.query) : '',
                keywords: page.get_keywords ? page.get_keywords() : pages.basic_keywords,
                styling: page.get_styling ? page.get_styling() : (page.route.replace('/', '')),
            })

            // res.sendFile(path.join(__dirname, '/../index.html'))
        })
    }
})

app.get('/saintslifegzip/:saint', (req, res) => {

    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');

    let author = req.params.author.replace('.txt', '.gz')
    const filePath = path.join(__dirname, './public/writing-stylesgzip/' + author)
    res.sendFile(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.sendStatus(404);
            } else {
                console.error(err);
                res.sendStatus(500);
            }
        }
    })
})

app.get('/saintslife/:saint', (req, res) => {

    fs.readFile(path.join(__dirname, '/public/saintstxt/' + req.params.saint), 'utf8', (read_error, data) => {
        if (read_error) {
            // console.error(read_error)
            res.sendStatus(404)
            return
        }
        res.send({ text: data })
    })

})


app.get('/dist/bundle.js', (req, res) => {

    let encode = process.env.NODE_ENV == 'production'

    if (encode) res.set('Content-Encoding', 'gzip');

    res.set('Content-Type', 'application/javascript');

    res.sendFile(path.join(__dirname, '../dist/bundle.js' + (encode ? '.gz' : '')))
})


app.get('/styles/style.css', (req, res) => {
    let encode = process.env.NODE_ENV == 'production'

    if (encode) res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');

    res.sendFile(path.join(__dirname, './public/styles/style.css' + (encode ? '.gz' : '')))
})

app.get('/styles/pages/:style', (req, res) => {
    let encode = process.env.NODE_ENV == 'production'
    if (encode) res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');

    res.sendFile(path.join(__dirname, './public/styles/pages/' + req.params.style + (encode ? '.gz' : '')))
})


//Static
app.use(express.static(__dirname + '/public'));

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, './public/favicon.ico'))
})
app.get('/favicon.ico-16x16', (req, res) => {
    res.sendFile(path.join(__dirname, './public/favicon-16x16.ico'))
})

app.get('/saintslist', (req, res) => {
    res.send(Saints.list)
})

app.listen(PORT, () => {
    console.log("LISTENING: ", PORT)
})
