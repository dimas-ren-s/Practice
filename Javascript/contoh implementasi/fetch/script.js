// fetch
/* const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const getInput = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=492d9308&s=' + getInput.value)
        .then(response => response.json()) // kita ubah response menjadi json, dimana hasilnya promise
        .then(response => { // karna banyak baris, pake kurung kurawal
            const movies = response.Search;
            let cards = '';
            const totalMovies = response.totalResponses;
            movies.forEach(movie => cards += showCards(movie)); // looping sekaligus mengambil return card
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards

            const buttonDetail = document.querySelectorAll('.modal-detail-button');
            buttonDetail.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=492d9308&i=' + imdbid)
                        .then(response => response.json())
                        .then(response => {
                            const movieDetails = showMovieDetail(response);
                            const modalBody = document.querySelector('.modal-body')
                            modalBody.innerHTML = movieDetails;
                        })
                        .catch(e => console.log(e));
                });
            });
        }) // kita then lagi untuk mengubah promise hasil response.json sebelumnya
        .catch(e => {
            let notMovie = `Movie dengan judul ${getInput.value}tidak ditemukan`;
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = notMovie;
        });
}); */

// Fetch Refactor
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const getInput = document.querySelector('.input-keyword');
    const showMovie = await getMovie(getInput.value);
    updateShowMovie(showMovie);
});

// Event Binding -- ketika suatu elemen belum muncul, tetapi tetap bisa dilakukan function nya
document.addEventListener('click', async function (e) {
    const detailButton = e.target.classList.contains('modal-detail-button') // mendapatkan input dengan classlist modal-detail-button
    if (detailButton) {
        const imdbid = e.target.dataset.imdbid;
        const showDetail = await getDetail(imdbid);
        updateShowDetail(showDetail);
    }
});

function getDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=492d9308&i=' + imdbid)
        .then(response => response.json())
        .then(response => response)
}

function updateShowDetail(movie) {
    const movieDetails = showMovieDetail(movie);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetails;
}

function getMovie(movies) {
    return fetch('http://www.omdbapi.com/?apikey=492d9308&s=' + movies)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateShowMovie(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie)); // looping sekaligus mengambil return card
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards
}

function showCards(movie) {
    return `
            <div class="col-md-4 my-3">
            <div class="card">
                <img src="${movie.Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Details</a>
                </div>
            </div>
        </div>
        `
}

function showMovieDetail(m) {
    return `
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>${m.Title}</h4>
                        </li>
                        <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                        <li class="list-group-item"><b>Genre : </b>${m.Genre}</li>
                        <li class="list-group-item"><b>Plot : </b><br>${m.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}