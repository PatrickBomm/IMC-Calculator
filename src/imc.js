const calcularIMC = document.getElementById('send');

function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultTxt = document.getElementById('resultTxt');
    const resultGrau = document.getElementById('resultGrau');

    if (altura !== '' && peso !== '') {

        const contaIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";
        let png = document.getElementById('png');

        if (contaIMC < 18.5) {
            classificacao = 'abaixo do peso!';
            png.src = 'assets/png/magro.png';
            document.body.style.background = '#90dc90';
        } else if (contaIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
            png.src = 'assets/png/normal.png';
            document.body.style.background = '#21be31';
        } else if (contaIMC < 30) {
            classificacao = 'levemente acima do peso!';
            png.src = 'assets/png/acima.png';
            document.body.style.background = '#f28f79';
        } else if (contaIMC >= 30) {
            classificacao = 'com obesidade. Cuidado!!';
            png.src = 'assets/png/Obeso.png';
            document.body.style.background = '#B22222';
        }

        resultTxt.textContent = `${contaIMC}`;
        resultGrau.textContent = `Você está ${classificacao}`;

    } else {
        resultGrau.textContent = 'Preencha todos os campos!';
    }
}
calcularIMC.addEventListener('click', imc);

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#send");
        btn.click();
    }
});