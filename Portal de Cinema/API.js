const API_KEY = 'd71bc2039e3042abbb064c51647d6669';

function exibeNoticias () {
    let divTela = document.getElementById('search');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);