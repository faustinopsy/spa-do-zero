import { ApiLocalStorage } from './ApiLocalStorage.js';

export function createSpaSlider(configMap) {
    const spaSlider = document.createElement('div');
    spaSlider.className = 'spa-slider';
    spaSlider.style.zIndex = 10;
    spaSlider.title = configMap.retractedTitle;
    const sliderState = ApiLocalStorage.getItem('sliderState', configMap.retractedHeight);
    spaSlider.style.height = `${sliderState}px`;

    spaSlider.addEventListener('click', () => {
        const isRetracted = spaSlider.offsetHeight === configMap.retractedHeight;
        const newState = isRetracted ? configMap.extendedHeight : configMap.retractedHeight;
        spaSlider.style.height = `${newState}px`;
        spaSlider.title = isRetracted ? configMap.extendedTitle : configMap.retractedTitle;
        ApiLocalStorage.setItem('sliderState', isRetracted)
    });

    spaSlider.show = function() {
        const newState = configMap.extendedHeight;
        spaSlider.style.height = `${newState}px`;
        spaSlider.title = configMap.extendedTitle;
        ApiLocalStorage.setItem('sliderState', true);
    }

    spaSlider.hide = function() {
        const newState = false;
        ApiLocalStorage.setItem('sliderState', newState);
    }
    return spaSlider;
}
