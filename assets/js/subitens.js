document.addEventListener('DOMContentLoaded', () => {
    const modulos = document.querySelectorAll('.card-modulo');
    
    modulos.forEach(modulo => {
        modulo.addEventListener('click', () => {
            const menu = modulo.querySelector('.menu-modulo');
            menu.classList.toggle('hidden');
        });

        const subitens = modulo.querySelectorAll('.subitem-modulo');
        
        subitens.forEach(subitem => {
            subitem.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const aula = subitem.querySelector('.aula-modulo');
                aula.classList.toggle('hidden');
            });
        });
    });
});
