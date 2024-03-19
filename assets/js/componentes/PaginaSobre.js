export function createSobre() {
    const sobrepage = document.createElement('div');
    sobrepage.className = 'spa-page spa-PaginaSobre';
    sobrepage.innerHTML = `
    <h2>Página Sobre</h2><p>Nunc felis turpis, 
    maximus faucibus erat vel, 
    consequat finibus urna. Maecenas sit amet ante sapien.</p>
    `;
    return sobrepage;
}