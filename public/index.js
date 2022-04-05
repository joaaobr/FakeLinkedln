function adicionarUsuario() {
    const input1 = document.getElementById("email");
    const input2 = document.getElementById("senha");
    const btnCadastro = document.getElementById('btnCadastro');
    const email = input1.value;
    const senha = input2.value;

    btnCadastro.disable = true
    const obj = { email, senha }
    
    fetch("/add", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    .then(res => {
        if(res.ok) {
            return res.text()
        }
        throw new Error('falha ao cadastrar')   
    })
    .then(res => {
        const result = JSON.parse(res)
        window.location.href = `/cadastro/segunda-etapa/${result.id}`
    })
    .catch(err => {
      alert("Falha ao inserir dados!")
    })
  };


  function atualizarUsuario() {
    const input1 = document.getElementById("nome");
    const input2 = document.getElementById("sobrenome");
    const input3 = document.getElementById('id')
    //const btnCadastro = document.getElementById('btnCadastro');
    const nome = input1.value;
    const sobrenome = input2.value;
    const id = input3.value
    //btnCadastro.disable = true
    const obj = { nome, sobrenome, id }
    
    fetch("/update", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    .then(res => {  
        if(res.ok) {
            return res.text()
        }
        throw new Error('falha ao cadastrar')   
    })
    .then((res) => {
        window.location.href = "/home"
    }) 
    .catch(err => {
      alert("Falha ao inserir dados!")
    })
  };





function add() {
  const input1 = document.getElementById("conteudo");
  const conteudo = input1.value;
  const perfil = JSON.parse(localStorage.getItem('_perfil_dados'))
  const obj = { conteudo, perfil}
  
  fetch('/addPost', {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
  })
  .then(res => {  
    if(res.ok) {
      console.log(res)
        return res.text()
    }
    throw new Error(res)   
})
  .then(res => {
   const response = JSON.parse(res)
    if(response.status == false){
        alert(response.mensagem);
    }else{
      window.location.reload();
    }
  })
  .catch(err => {
    console.log(err)
    alert(err.mensagem);
  })
}


function deletarPost(id) {
  const input1 = document.getElementById("conteudo");
  const conteudo = input1.value;

  const obj = { conteudo }
  
  fetch(`/deletePost/${id}`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
  })
  .then(res => {
    window.location.reload();
  })
  .catch(err => {
    document.getElementById("descricao").value = '';
    alert("Falha ao inserir dados!")
  })
};


function addLike(id) {
  const input1 = document.getElementById("conteudo");
  const conteudo = input1.value;
  const perfil = JSON.parse(localStorage.getItem('_perfil_dados'))
  const obj = { conteudo, perfil}
  
  fetch('/likePost', {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
  })
  .then(res => {  
    if(res.ok) {
      console.log(res)
        return res.text()
    }
    throw new Error(res)   
})
  .then(res => {
   const response = JSON.parse(res)
    if(response.status == false){
        alert(response.mensagem);
    }else{
      window.location.reload();
    }
  })
  .catch(err => {
    console.log(err)
    alert(err.mensagem);
  })
}