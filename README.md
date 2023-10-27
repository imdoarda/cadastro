# ÍNDICE
 
* [Descrição](#descri%C3%A7%C3%A3o)  
* [Introdução](#introdu%C3%A7%C3%A3o)  
* [Funcionalidades](#funcionalidades)  
* [Tecnologias Utilizadas](#tecnologias-utilizadas)  
* [Recursos JavaScript Utilizados](#resursos-de-javascript)
* [Fontes Consultadas](#fontes-consultadas)
* [Sites Utilizados Como Base](
* [Autores](#autores)  


## Formulário de endereço

### TELA INICIAL

![image](https://github.com/imdoarda/cadastro/assets/127868962/2ecdf155-5cb0-4060-964c-5e5d5fc98ceb)



## Descrição

O formulário de cadastro serve para realizar o cadastro de alguém em um site utilizando diversos dados pessoais como: nome, data de nascimento, email, endereço, etc.
    
## Introdução

 Neste projeto, inicialmente tinha o intuito de aprimorar as habilidades dos alunos construindo uma tela de cadastro usando propriedades básicas de JavaScript, depois, em uma atividade proposta em sala de aula, foi pedido a implementação da consulta de endereço utilizando Via CEP.

## Funcionalidades

Possuí funcionalidade inicial de aprimorar o conhecimento dos alunos no uso do Via CEP para realizar consultas de endereço.


  
### Funcionalidade 1

      //Preenche os campos relacionados ao CEP...
    const preencherForumulario = (endereco) =>{
    document.getElementById('nomeRua').value = endereco.logradouro;
    document.getElementById('nomeBairro').value = endereco.bairro;
    document.getElementById('enderecoCidade').value = endereco.localidade;
    document.getElementById('enderecoEstado').value = endereco.uf;
}

      

   Nessa função, o código faz com que o formulário seja preenchido automaticamente, quando inserido o CEP.  

   ``Veja o resultado a seguir:``

   ![gravacao2 (2)](https://github.com/imdoarda/cadastro/assets/127868962/63cc1eb9-cfba-49e7-827d-c81b45a8551c)




 


   
### Funcionalidade 2


        //Verifica se o CEP é válido...
    const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);
    //length é tamanho


Essa função é para checar se o tamanho do CEP está correto e se é apenas números.

### Funcionalidade 4



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

      
  Já essa última função é um pouco mais complexa, "async()" faz com que não precise ser seguida uma ordem exata e, como escrito nos comentários, é uma função para o consumo de API da Via CEP, ou seja, o código vai "checar" com a Via CEP se o CEP inserido é realmente válido. Caso o CEP não seja válido, o site retornará uma mensagem de "CEP incorreto" senão, os campos de endereço são preenchidos automaticamente, como mostrado acima.  

  ``Veja o resultado a seguir:``

 ![cadvideo (1)](https://github.com/imdoarda/cadastro/assets/127868962/d22ac9f0-efc1-427f-a6a4-ad98444406e8)

  


### Tecnologias utilizadas

* ``HTML5``  
* ``CSS3``
* ``VSCODE``
*  ``GitHub``
*  ``Git``
* ``API Via CEP``


### Resursos de JavaScript


* ``fetch`` - Serve para acessar e manipular os pedidos e respostas da API, no código, o fetch é como se fosse uma "promessa", ou seja, vai acontecer
* ``await`` - Await é um elemento utilizado para esperar por uma "promessa"
* ``hasOwnProperty`` - Método de Object instâncias retorna um booleano indicando se este objeto possui a propriedade especificada como propriedade própria (em vez de herdá-la).
° ``Booleano`` - é um tipo de dado que representa apenas dois estados, verdadeiro ou falso.
* ``async()`` - Método que faz uma verificação assíncrona, ou seja, determina que a função é do tipo assíncrona e não precisa ser executada exatamente no momento
* `` /^[0-9]+$/.test(numero)`` - Essa expressão regular serve para verificar se o CEP inserido tem apenas números, mesmo eles sendo repetidos

* fetch, await e async tem uma ligação no código.


## Fontes Consultadas

[Via CEP]( https://viacep.com.br/) - Consulte CEPs de todo o Brasil

[Alura](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) - Async/await no JavaScript: o que é e quando usar a programação assíncrona?

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input/date) - input type="date"

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await) - Await

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) - Usando Fetch

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) - Object.prototype.hasOwnProperty()

## Sites Utilizados Como Base

[SHEIN](https://br.shein.com/?url_from=brgooglebrandshein_sheinshein02_srsa_20210130&cid=1453018537&setid=58136794738&adid=495662299646&pf=GOOGLE&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFMvszPOxy9Bmj06FSrdHSVe8tHpDq3GG-WWyWddcrYgVY6BW9kzl-RoCBmkQAvD_BwE) 
[Magazine Luíza](https://www.magazineluiza.com.br/?partner_id=974&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFBgSLYAt7RoI5ottA1hNxVf6W9reOoFCNX8JeAQydn_DYFpwNfOgYxoCDAQQAvD_BwE&gclsrc=aw.ds)
[Amazon Prime](https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_7rwd1q78df_e&adgrpid=79547423725&hvpone=&hvptwo=&hvadid=591863875878&hvpos=&hvnetw=g&hvrand=5590758325288053965&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001637&hvtargid=kwd-10573980&hydadcr=26346_11691057&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFFuWFf5v-FWUCsm6ITgu2nf1IURfQCRnJgbt4Bz7K64K-tfS1iNsUxoCCFoQAvD_BwE)

## Autores

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/127868962?v=4" width=115><br><sub>Maria Eduarda Mendes</sub>](https://github.com/imdoarda)


