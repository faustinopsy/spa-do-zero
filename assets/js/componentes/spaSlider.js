export function createSpaSlider(configMap) {
    const spaSlider = document.createElement('div');
    spaSlider.className = 'spa-slider';
    spaSlider.style.zIndex = 10;
    spaSlider.title = configMap.retractedTitle;
    spaSlider.style.height = `${configMap.retractedHeight}px`;

    spaSlider.addEventListener('click', () => {
        const isRetracted = spaSlider.offsetHeight === configMap.retractedHeight;
        spaSlider.style.height = isRetracted ? `${configMap.extendedHeight}px` : `${configMap.retractedHeight}px`;
        spaSlider.title = isRetracted ? configMap.extendedTitle : configMap.retractedTitle;
    });

    return spaSlider;
}
