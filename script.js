var origem = null;
var jogadas;
var inicio = true;
var continua = true;
var validado = false;


var coluna1; var linha1;
var coluna2; var linha2;

function play() {

    
    if (jogadas == 0 && origem === null) {
        this.innerHTML = `<img src="imagens/cavaloOK.png" alt="imagem cavalo">`;
        if (jogadas == 0) {
            jogadas = -1;
        }
        jogadas += 1;
        origem = this;

    } else {
        

        if (!this.firstChild && origem !== null && origem !== this) {

            validar1();
            
            this.innerHTML = origem.outerHTML;
            origem.innerHTML = ``;

            validar2();
            validarfinal();

            this.innerHTML = ``;

            if (validado) {

                validado = false;
                this.innerHTML = `<img src="imagens/cavaloOK.png" alt="imagem cavalo">`;
                jogadas += 1;
                origem.innerHTML = `<p class="jogo">${jogadas}</p>`;
                origem = this;

                apagarbordavermelha();
            } else {
                origem.innerHTML = `<img src="imagens/cavaloOK.png" alt="imagem cavalo">`;
            }

        }



    }

mostrabordavermelha();
    VerificaTerminado();

}

function validar2() {

    let table = document.querySelector("table");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            if (cell.querySelector('img')) {

                linha2 = i;
                coluna2 = j;
            }
        }
    }

}

function validar1() {

    let table = document.querySelector("table");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            if (cell.querySelector('img')) {

                linha1 = i;
                coluna1 = j;

            }
        }
    }
}

function validarfinal() {

    if ((linha2 + 1 == linha1) && (coluna2 + 2 == coluna1)) {
        validado = true;
    }
    if ((linha2 + 2 == linha1) && (coluna2 + 1 == coluna1)) {
        validado = true;
    }

    if ((linha2 + 2 == linha1) && (coluna2 - 1 == coluna1)) {
        validado = true;
    }

    if ((linha2 + 1 == linha1) && (coluna2 - 2 == coluna1)) {
        validado = true;
    }

    if ((linha2 - 1 == linha1) && (coluna2 - 2 == coluna1)) {
        validado = true;
    }

    if ((linha2 - 2 == linha1) && (coluna2 - 1 == coluna1)) {
        validado = true;
    }

    if ((linha2 - 2 == linha1) && (coluna2 + 1 == coluna1)) {
        validado = true;
    }

    if ((linha2 - 1 == linha1) && (coluna2 + 2 == coluna1)) {
        validado = true;
    }

}

function mostrabordavermelha() {

    let table = document.querySelector("table");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            if (cell.querySelector('img')) {

                if (document.getElementsByTagName('tr')[i + 1]) {
                    if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j + 2]) {
                        if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j + 2].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j + 2].style.borderColor = "red";
                        }
                    }
                }

                if (document.getElementsByTagName('tr')[i + 2]) {
                    if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j + 1]) {
                        if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j + 1].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j + 1].style.borderColor = "red";
                        }
                    }
                }



                if (document.getElementsByTagName('tr')[i + 2]) {
                    if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j - 1]) {
                        if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j - 1].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j - 1].style.borderColor = "red";
                        }
                    }
                }


                if (document.getElementsByTagName('tr')[i + 1]) {
                    if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j - 2]) {
                        if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j - 2].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j - 2].style.borderColor = "red";
                        }
                    }
                }


                if (document.getElementsByTagName('tr')[i - 1]) {
                    if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j - 2]) {
                        if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j - 2].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j - 2].style.borderColor = "red";
                        }
                    }
                }


                if (document.getElementsByTagName('tr')[i - 2]) {
                    if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j - 1]) {
                        if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j - 1].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j - 1].style.borderColor = "red";
                        }
                    }
                }


                if (document.getElementsByTagName('tr')[i - 2]) {
                    if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j + 1]) {
                        if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j + 1].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j + 1].style.borderColor = "red";
                        }
                    }
                }



                if (document.getElementsByTagName('tr')[i - 1]) {
                    if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j + 2]) {
                        if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j + 2].firstChild) {

                        } else {
                            document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j + 2].style.borderColor = "red";
                        }
                    }
                }

            }

        }
    }

}

function apagarbordavermelha() {

    let table = document.querySelector("table");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            
                if (cell.firstChild) {

                } else {
                    document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.borderColor = "black";
                }  

        }
    }

}

