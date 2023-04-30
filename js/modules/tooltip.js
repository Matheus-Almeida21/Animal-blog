export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    // fazendo bind dos objetos da classe para os metodos callback
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // cria uma tooltip box e insere no body
  criarToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(e) {
    this.toolTipBox.style.top = `${e.pageY + 10}px`;
    if (e.pageX + 220 > window.innerWidth) {
      this.toolTipBox.style.left = `${e.pageX - 170}px`;
    } else {
      this.toolTipBox.style.left = `${e.pageX + 10}px`;
    }
  }

  // remove a tooltip e os eventos de mouseMove e mouseLeave
  onMouseLeave(event) {
    this.toolTipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
  onMouseOver(event) {
    // cria a tooltipbox e insere numa propriedade
    this.criarToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adicona os eventos de mouseOver a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
