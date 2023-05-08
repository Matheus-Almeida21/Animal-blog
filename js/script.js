import ScrollSuave from './modules/scroll-suave.js';
import AnimaScroll from './modules/anima-scroll.js';
import Accordion from './modules/accordion.js';
import TabNavigation from './modules/navigation.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

fetchAnimais('./animaisApi.json', '.numero-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const navigation = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section');
navigation.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
modal.toggleModal();

initFuncionamento();
