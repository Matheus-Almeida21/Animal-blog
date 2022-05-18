export default function initToolTip(){
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
