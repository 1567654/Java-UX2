// filter menu
const filter = document.querySelector('#placeholder-icon')
const close = document.querySelector('#close')
const footer = document.querySelector('footer')
footer.style.display = 'none'
filter.addEventListener('click', () => {
    let filterState = footer.style.display
    if (filterState === 'none') {
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

// items in filter menu
const filterBody = document.querySelector('.filter-body')
const itemContents = document.getElementsByClassName('.item-content')

filterBody.addEventListener('click', (evt) => {
    let target = evt.target
    if (target.getAttribute("class") === 'drop' || target.getAttribute("class") === 'drop-button') {
        if (target.getAttribute("class") === "drop-button") {
            target = evt.target.parentElement.parentElement
        } else {
            target = evt.target.parentElement.parentElement.parentElement
        }
        let targetContent = target.children[1]
        let itemState = targetContent.style.height
        if (itemState < '200px') {
            targetContent.style.height = '200px'
        } else {
            targetContent.style.height = '0px'
        }
    }
})