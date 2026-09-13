const headerName = document.querySelector('.typing-wordmark');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (headerName && !reducedMotion.matches) {
    const name = headerName.dataset.name;
    const container = headerName.querySelector('.typing-name');
    const text = document.createElement('span');
    text.className = 'typing-text';
    // Reserve the full name's width so navigation stays still while typing.
    container.dataset.name = `${name}\u00a0`;
    container.replaceChildren(text);

    let position = 0;
    let timer;
    const typeNext = () => {
        text.textContent = name.slice(0, ++position);
        if (position < name.length) timer = window.setTimeout(typeNext, 120);
    };
    timer = window.setTimeout(typeNext, 350);

    reducedMotion.addEventListener('change', (event) => {
        if (event.matches) {
            window.clearTimeout(timer);
            text.textContent = name;
        }
    });
}
