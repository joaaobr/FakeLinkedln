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
    const nome =  dados.nome + ' ' + dados.sobrenome

    const p = document.getElementById('p')
    let text = document.createTextNode(nome)
    p.appendChild(text)

    const label2 = document.getElementById('foto')
    let tex = document.createTextNode(nome)
    label2.appendChild(tex)

    let texto = document.createTextNode(nome)
    return label.appendChild(texto)

}

exibirNomes()



