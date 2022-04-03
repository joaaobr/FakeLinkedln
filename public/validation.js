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

function gatilho() {
    console.log(verificarLogado())

    if(!verificarLogado()){
        window.location.href = '/login'
    }
}

gatilho()

function logout() {
    localStorage.setItem('_perfil_dados', JSON.stringify({logado: false}))
    window.location.href = '/login'
}