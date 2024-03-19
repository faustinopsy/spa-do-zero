export function createInicial() {
    const InicialPage = document.createElement('div');
    InicialPage.className = 'spa-page spa-PaginaInicial';
    InicialPage.innerHTML = `
    <h2>Página Inicial</h2><p>Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Nam hendrerit nisi sed 
    sollicitudin pellentesque.</p>
    `;
    return InicialPage;
}