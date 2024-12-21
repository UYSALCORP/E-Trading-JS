import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap'; // Bootstrap JS
import './src/sass/style.scss'; // isteğe bağlı
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome CSS

import { veriGetir, kategoriyeGoreGetir } from './src/productUI.js';
import { aramaKutusu, buttons } from './src/variables.js';
window.addEventListener("load", ()=> veriGetir())

buttons.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON")
        kategoriyeGoreGetir(e.target.id)
})

aramaKutusu.addEventListener()