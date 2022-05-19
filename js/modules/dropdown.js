export default function initDropdownMenu(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  dropdownMenus.forEach((menu)=>{
    //menu.addEventListener('click', handleClick)
    //menu.addEventListener('touchstart', handleClick)
    ['touchstart','click'].forEach((item)=>{
      menu.addEventListener(item, handleClick)
    })
  })

  function handleClick(event){
    event.preventDefault()
    this.classList.add('ativo')
    outsideClick(this, ['touchstart','click'], ()=>{
      this.classList.remove('ativo')
    })
  }
  
  function outsideClick(element, events, callback){
    const html = document.documentElement

    if (!element.hasAttribute('data-outside')) {
      events.forEach((userEvent)=>{
        html.addEventListener(userEvent ,handleOutsideClick)
      })
      element.setAttribute('data-outside', '')
    }

    function handleOutsideClick(event){
      if (!element.contains(event.target)) {
        element.removeAttribute('data-outside', '')
        events.forEach((userEvent)=>{
          html.removeEventListener(userEvent, handleOutsideClick)
        })
        callback()
      }
    }
  }
}
