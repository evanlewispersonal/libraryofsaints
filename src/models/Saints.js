const Saints = {
    loaded: false,

    list: [],

    load: (cb = () => { }, hard_load = false) => {

        if (!hard_load && Saints.list && Saints.list.length > 0) return cb()

        if (Saints.loading_list) {
            Saints.callback_queue = Saints.callback_queue || []
            Saints.callback_queue.push(cb)
            return
        }
        else {

            Saints.loading_list = true
            //LOAD
            fetch('/saintslist')
                .then(json_result => json_result.json())

                .then(saints => {

                    Saints.list = saints
                    Saints.loading_list = false
                    Saints.loaded = true
                    cb()
                    if (Saints.callback_queue) {
                        Saints.callback_queue.forEach(waiting_callback => {
                            waiting_callback()
                        })
                        Saints.callback_queue = []
                    }

                    // redraw()
                }).catch(err => {
                    console.error(err)
                })
        }
    }
}

module.exports = Saints