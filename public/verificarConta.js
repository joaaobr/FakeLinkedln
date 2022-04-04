function getPerfil() {
    return localStorage.getItem('_perfil_dados')
}

function verificarConta() {
    const label =  document.getElementById('id2')
    
    const dados = JSON.parse(getNames())
    const nome =  label.value == dados.nome
    label.appendChild(nome)
    

    const p = document.getElementById('id3')
    let text = document.createTextNode(dados.sobrenome)
    //p.appendChild(text)

    const label2 = document.getElementById('id4')
    let tex = document.createTextNode(dados.email)
    //label2.appendChild(tex)
    
}




