(()=>{"use strict";function t(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25)}animaNumeros(){this.numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}class i{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.distance={finalPosition:0,startX:0,totalMovement:0,movePosition:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.distance.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.distance.totalMovement=1.6*(this.distance.startX-t),this.distance.finalPosition-this.distance.totalMovement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.distance.startX=t.clientX,e="mousemove"):(this.distance.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.distance.finalPosition=this.distance.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.distance.totalMovement>120&&void 0!==this.index.next?this.activeNextSlide():this.distance.totalMovement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slideIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.distance.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>{t.element.classList.remove(this.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=t(this.onResize.bind(this),200),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}init(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0),this}}!function(t,i){const s=document.querySelector(".numero-grid");!async function(){try{const t=await fetch("./animaisApi.json");(await t.json()).forEach((t=>{!function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);s.appendChild(e)}(t)})),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.activeClass=e}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diasAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diasAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto()&&this.funcionamento.classList.add(this.activeClass)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]","aberto").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.events=void 0===i?["click","touchstart"]:i,this.activeClass="ativo",this.openMenu=this.openMenu.bind(this)}openMenu(t){t.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),function(t,e,i){const s=document.documentElement;function n(o){t.contains(o.target)||(t.removeAttribute("data-outside",""),e.forEach((t=>{s.removeEventListener(t,n)})),i())}t.hasAttribute("data-outside")||(e.forEach((t=>{setTimeout((()=>{s.addEventListener(t,n)}))})),t.setAttribute("data-outside",""))}(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button"]','[data-menu="list"]').init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="ativo",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(t){t.preventDefault();const e=t.currentTarget;e.classList.add(this.activeClass),function(t,e,i){const s=document.documentElement;function n(o){t.contains(o.target)||(t.removeAttribute("data-outside",""),e.forEach((t=>{s.removeEventListener(t,n)})),i())}t.hasAttribute("data-outside")||(e.forEach((t=>{s.addEventListener(t,n)})),t.setAttribute("data-outside",""))}(e,this.events,(()=>{e.classList.remove("ativo")}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(e){this.sections=document.querySelectorAll(e),this.windowMetade=.6*window.innerHeight,this.checkDistance=t(this.checkDistance.bind(this),200)}getDistance(){this.distance=[...this.sections].map(((t,e,i)=>{const s=t.offsetTop;return{element:t,offset:e!==i.length-1?Math.floor(s-this.windowMetade):Math.floor(s-.2*window.innerHeight)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarToolTipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.toolTipBox=e}onMouseMove(t){this.toolTipBox.style.top=`${t.pageY+10}px`,t.pageX+220>window.innerWidth?this.toolTipBox.style.left=t.pageX-170+"px":this.toolTipBox.style.left=`${t.pageX+10}px`}onMouseLeave(t){this.toolTipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}onMouseOver(t){this.criarToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{block:"start",behavior:"smooth"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabContent.length&&this.tabMenu.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init();const s=new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueFora=this.cliqueFora.bind(this)}eventToggleModal(t){t.preventDefault(),this.toggleModal()}toggleModal(){this.containerModal.classList.toggle("ativo")}cliqueFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueFora)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');s.init(),s.toggleModal();const n=new class extends i{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),console.log(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(((t,e)=>{this.eventControl(t,e)}))}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide",".slide-wrapper");n.init(),n.addArrow(".prev",".next"),n.addControl(".custom-control")})();