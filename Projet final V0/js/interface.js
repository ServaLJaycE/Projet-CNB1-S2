const score_box = document.querySelector(".score_box");
const trophee = document.querySelector(".score button.trophy");
const junia = document.querySelector(".junia")

//trophée cliqué
trophee.onclick = ()=>{
    score_box.classList.add("appear");
} 

//junia cliqué 
junia.onclick = ()=>{
    if ( confirm("Ceci va vous renvoyer vers le site JUNIA-Isen")){
        window.open("https://www.isen-lille.fr/formations/ecole-dingenieur-numerique-en-alternance/")
    }
}