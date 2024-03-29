let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let Ti = 5;
let heure = 0;
let minute = 0;
let secondes = Ti;

let timeout;

let estArrete = true;

const demarrer = () =>{
    if(estArrete){
        estArrete = false;
        defilerTemps();
    }
};

const arreter = () => {
    if(!estArrete){
        estArrete = true;
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if(estArrete) return;
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes--;

/*  faut rajouter le if seconde=0 alors stop */

if (secondes==-1){
    chrono.textContent = "00:00:05";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = Ti;
    clearTimeout(timeout);

}
if (secondes==5){
    estArrete = false;
}


    if(secondes == 60){
        minutes++;
        secondes = 0;
    }
    if(minutes == 60){
        heures++;
        minutes = 0;
    }

    //affichage
    if(secondes < 10){
        secondes = "0" + secondes;
    }
    if(minutes < 10){
        minutes = "0" + minute;
    }
    if(heure < 10){
        heures = "0" + heures;
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:05";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = Ti;
    clearTimeout(timeout);

};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);