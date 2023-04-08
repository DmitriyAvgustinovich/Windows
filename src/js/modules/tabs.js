const tabs = (headerSelector, tabSelector, contentSelector) => {

    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        content.forEach(tab => {
            tab.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove('after_click');
        });
    };

    const showTabContent = (i = 0) => {
        content[i].style.display = 'block';
        tabs[i].classList.add('active');
    };

    hideTabContent();
    showTabContent();

    const toggleTabs = (e) => {
        const target = e.target;

        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    };

    header.addEventListener('click', toggleTabs);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            toggleTabs(e);
        }
    });
};

export default tabs;
