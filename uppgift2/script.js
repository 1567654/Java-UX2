const filter = document.querySelector('#placeholder-icon')
const close = document.querySelector('#close')
const footer = document.querySelector('footer')
footer.style.display = 'none'
filter.addEventListener('click', () => {
    let state = footer.style.display
    if (state === 'none') {
        footer.style.display = 'block'
        footer.style.animation = '0.5s showFilter'
    } else {
        footer.style.animation = '0.5s hideFilter'
        setTimeout(() => { footer.style.display = 'none' }, 400)
    }
})
close.addEventListener('click', () => {
    footer.style.animation = '0.5s hideFilter'
    setTimeout(() => { footer.style.display = 'none' }, 400)
})