export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

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
        html.addEventListener(userEvent, handleOutsideClick);
      });
      element.setAttribute('data-outside', '');
    }
  }

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    // menu.addEventListener('click', handleClick)
    // menu.addEventListener('touchstart', handleClick)
    ['touchstart', 'click'].forEach((item) => {
      menu.addEventListener(item, handleClick);
    });
  });
}
