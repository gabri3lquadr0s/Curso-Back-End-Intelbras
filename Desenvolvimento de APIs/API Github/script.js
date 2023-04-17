var nome, repositorioPublico, seguidores, seguindo, avatar, linkRepositorios, login, infoUsuario;

function buscarUsuario(){
    event.preventDefault();//previne ação padrão
    login = document.getElementById("usuarioGit").value;
    infoUsuario = document.getElementById("infoUsuario");
    var url = `https://api.github.com/users/${login}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        avatar = data.avatar_url
        nome = data.name
        repositorioPublico = data.public_repos
        seguidores = data.followers
        seguindo = data.following

       infoUsuario.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>N° de seguidores: ${seguidores}</p>
        <p>N° de perfis seguindo: ${seguindo}</p>
        <p>N° de repositórios: ${repositorioPublico}</p>
        <p><a href="https://github.com/${login}?tab=repositories" target="_blank">Link dos Repositórios</a></p>`;
    });
}