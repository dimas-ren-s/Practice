// Fetch Refactor dengan async await
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try { // untuk menangkap resolve
        const getInput = document.querySelector('.input-keyword');
        const showMovie = await getMovie(getInput.value);
        updateShowMovie(showMovie);
    } catch (e) { // menangkap error dari throw, karna async tidak memiliki catch bawaan untuk reject, kayaknya???
        console.log(e)
    }
});

function getMovie(movies) {
    return fetch('http://www.omdbapi.com/?apikey=492d9308&s=' + movies)
        .then(response => { // pakai kurung kurawal untuk error handling kalau data kosong atau tidak ditemukan
            if (!response.ok) {
                throw new Error(response.statusText); // throw untuk melempar error ke catch // statusText antara "Unauthorized", "OK" tapi entah knpa ga ada unauthorized di api skrg jadi isinya kosong tapi error 401 artinya unauthorized
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search;
        })
}

function updateShowMovie(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie)); // looping sekaligus mengambil return card
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards
}

// Event Binding -- ketika suatu elemen belum muncul, tetapi tetap bisa dilakukan function nya
document.addEventListener('click', async function (e) {
    try {
        const detailButton = e.target.classList.contains('modal-detail-button') // mendapatkan input dengan classlist modal-detail-button
        if (detailButton) { // cek apakah diklik, kalau iya
            const imdbid = e.target.dataset.imdbid;
            const showDetail = await getDetail(imdbid);
            updateShowDetail(showDetail);
        }
    } catch (e) {
        console.log(e);
    }
});

function getDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=492d9308&i=' + imdbid)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.json();
        })
}

function updateShowDetail(movie) {
    const movieDetails = showMovieDetail(movie);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetails;
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