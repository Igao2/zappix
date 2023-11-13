var button = document.getElementById("enviar")
button.addEventListener("click",function(){

    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    var link = document.getElementById("resultado")
    link.innerHTML= whatsappLink
})