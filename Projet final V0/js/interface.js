const score_box = document.querySelector(".score_box");
const trophee = document.querySelector(".score button.trophy");
const junia = document.querySelector(".junia")

//trophée cliqué
trophee.onclick = ()=>{
    score_box.classList.add("appear");
} 

//junia cliqué 
junia.onclick = ()=>{
    alert("Ceci va vous renvoyer vers le site de JUNIA-ISEN")
}