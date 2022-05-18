export default function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    console.log(href)
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
  
  linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection)
  })
}
//initScrollSuave()