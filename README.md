# ÍNDICE
 
* [Descrição](#descri%C3%A7%C3%A3o)  
* [Introdução](#introdu%C3%A7%C3%A3o)  
* [Funcionalidades](#funcionalidades)  
* [Tecnologias Utilizadas](#tecnologias-utilizadas)  
* [Recursos JavaScript Utilizados](#resursos-de-javascript)
* [Fontes Consultadas](#fontes-consultadas)  
* [Autores](#autores)  


## Formulário de endereço

### TELA INICIAL

![image](https://github.com/imdoarda/cadastro/assets/127868962/2ecdf155-5cb0-4060-964c-5e5d5fc98ceb)



## Descrição

O formulário de endereço serve para realizar o cadastro de um certo endereço e, quando inserido o CEP, campos como "rua", "bairro", "cidade" e "estado" são preenchidos automaticamente.

    
## Introdução

 Neste projeto aprendemos a utilizar Arrow Function fazendo um formulário de endereço.  No formulário, quando se digita o CEP de alguma rua, acontece o preenchimento automático de outros campos de endereço. Para que isso acontecesse, utilizei várias funções do tipo Arrow.

## Funcionalidades

Possuí funcionalidade inicial de ajudar os alunos a aprofundarem o conhecimento em Arrow Function.


  
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

   ![gravacao2 (1)](https://github.com/imdoarda/cadastro/assets/127868962/c3febe5a-28aa-42e5-9fe0-0848e8f41822)



 


   
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

      
  Já essa última função é um pouco mais complexa, "async()" faz com que não precise ser seguida uma ordem exata e, como escrito nos comentários, é uma função para o consumo de API da Via CEP, ou seja, o código vai "checar" com a Via CEP se o CEP inserido é realmente válido. Caso o CEP não seja válido, o site retornará uma mensagem de "CEP não encontado" senão, os campos de endereço são preenchidos automaticamente, como mostrado acima.  

  ``Veja o resultado a seguir:``

 ![cadvideo](https://github.com/imdoarda/cadastro/assets/127868962/451c56a5-4de5-45a7-a512-6b73647abca0)
  


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

[Alura](https://www.alura.com.br/artigos/escrever-bom-readme) - Como escrever um README incrível no seu Github

[Alura](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) - Async/await no JavaScript: o que é e quando usar a programação assíncrona?

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input/date) - input type="date"

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await) - Await

[Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) - Usando Fetch

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) - Object.prototype.hasOwnProperty()


## Autores

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/127868962?v=4" width=115><br><sub>Maria Eduarda Mendes</sub>](https://github.com/imdoarda)