function VerificaTerminado() {
    let table = document.querySelector("table");
    let rows = table.rows;
    let status = document.getElementById('statusjogo');

    let terminado = 1;
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            if (cell.firstChild == null) {
                terminado = 0;
            } else {
                document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.borderColor = "blue";
            }
        }
    }

    let teste1 = false, teste2 = false, teste3 = false, teste4 = false, teste5 = false, teste6 = false, teste7 = false, teste8 = false;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            if (cell.querySelector('img')) {

                if (document.getElementsByTagName('tr')[i + 1]) {
                    if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j + 2]) {
                        if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j + 2].firstChild) {
                            teste1 = true;
                        }
                    } else {
                        teste1 = true;
                    }
                } else {
                    teste1 = true;
                }

                if (document.getElementsByTagName('tr')[i + 2]) {
                    if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j + 1]) {
                        if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j + 1].firstChild) {
                            teste2 = true;
                        }
                    } else {
                        teste2 = true;
                    }
                } else {
                    teste2 = true;
                }



                if (document.getElementsByTagName('tr')[i + 2]) {
                    if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j - 1]) {
                        if (document.getElementsByTagName('tr')[i + 2].getElementsByTagName('td')[j - 1].firstChild) {
                            teste3 = true;
                        }
                    } else {
                        teste3 = true;
                    }
                } else {
                    teste3 = true;
                }


                if (document.getElementsByTagName('tr')[i + 1]) {
                    if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j - 2]) {
                        if (document.getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j - 2].firstChild) {
                            teste4 = true;
                        }
                    } else {
                        teste4 = true;
                    }
                } else {
                    teste4 = true;
                }


                if (document.getElementsByTagName('tr')[i - 1]) {
                    if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j - 2]) {
                        if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j - 2].firstChild) {
                            teste5 = true;
                        }
                    } else {
                        teste5 = true;
                    }
                } else {
                    teste5 = true;
                }


                if (document.getElementsByTagName('tr')[i - 2]) {
                    if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j - 1]) {
                        if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j - 1].firstChild) {
                            teste6 = true;
                        }
                    } else {
                        teste6 = true;
                    }
                } else {
                    teste6 = true;
                }


                if (document.getElementsByTagName('tr')[i - 2]) {
                    if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j + 1]) {
                        if (document.getElementsByTagName('tr')[i - 2].getElementsByTagName('td')[j + 1].firstChild) {
                            teste7 = true;
                        }
                    } else {
                        teste7 = true;
                    }
                } else {
                    teste7 = true;
                }



                if (document.getElementsByTagName('tr')[i - 1]) {
                    if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j + 2]) {
                        if (document.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[j + 2].firstChild) {
                            teste8 = true;
                        }
                    } else {
                        teste8 = true;
                    }
                } else {
                    teste8 = true;
                }



            }
        }
    }

    linha1 = 0; coluna1 = 0;
    linha2 = 0; coluna2 = 0;

    console.log(teste1, teste2, teste3, teste4, teste5, teste6, teste7, teste8);


    if (terminado === 1) {
        status.innerHTML = `VOCÊ GANHOU!!`
        document.body.style.backgroundImage = "url(imagens/venceuOK.jpg)";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundRepeat = "no-repeat";

    }

    if (terminado === 0) {
        status.innerHTML = `Partida em andamento...`;
        document.body.style.backgroundImage = "url(imagens/passeioOK.jpg)";

        if (teste1 == true && teste2 == true) {
            if (teste3 == true && teste4 == true) {
                if (teste5 == true && teste6 == true) {
                    if (teste7 == true && teste8 == true) {
                        status.innerHTML = `VOCÊ PERDEU!!`
                        document.body.style.backgroundImage = "url(imagens/perdeuOK.jpg)";
                        document.body.style.backgroundSize = "100%";
                        document.body.style.backgroundRepeat = "no-repeat";
                    }
                }
            }

        } else {
            teste1 = false;
            teste2 = false;
            teste3 = false;
            teste4 = false;
            teste5 = false;
            teste6 = false;
            teste7 = false;
            teste8 = false;
        }



    }

}

function funcoestabela() {

    let table = document.querySelector("table");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            cell.innerHTML = null;
            cell.onclick = play;
            document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.borderColor = "black";
        }
    }

    jogadas = 0;
    origem = null;
    VerificaTerminado();
    let status = document.getElementById('statusjogo');
    status.innerHTML = `Escolha uma casa...`;
}

function gerartabela() {

    let n1 = document.getElementById('linha');
    let n2 = document.getElementById('coluna');

    var v1 = Number(n1.value);
    var v2 = Number(n2.value);

    let table = document.querySelector("table");
    table.innerHTML = ``;

    if (inicio == true) {

        for (let i = 0; i < 8; i++) {
            let linha = table.insertRow(i);
            for (let j = 0; j < 8; j++) {
                let coluna = linha.insertCell(j);
            }
        }

        inicio = false;
    } else {


        for (let i = 0; i < v1; i++) {
            let linha = table.insertRow(i);
            for (let j = 0; j < v2; j++) {
                let coluna = linha.insertCell(j);
            }
        }
    }



    funcoestabela();

}

window.onload = gerartabela;