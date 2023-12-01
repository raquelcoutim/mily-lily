popUp = document.getElementById('button');
calcular = document.getElementById('button1');
enviar = document.getElementById("button1")


popUp.onclick = function() {
    window.open("lala.html", 'window', 'width=400, height=500, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function soma() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    num3 = document.getElementById('num3').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    document.getElementById('resultado').innerHTML= num1 + num2 + num3;
    document.getElementById('media').innerHTML = (num1 + num2 + num3)/3;
}





