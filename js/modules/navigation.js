export default function tabNavigation(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo')

  if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime
      tabContent[index].classList.add('ativo', direcao);
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
//tabNavigation()