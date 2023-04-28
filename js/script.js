import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/anima-scroll.js';
import Accordion from './modules/accordion.js';
import TabNavigation from './modules/navigation.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const navigation = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section');
navigation.init();

initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
