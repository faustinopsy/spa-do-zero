import { createSpaContainer } from './componentes/spaContainer.js';
import { createLayoutElements } from './componentes/spaLayout.js';
import { createSpaSlider } from './componentes/spaSlider.js';
import { createModal } from './componentes/spaModal.js';
import { ApiLocalStorage } from './componentes/ApiLocalStorage.js';
import { createNavbar } from './componentes/Navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    const spaContainer = createSpaContainer('spa');
    const { shellMain } = createLayoutElements(spaContainer);

    const content = shellMain.querySelector('.spa-shell-main-content');
    const nav= shellMain.querySelector('.spa-shell-main-nav');
    
    const navbar = createNavbar(content);
    nav.appendChild(navbar);

    const spaSlider = createSpaSlider();
    spaContainer.appendChild(spaSlider);

    const modal = createModal();
    spaContainer.appendChild(modal);

    if (ApiLocalStorage.getItem('modalVisible', false)) {
        modal.show();
    }
    if (ApiLocalStorage.getItem('sliderState', true)) {
        spaSlider.show();
    }
});
