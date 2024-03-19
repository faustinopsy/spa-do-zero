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

        const shellHead = document.createElement('div');
        shellHead.className = 'spa-shell-head';
        spaContainer.appendChild(shellHead);

        const shellHeadLogo = document.createElement('div');
        shellHeadLogo.className = 'spa-shell-head-logo';
        shellHead.appendChild(shellHeadLogo);

        const shellHeadAcct = document.createElement('div');
        shellHeadAcct.className = 'spa-shell-head-acct';
        shellHead.appendChild(shellHeadAcct);

        const shellHeadSearch = document.createElement('div');
        shellHeadSearch.className = 'spa-shell-head-search';
        shellHead.appendChild(shellHeadSearch);

        const shellMain = document.createElement('div');
        shellMain.className = 'spa-shell-main spa';
        spaContainer.appendChild(shellMain);

        const shellMainNav = document.createElement('div');
        shellMainNav.className = 'spa-shell-main-nav';
        shellMain.appendChild(shellMainNav);

        const shellMainContent = document.createElement('div');
        shellMainContent.className = 'spa-shell-main-content';
        shellMain.appendChild(shellMainContent);

        const shellFoot = document.createElement('div');
        shellFoot.className = 'spa-shell-foot';
        spaContainer.appendChild(shellFoot);

        const shellChat = document.createElement('div');
        shellChat.className = 'spa-shell-chat';
        spaContainer.appendChild(shellChat);

        const shellModal = document.createElement('div');
        shellModal.className = 'spa-shell-modal';
        spaContainer.appendChild(shellModal);
        spaContainer.appendChild(spaSlider);

        spaSlider.addEventListener('click', () => {
            const isRetracted = spaSlider.offsetHeight === configMap.retractedHeight;
            spaSlider.style.height = isRetracted ? `${configMap.extendedHeight}px` : `${configMap.retractedHeight}px`;
            spaSlider.title = isRetracted ? configMap.extendedTitle : configMap.retractedTitle;
        });
    });