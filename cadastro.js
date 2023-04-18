//Bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    let name = document.getElementById('loginName').value;
    let phone = document.getElementById('loginTelefone').value;
    let date = document.getElementById('loginData').value;
    let ID = document.getElementById('loginCPF').value;
    let endereco = document.getElementById('loginEndereco').value;


    if(!user || !senha || !name || !phone || !date || !ID || !endereco){
       alert("Campos de preenchimento obrigatório. Favor preencher.");
    }else{
        alert("Campos preenchidos com sucesso.");
    }

}