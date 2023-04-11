const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup-images', 'popup-images--open');

    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')) {

            imgPopup.style.display = 'flex';
            document.body.classList.add('modal-open');

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);

        }

        if (target && target.matches('div.popup-images')) {

            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open');

        }

    });
};

export { images }