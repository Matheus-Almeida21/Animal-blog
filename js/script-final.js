function tabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add("ativo");

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
tabNavigation();

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function ativaAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", ativaAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
      console.log("clicou");
    }
    function cliqueFora(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueFora);
  }
}
initModal();

function initToolTip(){
  const tooltips = document.querySelectorAll('[data-tooltip]')

  function onMouseOver(event){
    console.log(event)
    const toolTipBox = criarToolTipBox(this)

    onMouseMove.toolTipBox = toolTipBox
    this.addEventListener('mousemove', onMouseMove)
    onMouseLeave.toolTipBox = toolTipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
  }
  const onMouseLeave = {
    toolTipBox: '',
    element: '',
    handleEvent(){
      this.toolTipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }
  const onMouseMove = {
    toolTipBox: '',
    handleEvent(event){
      this.toolTipBox.style.top = event.pageY + 10 + 'px'
      this.toolTipBox.style.left = event.pageX + 10 +'px'
    }
  }

  function criarToolTipBox(element){
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    return toolTipBox
  }

  tooltips.forEach((item)=>{
    item.addEventListener('mouseover', onMouseOver)
  })
}
initToolTip()