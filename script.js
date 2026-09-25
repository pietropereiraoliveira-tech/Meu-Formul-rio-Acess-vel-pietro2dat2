document.addEventListener('DOMContentLoaded', () => {
    // Elementos da página
    const likeBtn = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
    const toggleBtn = document.getElementById('toggle-btn');
    const details = document.getElementById('details');

    let count = 0;

    // Recurso 1: Contador de curtidas
    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
    });

    // Recurso 2: Mostrar e esconder detalhes
    toggleBtn.addEventListener('click', () => {
        details.classList.toggle('hidden');
        if (details.classList.contains('hidden')) {
            toggleBtn.textContent = 'Mostrar Detalhes';
        } else {
            toggleBtn.textContent = 'Esconder Detalhes';
        }
    });
});