
//alert("Bem vindo! Use o campo abaixo para escrever. Serão aceitos somente letras minúsculas e sem acento.");


 const chave = 3;   //chave para criptografar


 function criptografar(){
     const textoA= document.getElementById('ladoA').value;  //entrada
     const textoB = cifrar(textoA, chave);
     document.getElementById('ladoB').value = textoB; 

     document.getElementById("imagemResultado").style.display = "none";
     document.getElementById("recados").style.display = "none";
 }

 function cifrar(texto, chave) {     //algoritmo condicao if
    return texto.split('').map(caracter => {
        const codigo = caracter.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
        } else {
            return caracter;
        }
    }).join('');
}


function descriptografar(){
    const textoB= document.getElementById('ladoB').value;
    const textoA = decifrar(textoB, chave);
    document.getElementById('ladoA').value = textoA;


    document.getElementById("imagemResultado").style.display = "block";
    document.getElementById("recados").style.display = "block";
   // document.getElementById("ladoA").style.display = "none";
}

function decifrar(texto, chave) {
    return texto.split('').map(caracter => {
        const codigo = caracter.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 - chave + 26) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97);
        } else {
            return caracter;
        }
    }).join('');
}

    
   
//função para copiar o texto
  function copiarTexto() {
    const texto = document.getElementById('ladoB').value;
    navigator.clipboard.writeText(texto).then(() => {
      alert('Texto copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
    });
  }








