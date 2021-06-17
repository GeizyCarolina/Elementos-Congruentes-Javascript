
// recupera os dados dos inputs e dos radios

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let resposta = document.getElementById('resp');


function Verificar(){
  
  // verificação = se o campo dos inpus nao foram preenchidos o alert com a mensagem é exibida na tela

    if(num1.value == '' || num2.value == '' || num3.value == ''){ 
      alert('Insira os numeros corretamente');
    }

  // se os campos dos inputs foram preenchidos corretamente entao ele verifica qual dos botoes radio foi selecionado
  // radio 1 = metodo de definição
  // radio 2 = metodo do teorema

    else{

      if(radio1.checked == true){      
        var definicao = Definicao(num1.value, num2.value, num3.value);    
        resposta.innerHTML += 'DEFINIÇÃO';   
        resposta.innerHTML += '<br>';
        resposta.innerHTML += (definicao);
        resposta.innerHTML += '<br>';
      }  
  
      else if(radio2.checked == true){
        var teorema = Teorema(num1.value, num2.value, num3.value);
        resposta.innerHTML += 'TEOREMA';
        resposta.innerHTML += '<br>';
        resposta.innerHTML += (teorema);
        resposta.innerHTML += '<br>';
      } 

      else{
        alert('Marque a opção de radio desejada');
      }  
    }    
}


// variavel que vai ser usada para exibir a mensagem na tela 
var msg = '';

// função do metodo de definição

function Definicao(x,a,b){

  // pega os dois numeros inteiro e faz a subtração entre eles, 
  var resultado = (x-a);

  if(resultado % b == 0){  // pega o resultado da subtração e divide pelo modulo se o resto for igual a 0 entao sao congruentes
   
    return msg = ('O numero' + " " + x + " ≡ " + a + " modulo " + "" + b + " são congruentes");     
  }  
  else{

    return msg = ('O numero' + " " + x + " ≡ " + a + " modulo " + "" + b + " não são congruentes");
  }
}

// função do metodo do teorema

function Teorema(x,a,b){

  var div = x % b; // pega o numero inteiro e divide pelo modulo 
  var div2 = a % b; // pega o segundo numero inteiro e tmb divide pelo modulo

  if(div == div2){ // compara se o resto das duas divisoes sao iguais
    return msg = ('O numero' + " " + x + " ≡ " + a + " modulo " + "" + b + " são congruentes");
  }
  else{
    return msg = ('O numero' + " " + x + " ≡ " + a + " modulo " + "" + b + " não são congruentes");
  }
}

// metodo para limpar os campos

function Limpar(){
  num1.value = '';
  num2.value = '';
  num3.value = '';
  resposta.innerHTML = '';
}



