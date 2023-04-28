<<<<<<< HEAD
//Bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    let confirmacao = document.getElementById('loginConfirm').value;
    let name = document.getElementById('loginName').value;
    let phone = document.getElementById('loginTelefone').value;
    let date = document.getElementById('loginData').value;
    let ID = document.getElementById('loginCPF').value;
    
    if(!user || !senha || !confirmacao || !name || !phone || !date || !ID){
       alert("Campos de preenchimento obrigatório. Favor preencher.")
    }else if (senha !== confirmacao){
        alert("Confirmação de senha incorreta")
    }else{
        window.open("parteII.html", "_self")
    }
}
=======
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
>>>>>>> 8df17469ea8be1883d92959ac7d76e2410260ff5
