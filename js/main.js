window.addEventListener("scroll", () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 35);
})
let buttonsWrapper = document.querySelector('.buttons--wrapper');
buttonsWrapper.addEventListener('scroll', (e) => {
    if (buttonsWrapper.scrollLeft > buttonsWrapper.clientWidth * 0.75) {
        document.querySelector('.button--section--hover').classList.replace('button--right', 'button--left');
    } else if (buttonsWrapper.scrollLeft < buttonsWrapper.clientWidth * 0.75) {
        document.querySelector('.button--section--hover').classList.replace('button--left', 'button--right');
    }
})