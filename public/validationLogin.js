function getPerfil() {
    return localStorage.getItem('_perfil_dados')
}

function verificarLogado() {
    try {
        const perfil = JSON.parse(getPerfil())
        return perfil.logado
    } catch (error) {
        return false
    }
}

function gatilhoLogin() {
    if(verificarLogado()){
        window.location.href = '/feed'
    }
}

gatilhoLogin()


