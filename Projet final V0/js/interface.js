const score_box = document.querySelector(".score_box");
const trophee = document.querySelector(".score button.trophy");

//trophée cliqué
trophee.onclick = ()=>{
    score_box.classList.add("appear");
} 