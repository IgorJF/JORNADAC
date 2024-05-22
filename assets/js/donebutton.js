document.addEventListener('DOMContentLoaded', () => {
    const statusButtons = document.querySelectorAll('.status-button');
    
    statusButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique no botão propague para o item
            button.classList.toggle('done');
            button.classList.toggle('not-done');
            button.textContent = button.classList.contains('done') ? 'Feito' : 'Não Feito';
        });
    });
});