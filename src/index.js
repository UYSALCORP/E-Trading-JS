import { veriGetir, kategoriyeGoreGetir } from './productUI.js';
import { aramaKutusu, buttons, kategoriler, output } from './variables.js';
import { sepeteEkle, detayGoster } from './utils.js'
window.addEventListener("load", ()=> veriGetir())

buttons.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON")
        kategoriyeGoreGetir(e.target.id, aramaKutusu.value)
})

aramaKutusu.addEventListener("input", ()=>{
    kategoriyeGoreGetir(kategoriler.textContent, aramaKutusu.value);
})

output.addEventListener("click", (a)=>{
    if (a.target.classList.contains("btn-danger")){
        sepeteEkle(a.target.getAttribute("data-id"));
    }
    if (a.target.classList.contains("btn-primary")){
        detayGoster(a.target.getAttribute("data-id"))
    }
})