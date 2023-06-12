var userScore = 0;
var cpuScore = 0;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function showOptions(userOption, cpuOption) {
    values = { 0: "Papel", 1: "Piedra",2: "Tijera"};
    images = { 0: "assets/papel.png", 1: "assets/piedra.png",2: "assets/tijera.png"};

    document.getElementById('resultScore').innerText = "";
    
    document.getElementById('labelUserOption').innerText = values[userOption];
    var imgUserOption = document.getElementById('imgUserOption');
    imgUserOption.src = images[userOption];
    imgUserOption.style = "visibility:visible";

    document.getElementById('labelCpuOption').innerText = values[cpuOption];
    var imgCpuOption = document.getElementById('imgCpuOption');
    imgCpuOption.src = images[cpuOption];
    imgCpuOption.style = "visibility:visible";

    document.getElementById('containerUserOption').style = "border-right: 3px solid #000000;";
}

function updateScore(agent) {

    if(agent == 0) {
        userScore++;
    }else{
        cpuScore++
    }

    document.getElementById('score').innerText = userScore + "-" + cpuScore;
}

function showResult(result) {
    values = {0: "Ganaste", 1: "Perdiste", 2: "Empataste"}

    if(result != 2) {
        updateScore(result == 0 ? 0 : 1);
    }

    setTimeout(function(){
        document.getElementById('labelUserOption').innerText = "";
        document.getElementById('imgUserOption').style = "visibility:hidden";

        document.getElementById('labelCpuOption').innerText = "";
        document.getElementById('imgCpuOption').style = "visibility:hidden";

        document.getElementById('containerUserOption').style = "border-right: 0px;";

        document.getElementById('resultScore').innerText = values[result];
    }, 2000);
    
}


function jugada(userOption) {

    cpuOption = random(0,2);

    showOptions(userOption, cpuOption);

    switch(userOption) {
        case 0:
            switch(true) {
                case cpuOption == 0:
                    showResult(2);
                    break;
                case cpuOption == 1:
                    showResult(0);
                    break;
                case cpuOption == 2:
                    showResult(1);
                    break;
            }
            break;
        case 1:
            switch(true) {
                case cpuOption == 0:
                    showResult(1);
                    break;
                case cpuOption == 1:
                    showResult(2);
                    break;
                case cpuOption == 2:
                    showResult(0);
                    break;
            }
            break;
        case 2:
            switch(true) {
                case cpuOption == 0:
                    showResult(0);
                    break;
                case cpuOption == 1:
                    showResult(1);
                    break;
                case cpuOption == 2:
                    showResult(2);
                    break;
            }
            break;
    }
}

