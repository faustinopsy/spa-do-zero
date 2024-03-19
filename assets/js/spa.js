// main.js
import { createSpaContainer } from './componentes/spaContainer.js';
import { createSpaSlider } from './componentes/spaSlider.js';
import { createLayoutElements } from './componentes/spaLayout.js';
import { createModal } from './componentes/spaModal.js';

document.addEventListener('DOMContentLoaded', () => {
    const configMap = {
        extendedHeight: 434,
        extendedTitle: 'Clique para retrair',
        retractedHeight: 16,
        retractedTitle: 'Clique para expandir'
    };

    const spaContainer = createSpaContainer('spa');
    const spaSlider = createSpaSlider(configMap);
    spaContainer.appendChild(spaSlider);

    createLayoutElements(spaContainer); 

    const modal = createModal();
    spaContainer.appendChild(modal);


    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#modal') {
            modal.show();
        }
    });


    if (window.location.hash === '#modal') {
        modal.show();
    }
});
