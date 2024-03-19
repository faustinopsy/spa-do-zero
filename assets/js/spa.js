import { createSpaContainer } from './componentes/spaContainer.js';
import { createLayoutElements } from './componentes/spaLayout.js';
import { createSpaSlider } from './componentes/spaSlider.js';
import { createModal } from './componentes/spaModal.js';
import { ApiLocalStorage } from './componentes/ApiLocalStorage.js';

document.addEventListener('DOMContentLoaded', () => {
    const spaContainer = createSpaContainer('spa');
    createLayoutElements(spaContainer);
    const spaSlider = createSpaSlider();
    spaContainer.appendChild(spaSlider);

    const modal = createModal();
    spaContainer.appendChild(modal);

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    function handleHashChange() {
        const hash = window.location.hash;
        if (hash === '#modal') {
            modal.show();
        } 

        if (hash === '#slider') {
            spaSlider.show()
        } 
    }

    if (ApiLocalStorage.getItem('modalVisible', false)) {
        modal.show();
    }
    if (ApiLocalStorage.getItem('sliderState', true)) {
        spaSlider.show();
    }
});
