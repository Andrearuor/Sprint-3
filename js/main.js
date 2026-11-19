
//import templates y demas funciones

import { header, footer } from './templates/template.js';
import skillsList from './utils/skillsList.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';

// 2. Inyectas el header y el footer en los huecos vacíos de tu HTML
document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;



menu();
darkMode();
skillsList();