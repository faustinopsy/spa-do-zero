import { ApiLocalStorage } from './ApiLocalStorage.js';

export function createSpaSlider() {
    const configMap = {
        extendedHeight: 268,
        extendedTitle: 'Clique para retrair',
        retractedHeight: 16,
        retractedTitle: 'Clique para expandir'
    };
    const spaSlider = document.createElement('div');
    spaSlider.className = 'spa-slider';
    spaSlider.style.zIndex = 10;
    spaSlider.title = configMap.retractedTitle;
    const sliderState = ApiLocalStorage.getItem('sliderState', configMap.retractedHeight);
    spaSlider.style.height = `${sliderState}px`;

    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';

    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';
    chatHeader.textContent = 'Chat'; 

    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.textContent = 'x';
    //closeButton.onclick = () => chatWindow.style.display = 'none'; 

    chatHeader.appendChild(closeButton);
    chatWindow.appendChild(chatHeader);

    const chatContent = document.createElement('div');
    chatContent.className = 'chat-content';
    chatWindow.appendChild(chatContent);

    const chatInputContainer = document.createElement('div');
    chatInputContainer.className = 'chat-input-container';

    const chatInput = document.createElement('input');
    chatInput.className = 'chat-input';
    chatInput.placeholder = 'Envie uma mensagem';
    chatInputContainer.appendChild(chatInput);

    const sendButton = document.createElement('button');
    sendButton.className = 'send-button';
    sendButton.textContent = 'Enviar';
    chatInputContainer.appendChild(sendButton);

    chatWindow.appendChild(chatInputContainer);
    spaSlider.appendChild(chatWindow);

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
