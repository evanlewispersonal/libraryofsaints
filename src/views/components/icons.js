import m from 'mithril'
export const download = {
    view: vnode => {
        return [
            m("svg", {
                class: "icon-tabler icon-tabler-file-download",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24", height: "24",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round"
            },
                [
                    m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    m("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
                    m("path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" }),
                    m("line", { x1: "12", y1: "11", "x2": "12", "y2": "17" }),
                    m("polyline", { "points": "9 14 12 17 15 14" })
                ]
            )
        ]
    }
}

export const up_circle = {
    view: vnode => {
        return [
            m("svg", { class: "icon-tabler icon-tabler-arrow-up-circle", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                [
                    m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    m("circle", { cx: "12", "cy": "12", "r": "9" }),
                    m("line", { x1: "12", y1: "8", "x2": "8", "y2": "12" }),
                    m("line", { x1: "12", y1: "8", "x2": "12", "y2": "16" }),
                    m("line", { x1: "16", y1: "12", "x2": "12", "y2": "8" })
                ]
            )
        ]
    }
}

export const search_icon = {
    view: vnode => {
        let width = vnode.attrs.size || '1em'
        let height = vnode.attrs.size || '1em'

        return [

            m("svg", {
                class: "icon-tabler icon-tabler-search " + (vnode.attrs.class || ''),
                xmlns: "http://www.w3.org/2000/svg",
                width: width,
                height: height,
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            },
                [
                    m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    m("circle", { cx: "10", "cy": "10", "r": "7" }),
                    m("line", { x1: "21", y1: "21", "x2": "15", "y2": "15" })
                ]
            )
        ]
    }
}


export const noai_icon = {
    view: vnode => {

        let colour_1 = 'black'//'green'//'black'
        let colour_2 = 'white'//'white'
        // let colour_3 = 'black'
        // let colour_4 = 'white'

        return [

            m("svg", {
                "width": 60,
                "height": 60,
                "version": "1.1",
                "id": "svg1",
                class: 'noai_icon',
                "sodipodi:docname": "no-ai.svg",
                "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
                "xmlns": "http://www.w3.org/2000/svg",
                "xmlns:svg": "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20"
            },
                [
                    m("defs", { "id": "defs1" }),
                    m("metadata", { "id": "metadata1" },
                        "Aldercone StudioXolotl Fierro"
                    ),

                    [
                        m("title", { "id": "title1" },
                            "Layer 1"
                        ),
                        m("path", {
                            "id": "path37",
                            "d": "m 10 1.89 c -4.47 0 -8.1 3.64 -8.1 8.11 c 0 4.46 3.63 8.1 8.1 8.1 c 4.47 0 8.1 -3.64 8.1 -8.1 c 0 -4.47 -3.63 -8.11 -8.1 -8.11 z m 0 1.13 c 3.86 0 6.98 3.12 6.98 6.98 c 0 0.71 -0.11 1.41 -0.31 2.06 l -2.88 -1.29 v -3.84 l 0.68 -0.39 v -1.04 h -2.96 v 1.04 l 0.7 0.39 v 3.13 l -2.07 -0.92 l -0.74 -3.64 h -2.07 l -0.44 2.19 l -2.87 -1.29 c 1.22 -2.03 3.44 -3.38 5.98 -3.38 z m -1.61 3.93 c 0.02 0.24 0.05 0.5 0.08 0.79 c 0.03 0.23 0.07 0.46 0.1 0.69 l -0.35 -0.15 c 0.08 -0.49 0.14 -0.94 0.17 -1.33 z m -4.87 0.46 l 3.15 1.41 l -1.14 5.67 h 1.71 l 0.33 -1.98 h 1.63 l 0.34 1.98 h 1.69 l -0.82 -4 l 1.8 0.8 v 1.78 l -0.7 0.39 v 1.03 h 2.96 v -1.03 l -0.68 -0.39 v -1.07 l 2.46 1.1 c -1.14 2.3 -3.51 3.87 -6.25 3.87 c -3.86 0 -6.97 -3.11 -6.97 -6.97 c 0 -0.92 0.17 -1.79 0.49 -2.59 z m 4.52 2.02 l 0.74 0.33 l 0.18 1.1 h -1.15 z",
                            "stroke-width": "0.4",
                            "stroke": colour_1,
                            "fill": colour_2
                        })

                    ]

                ]
            )
        ]
    }
}

export const down_arrow = {
    view: vnode => {

        let width = vnode.attrs.resize ? '1em' : '22'
        let height = vnode.attrs.resize ? '1em' : '22'
        let fill = vnode.attrs.fill || 'none'
        let stroke_width = vnode.attrs.stroke_width || '1.5'

        return [
            m("svg", {
                class: (vnode.attrs.class || '') + " icon-tabler icon-tabler-caret-down", xmlns: "http://www.w3.org/2000/svg",
                width: width,
                height: height,
                viewBox: "0 0 24 24",
                "stroke-width": stroke_width,
                stroke: "currentColor", fill: fill, "stroke-linecap": "round", "stroke-linejoin": "round"
            },
                [
                    m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    m("path", { d: "M18 15l-6 -6l-6 6h12", "transform": "rotate(180 12 12)" })
                ]
            )
        ]
    }
}