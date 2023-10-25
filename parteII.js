function Verifica(){
    let cep = document.getElementById('enderecoCEP').value;
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
//Preenche os campos relacionados ao CEP...
const preencherForumulario = (endereco) =>{
    document.getElementById('nomeRua').value = endereco.logradouro;
    document.getElementById('nomeBairro').value = endereco.bairro;
    document.getElementById('enderecoCidade').value = endereco.localidade;
    document.getElementById('enderecoEstado').value = endereco.uf;
}
//

//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
// É possível testar e entender a RegEx em https://www.regexpal.com/
//conferir se é só número, + é pra marcar q o numero pode ser marcado uma ou mais vezes, cifrão é pra mostrar q encerrou, ponto de encerramento, função regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//length é tamanho

//Função para consumo de API da Via CEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url); //await = esperar fetch = promessa
        const addres = await dados.json(); // retorna dados no formato JSON
        
        // hasOwnProperty  retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
        if(addres.hasOwnProperty('erro')){ 
            // document.getElementById('rua').value = 'CEP não encontrado!';
            alert('CEP não encontrado!');
            //se tiver erro
        }else {
            preencherForumulario(addres);
        }
        //se não tiver erro
    }else{
        // document.getElementById('rua').value = 'CEP incorreto!';
        alert('CEP incorreto!');
    } 
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
