var titulo, infoFilme, plot
//var apiKey = `c7c8010d`

    function buscarDados() {
        titulo = document.getElementById('titulo').value
        infoFilme = document.getElementById('infoFilme')

        if (titulo == null || titulo === '') {
            alert('Por favor, digite um filme válido')
            return false
        }
        return true
}
    function filme() {
        if (buscarDados()) {
            var url = `https://www.omdbapi.com/?t=${titulo}&apikey=c7c8010d`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if(data.Response === `False`){
                        alert(`Filme não encontrado`)
                    }
                    else{
                        infoFilme.innerHTML = `
                        <p>Titulo: ${titulo}</p>
                        <p>Duração: ${data.Runtime}</p>
                        <p>Faixa Etária: ${data.Rated}</p>
                        <p>Gênero: ${data.Genre}</p>
                        <p>Data de Lançamento: ${data.Released}</p>
                        <p>País: ${data.Country}</p>
                        <p>Atores: ${data.Actors}</p>
                        <p>Diretor: ${data.Director}</p>
                        <p>$Box Office$: ${data.BoxOffice}</p>
                        <p id="plot">Plot: ${data.Plot}</p>
                        <img src="${data.Poster}">`
                        return(console.log(data))
                    }
                })  
        }
    }
                