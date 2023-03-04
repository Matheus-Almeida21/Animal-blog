export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');
    console.log('adicionou classe');

    function outsideClick(element, events, callback) {
      const html = document.documentElement;
      function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
          element.removeAttribute('data-outside', '');
          events.forEach((userEvent) => {
            html.removeEventListener(userEvent, handleOutsideClick);
          });
          callback();
        }
      }

      if (!element.hasAttribute('data-outside')) {
        events.forEach((userEvent) => {
          setTimeout(() => {
            html.addEventListener(userEvent, handleOutsideClick);
          });
        });
        element.setAttribute('data-outside', '');
      }
    }

    outsideClick(menuList, ['click'], () => {
      console.log('removeu classe');
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  menuButton.addEventListener('click', openMenu);
}
