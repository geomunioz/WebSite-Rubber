const btn_menu = document.getElementById('btn-menu_mobile');
const btn_close = document.getElementById('cancel-btn');

const services = document.getElementById('btn-services');

function activeMenuMobile(){
    const menu =  document.getElementById('menu-mobile');

    if(menu.className === 'menu-mobile disable'){
        menu.className = 'menu-mobile';
    }else{
        menu.className = 'menu-mobile disable';
    }
}

function activeSubmenu(){
    const submenu = document.getElementById('submenu-services');

    if(submenu.className === 'submenu-mobile__container disable'){
        submenu.className = 'submenu-mobile__container';
    }else{
        submenu.className = 'submenu-mobile__container disable';
    }
}
btn_menu.addEventListener('click', activeMenuMobile);
btn_close.addEventListener('click', activeMenuMobile);
services.addEventListener('click', activeSubmenu);