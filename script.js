function tabNavigation(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo')

  if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
tabNavigation()

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if (accordionList.length) {
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')
    
    function ativaAccordion(){
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
    
    accordionList.forEach((item)=>{
      item.addEventListener('click', ativaAccordion)
    })
  }
}
initAccordion()


function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

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
initScrollSuave()

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length){
    const windowMetade = window.innerHeight * 0.6
    
    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        if (sectionTop < 0){
          section.classList.add('ativo')
        }
      })
    }
    animaScroll()
    
    window.addEventListener('scroll', animaScroll)
  }
}
initAnimacaoScroll()
