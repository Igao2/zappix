var button = document.getElementById("enviarZap")
var zaplink = ""
button.addEventListener("click",function(){

    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value
    
    if(mensagem!="")
    {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    var link = document.getElementById("resultado")
    link.style.display = "block"
    zaplink = whatsappLink
          
    }
    else{
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefone}`
    var link = document.getElementById("resultado")
    link.style.display = "block"
    zaplink = whatsappLink
    }
    document.getElementById("telefone").value = ""
    document.getElementById("mensagem").value = ""
})
var Link = document.getElementById("resultado")
Link.addEventListener("click",function(){
    navigator.clipboard.writeText(zaplink)
                .then(function() {
                    alert("Texto copiado para a área de transferência!");
                })
                .catch(function(err) {
                    console.error('Erro ao copiar texto: ', err);
                });
})
var telefone = document.getElementById("telefone")
telefone.addEventListener("keypress",function(){

    var b = telefone.value.slice(0,8)
    telefone.value = b
})
var mensagem = document.getElementById("mensagem")
mensagem.addEventListener("keypress",function(){
    mensagem.style.height = "auto"; 
    mensagem.style.width = "auto"
})