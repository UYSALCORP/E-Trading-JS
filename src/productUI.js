import { buttonClasses, buttons, output } from '/src/variables';

const ekranaBas = (veri) => {
  output.innerHTML = '';
  let biriktir = '';
  veri.forEach((item) => {
    biriktir += `
<div class="card">
  <img src="${item.image}" class="p-2" height="250px" alt="Görsel"/>
  <div class="card-body">
    <h5 class="card-title line-clamp-1">${item.title}</h5>
    <p class="card-text line-clamp-3">${item.description}</p>
  </div>
  <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
    <span>Fiyat:</span><span>${item.price} ₺</span>
  </div>
  <div class="card-footer w-100 d-flex justify-content-center gap-3">
    <button class="btn btn-danger" data-id="${item.id}">Sepete Ekle</button>
    <button class="btn btn-primary" data-id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal"> Detay Gör </button>
  </div>
</div>
    `;
  });
  output.innerHTML = biriktir;
};

export const veriGetir = async () => {
  localStorage.clear();
  const res = await fetch('https://anthonyfs.pythonanywhere.com/api/products/');
  const data = await res.json();
  localStorage.setItem('All', JSON.stringify(data));
  ekranaBas(data);
  kategoriTopla(data)
};

veriGetir();

const kategoriTopla = (veri) => {
    let hepsi = ["All"]
    veri.forEach((urun) => {
        if (!hepsi.includes(urun.category)) hepsi.push(urun.category)
            // console.log(hepsi);
    })
    kategoriBas(hepsi);
}

const kategoriBas = (veri) => {
    buttons.innerHTML = ``
    let biriktir = ``
    let index = 0;
    veri.forEach(element => {
        const kategoriRenk = buttonClasses[index % buttonClasses.length]
        index ++;
        biriktir += `
            <button type='button' id='${element}' class='btn ${kategoriRenk}'>${element.toUpperCase()}</button>
        `
    });
    buttons.innerHTML = biriktir;
}

export const kategoriyeGoreGetir = (kategori) => {
    const data = JSON.parse(localStorage.getItem("All"));
    let kategoriData = ""
    if (kategori !== "All"){
        kategoriData = data.filter((item)=> item.category === kategori)
    } else {
        kategoriData = data;
    }
    ekranaBas(kategoriData)
}