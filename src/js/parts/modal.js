function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.transform = '';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.transform = 'translateY(300%)';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
};
module.exports = modal;