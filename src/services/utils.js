export function installYT () {
    const   tag = document.createElement('script')
            tag.src = "https://www.youtube.com/player_api"

    const   firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    if (window.devmode) {
        window.onYouTubeIframeAPIReady = function() {
            console.log('YouTube API installed and ready')
        }
    }
}

export function getStyle (className) {
    const stylesheets = document.styleSheets
    let result

    for (let stylesheet of stylesheets) {
        let classes = stylesheet.rules || stylesheet.cssRules
        for (let entry of classes) {
            if (entry.selectorText === className) {
                result = (entry.cssText) ? entry.cssText : entry.style.cssText
                break
            }
        }
    }

    result = result.substring(result.indexOf('{') + 1).replace('}', '')
    let attributes = result.split(';')
    let style = {}
    for (let attribute of attributes) {
        if (attribute != ' ') {
            let keyvalue = attribute.replace(/\s/g, '').split(':')
            style[keyvalue[0]] = keyvalue[1]
        }
    }

    return style
}

export function shuffle (arr) {
    let i, j, temp
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}


        // mounted () {
        //     this.blockStyles.newsblock = getStyle('.newsblock')
        //     this.blockStyles.textblock = getStyle('.textblock')
        //     this.blockStyles.videoblock = getStyle('.videoblock')
        //     this.orderLayout()
        // },
        // methods: {
        //     orderLayout () {
        //         const space = document.querySelector('.page').offsetWidth
        //         let data = this.pagedata
        //         let width = 0

        //         for (let i = 0; i < data.blocks.length; ++i) {
        //             let type = data.blocks[i].type.toLowerCase()
        //             width += parseInt(this.blockStyles[type].width)

        //             if (width > space) {
        //                 data.blocks[i - 1].nomargin = true
        //                 width = 0
        //             }
        //             if (i === data.blocks.length - 1) {
        //                 data.blocks[i].nomargin = true
        //             }
        //         }
        //         this.pagedata = data
        //     }
        // },
