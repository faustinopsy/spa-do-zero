export function createSpaContainer(containerId) {
    const spaContainer = document.createElement('div');
    spaContainer.id = containerId;
    document.body.appendChild(spaContainer);
    return spaContainer;
}
