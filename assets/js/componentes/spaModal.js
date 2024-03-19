export function createModal() {
    const modal = document.createElement('div');
    modal.className = 'spa-shell-modal';
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.zIndex = 5; 
    closeButton.style.backgroundColor = '#444';
    closeButton.style.color = '#fff'; 
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.padding = '5px 10px';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });
    closeButton.addEventListener('click', function() {
        modal.hide();
        window.location.hash = ''; 
    });
    modal.show = function() {
        modal.style.display = 'block';
    };
    modal.hide = function() {
        modal.style.display = 'none';
    };

    modal.appendChild(closeButton);
    return modal;
}
