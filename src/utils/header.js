function setMetaArgs(targetWidth) {
    var width = window.screen.width,
        scale = width / targetWidth,
        meta = document.createElement('meta')
    ;(meta.name = 'viewport'),
        (meta.content =
            'width=' +
            targetWidth +
            ',initial-scale=' +
            scale +
            // ',minimum-scale=' +
            // scale +
            // ',maximum-scale=' +
            // scale +
            ',user-scalable=no')
    document.getElementsByTagName('head')[0].appendChild(meta)
}

// window.onload = () => {
setMetaArgs(375)
// }
