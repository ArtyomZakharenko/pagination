import {fetchFollowers} from './fetchFollowers.js'
import {displayFollowers} from './displayFollowers.js'
import {paginate} from './pagination.js'
import {displayButtons} from './displayButtons.js'

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')
let index = 0
let pages = []

const setupUI = () => {
    displayFollowers(pages[index])
    displayButtons(btnContainer, pages, index)
}

const init = async () => {
    const followers = await fetchFollowers()
    title.textContent = 'pagination'
    pages = paginate(followers)
    setupUI()
}

btnContainer.addEventListener('click',(e) => {
    if (e.target.classList.contains('btn-container')) return
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index)
    }
    if (e.target.classList.contains('next-btn')) {
        index++
    }
    if (e.target.classList.contains('prev-btn')) {
        index--
    }
    setupUI()
})

window.addEventListener('load', init)