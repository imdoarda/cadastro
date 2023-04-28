function Verifica(){
    let cep = document.getElementById('enderecoCEP').value;
    let rua = document.getElementById('nomeRua').value;
    let number = document.getElementById('enderecoNumber').value;
    let reference = document.getElementById('enderecoReference').value;

    if(!cep || !rua || !number || !reference){
        alert("Campos de preenchimento obrigatório. Favor preencher.");
     }else{
      window.open("confirma.html", "_self")
  }
}
