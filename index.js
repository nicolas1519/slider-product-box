
let cont_slider = document.querySelector('.contSlider');

const next_banner = () => {

    let cont_slider_width = cont_slider.clientWidth;
    let new_scroll_value = cont_slider.scrollLeft + cont_slider_width;

    cont_slider.scroll( new_scroll_value, 0 );

}

const previous_banner = () => {

    let cont_slider_width = cont_slider.clientWidth;
    let new_scroll_value = cont_slider.scrollLeft - cont_slider_width;

    cont_slider.scroll( new_scroll_value, 0 );

}