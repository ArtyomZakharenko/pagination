export const displayButtons = (container, pages, activeIndex) => {
    let btns = pages.map((_, pageIndex) => {
        return `<button class="page-btn ${
            activeIndex === pageIndex ? 'active-btn' : 'null '
        }" data-index="${pageIndex}">
${pageIndex + 1}
</button>`
    })
    if (activeIndex !== 0){
        btns.unshift(`<button class="prev-btn">prev</button>`)
    }
    if (activeIndex !== pages.length - 1) {
        btns.push(`<button class="next-btn">next</button>`)
    }
    container.innerHTML = btns.join('')
}

