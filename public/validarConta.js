function validarConta() {
    const dados = JSON.parse(localStorage.getItem('_perfil_dados'))
    const nome = dados.nome
    const sobrenome =  dados.sobrenome
    const email =  dados.email
    
    // document.getElementById("id2").value = 
    // document.getElementById("id3").value =
    // document.getElementById("id4").value =
    const obj = { nome, sobrenome, email }
    
    fetch('/verificarConta', {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj)
    })
    .then(res => {
        console.log(res)
      //window.location.reload();
    })
    .catch(err => {
        const dados = localStorage.setItem('_perfil_dados',JSON.stringify({ logado: false }))
        window.location.href = '/login'
      //document.getElementById("descricao").value = '';
      //alert("Falha ao inserir dados!")
    })
  };
  
  validarConta()