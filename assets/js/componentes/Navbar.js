import { createInicial } from './PaginaInicial.js';
import { createSobre } from './PaginaSobre.js';
import { createContato } from './PaginaContato.js';

export function createNavbar(contentContainer) {
    const pages = {
        '#inicial': createInicial(),
        '#sobre': createSobre(),
        '#contato': createContato()
    };

    const navbar = document.createElement('nav');
    navbar.className = 'spa-navbar';
    
    const linkInicial = document.createElement('a');
    linkInicial.href = '#inicial';
    linkInicial.textContent = 'Inicial';
    
    const linkSobre = document.createElement('a');
    linkSobre.href = '#sobre';
    linkSobre.textContent = 'Sobre';
    
    const linkContato = document.createElement('a');
    linkContato.href = '#contato';
    linkContato.textContent = 'Contato';
    
    navbar.appendChild(linkInicial);
    navbar.appendChild(linkSobre);
    navbar.appendChild(linkContato);

    navbar.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const hash = event.target.getAttribute('href');
            window.location.hash = hash;
            renderPage(hash);
        }
    });

    function renderPage(hash) {
        contentContainer.innerHTML = '';
        contentContainer.appendChild(pages[hash]);
    }

    window.addEventListener('hashchange', () => renderPage(window.location.hash));
    if (window.location.hash) {
        renderPage(window.location.hash);
    } else {
        window.location.hash = '#inicial';
    }
    
    return navbar;
}
