document.addEventListener('DOMContentLoaded', () => {
    const spaContainer = document.querySelector('#spa');    
    const configMap = {
            extendedHeight: 434,
            extendedTitle: 'Clique para retrair',
            retractedHeight: 16,
            retractedTitle: 'Clique para expandir'
    };

        const spaSlider = document.createElement('div');
        spaSlider.className = 'spa-slider';
        spaSlider.style.zIndex = 10;
        spaSlider.title = configMap.retractedTitle;
        spaSlider.style.height = `${configMap.retractedHeight}px`; 


        spaContainer.appendChild(spaSlider);

        spaSlider.addEventListener('click', () => {
            const isRetracted = spaSlider.offsetHeight === configMap.retractedHeight;
            spaSlider.style.height = isRetracted ? `${configMap.extendedHeight}px` : `${configMap.retractedHeight}px`;
            spaSlider.title = isRetracted ? configMap.extendedTitle : configMap.retractedTitle;
        });
    });