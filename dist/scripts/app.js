let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.c-summary_list li, p,span, .u-text, h3, a, video,.alone, img, .title, .c-direction-block_item_inner, .background-video .c-section_infos_inner, .c-fixed, .c-damn');






window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = (e.pageY) + "px" 
    mouseCursor.style.left = (e.pageX) + "px"
}

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
})

*/---------------------CLICK--------------------------*/

document.addEventListener('click', ()=>{
    mouseCursor.classList.add('expand');

    setTimeout(()=>{
        mouseCursor.classList.remove("expand");
    }, 500);
})