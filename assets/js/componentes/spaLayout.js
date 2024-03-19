function createDivElement(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

export function createLayoutElements(container) {
    const shellHead = createDivElement('spa-shell-head');
    container.appendChild(shellHead);

    shellHead.appendChild(createDivElement('spa-shell-head-logo'));
    shellHead.appendChild(createDivElement('spa-shell-head-acct'));
    shellHead.appendChild(createDivElement('spa-shell-head-search'));

    const shellMain = createDivElement('spa-shell-main spa');
    container.appendChild(shellMain);

    shellMain.appendChild(createDivElement('spa-shell-main-nav'));
    shellMain.appendChild(createDivElement('spa-shell-main-content'));

    container.appendChild(createDivElement('spa-shell-foot'));
    container.appendChild(createDivElement('spa-shell-chat'));
    
    
    
    return {
        shellHead,
        shellMain
    };
}
