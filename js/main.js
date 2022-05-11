window.addEventListener("scroll", () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 200);
})
let buttonsWrapper = document.querySelector('.buttons--wrapper');
buttonsWrapper.addEventListener('scroll', (e) => {
    if (buttonsWrapper.scrollLeft > buttonsWrapper.clientWidth * 0.75) {
        document.querySelector('.button--section--hover').classList.replace('button--right', 'button--left');
    } else if (buttonsWrapper.scrollLeft < buttonsWrapper.clientWidth * 0.75) {
        document.querySelector('.button--section--hover').classList.replace('button--left', 'button--right');
    }
})
let btnActive = document.querySelector('#button-all');
let menuBtns = document.querySelectorAll('.buttons--wrapper>button')
menuBtns.forEach((btn)  => {
    btn.addEventListener('click', (e) => {
        if (e.target == btn) {
            btnActive.classList.remove('btn--focus');
            btnActive = btn;
            btnActive.classList.add('btn--focus');
        } else if (e.target.tagName == ("P") && e.target.parentNode==btn) {
            btnActive.classList.remove('btn--focus');
            btnActive = e.target.parentNode;
            btnActive.classList.add('btn--focus');
        }
    })
})