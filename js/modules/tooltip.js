export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  const onMouseMove = {
    toolTipBox: '',
    handleEvent(e) {
      this.toolTipBox.style.top = `${e.pageY + 10}px`;
      this.toolTipBox.style.left = `${e.pageX + 10}px`;
    },
  };
  const onMouseLeave = {
    toolTipBox: '',
    element: '',
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function onMouseOver(event) {
    console.log(event);
    const toolTipBox = criarToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
