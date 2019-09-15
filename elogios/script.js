function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function gerarElogio(){
    let msg = document.getElementById("elogio");
    
    let conteudo = loadFile("./elogios.txt");
    let elogios = conteudo.split("\n");
    let elogio = elogios[Math.floor(Math.random() * elogios.length)];

    msg.innerHTML = elogio;
}