import { showCards } from "../modules/showCard.js";
import { showModal } from "../modules/showModal.js";

let contenedorHombre = document.getElementById('containerHombre');
let contenedorModal = document.getElementById('contenedorModal')
document.addEventListener('DOMContentLoaded', async () =>{
    let res = await fetch ('http://localhost:4000/Hombres');
    let data = await res.json ();
    showCards (data, contenedorHombre)
});

let contenedorMujer = document.getElementById('containerMujer');
document.addEventListener('DOMContentLoaded', async ()=>{
    let res = await fetch ('http://localhost:4000/Mujer');
    let data = await res.json ();
    let Mujer = data.filter(item => item.categorie == 'Mujer');
    showCards (data, contenedorMujer)
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-outline-primary')) {
        let id = e.target.id;
        showModal(id, contenedorModal);
    }
})

