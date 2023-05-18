import debounce from './debounce.js';

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    // Faz o bind no metodo para que faça referencia ao this do objeto
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  // Pega a distancia de cada item em relação ao topo da pagina
  getDistance() {
    this.distance = [...this.sections].map((section, index, array) => {
      const sectionTop = section.offsetTop;
      // console.log(sectionTop);
      return {
        element: section,
        offset: index !== array.length - 1 ? Math.floor(sectionTop - this.windowMetade)
          : Math.floor(sectionTop - (window.innerHeight * 0.2)),
      };
    });
    // console.log(this.distance);
  }

  // Verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    // console.log('teste');
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o evento de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
