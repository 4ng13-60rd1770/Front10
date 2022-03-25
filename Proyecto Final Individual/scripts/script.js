import { showCards } from "../modules/showCard.js";

let contenedorHombre = document.getElementById('containerHombre');
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
})

