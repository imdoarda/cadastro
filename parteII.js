'use strict';

//Preenche os campos relacionados ao CEP...
const preencherForumulario = (endereco) =>{
    document.getElementById('nomeRua').value = endereco.logradouro;
    document.getElementById('nomeBairro').value = endereco.bairro;
    document.getElementById('enderecoCidade').value = endereco.localidade;
    document.getElementById('enderecoEstado').value = endereco.uf;
}

//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//length é tamanho

//Função para consumo de API da Via CEP
const pesquisarCep = async() => {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url); //await = esperar fetch = promessa
        const addres = await dados.json(); // retorna dados no formato JSON
        
        if(addres.hasOwnProperty('erro')){ 
            alert('CEP não encontrado!');
            //se tiver erro
        }else {
            preencherForumulario(addres);
        }
        //se não tiver erro
    }else{
        alert('CEP incorreto!');
    } 
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

function Verifica(){
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('nomeRua').value;
    let number = document.getElementById('enderecoNumber').value;
    let bairro = document.getElementById('nomeBairro').value;
    let reference = document.getElementById('enderecoReference').value;
    let city = document.getElementById('enderecoCidade').value;
    let state = document.getElementById('enderecoEstado').value;

    if(!cep || !rua || !number || !bairro || !reference || !city || !state){
        alert("Campos de preenchimento obrigatório. Favor preencher.");
     }else{
      window.open("confirma.html", "_self")
  }
}
