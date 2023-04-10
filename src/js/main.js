import './slider'
import { modals, tabs, forms, changeModalState, timer } from './modules'

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {}
    let deadline = '2023-04-22'

    changeModalState(modalState)
    modals()
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    forms()
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms(modalState)
    timer('.container1', deadline)
})
