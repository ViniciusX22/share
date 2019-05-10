// var menus = [];
window.onload = () => {
    
    for (let menu of document.querySelectorAll('[data-menu]')) {
        let newMenu = {};
        newMenu.details = document.querySelector(`[data-menu-ref=${menu.getAttribute('data-menu')}]`);
        newMenu.options = menu.querySelectorAll('[data-menu-option]');
        newMenu.targets = newMenu.details.querySelectorAll('[data-menu-target]');

        newMenu.options.forEach(option =>
            option.addEventListener('click', ({ target: targetOption }) => {
                while (!targetOption.getAttribute('data-menu-option'))
                    targetOption = targetOption.parentElement;

                if (newMenu.details.style.display != 'flex')
                    newMenu.details.style.display = 'flex';
                
                newMenu.options.forEach(option => {
                    option.querySelector('.subtitle').style.display = 'none';
                    option.querySelector('.title').classList.add('title-modified');
                });

                newMenu.targets.forEach(target => {
                    if (target.getAttribute('data-menu-target') == targetOption.getAttribute('data-menu-option'))
                        target.style.display = 'block';
                    else
                        target.style.display = 'none';
                });
            })
        );
        // menus.push(newMenu);
    }
}