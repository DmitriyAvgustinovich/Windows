const modals = () => {

    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        };

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        });

        triggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    };

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 5000);

};

export default modals;
