function ValidarDadosUndefined() {
    const dados = JSON.parse(localStorage.getItem('_perfil_dados'))
    if(dados.nome == undefined || dados.sobrenome == undefined || dados.email == undefined){
        localStorage.setItem('_perfil_dados', {logado: false})
        window.location.href = '/login'
    }
}
function ValidarDadosNull() {
    const dados = JSON.parse(localStorage.getItem('_perfil_dados'))
    if(dados.nome == null || dados.sobrenome == null || dados.email == null){
        localStorage.setItem('_perfil_dados', {logado: false})
        window.location.href = '/login'
    }
    if(dados.nome == "" || dados.sobrenome == "" || dados.email == ""){
        localStorage.setItem('_perfil_dados', {logado: false})
        window.location.href = '/login'
    }
}


ValidarDadosNull()
validarDadosUndefined()