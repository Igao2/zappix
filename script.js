var button = document.getElementById("enviarZap")
button.addEventListener("click",function(){

    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value

    if(mensagem!="")
    {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    var link = document.getElementById("resultado")
    link.innerHTML= whatsappLink
    }
    else{
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefone}`
    var link = document.getElementById("resultado")
    link.innerHTML= whatsappLink
    }
    
})