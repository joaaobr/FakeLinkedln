function getNames() {
    const nomes = localStorage.getItem('_perfil_dados')
    return nomes
}

function names() {
    const dados = JSON.parse(getNames())
    return dados.nome + ' ' + dados.sobrenome
}



function exibirNomes() {
    const label =  document.getElementById('label')
    const dados = JSON.parse(getNames())
    const nome =  document.createTextNode(dados.nome + ' ' + dados.sobrenome)
    label.appendChild(nome)
    const p = document.getElementById('')
    let text = document.createTextNode(nome)
    //p.appendChild(text)

    const label2 = document.getElementById('foto')
    let tex = document.createTextNode(dados.nome + ' ' + dados.sobrenome)
    label2.appendChild(tex)

    let texto = document.createTextNode(nome)
    //label2.appendChild(texto)

}

exibirNomes()



