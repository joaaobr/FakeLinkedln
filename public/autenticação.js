function loginDeUsuarios() {
    const input1 = document.getElementById("email");
    const input2 = document.getElementById("senha");
    const input3 = document.getElementById('id')
    //const btnCadastro = document.getElementById('btnCadastro');
    const email = input1.value;
    const senha = input2.value;
    //const id = input3.value
    //btnCadastro.disable = true
    const obj = { senha ,email }
    
    fetch("/authenticate", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    .then(res => {  
        if(res.ok) {
            return res.text()
        }
        console.log(res)
        throw new Error('falha ao cadastrar')   
    })
    .then((res) => {
        window.location.href = "/feed"
        localStorage.setItem('_perfil_dados', res)
    }) 
    .catch(err => {
        localStorage.setItem('_perfil_dados', JSON.stringify({ logado: false }))
      alert("E-mail ou senha estão errados!")
      a
    })
  };