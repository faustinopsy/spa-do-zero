export function createContato() {
    const constatopage = document.createElement('div');
    constatopage.className = 'spa-page spa-PaginaContato';
    constatopage.innerHTML = `
    <h2>Página Contato</h2><p>
    Vestibulum ante ipsum primis in faucibus orci luctus et 
    ultrices posuere cubilia curae; Etiam consequat.</p>
    `;
    return constatopage;
}