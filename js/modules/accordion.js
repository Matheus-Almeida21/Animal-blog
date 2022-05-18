export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
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
//initAccordion()