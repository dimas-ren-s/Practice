$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=492d9308&s=' + $('.input-keyword').val(),
        success: result => { // callback
            // console.log(result)
            const movies = result.Search;
            let cards = '';
            const totalMovies = result.totalResults;
            movies.forEach(movie =>
                cards += showCards(movie)
            );
            $('.movie-container').html(cards); // memunculkan cards ke dalam html melalui class movie-container

            // ketika button details di klik, karna event handler disini butuh this, kita ga pakai arrow function
            $('.modal-detail-button').on('click', function () { // pakai function bukan arrow function, karna butuh "this"
                // console.log($(this).data('imdbid')); // penulisannya adalah $(this), dan data('nama data-imdbid' tapi ga pakai "data-")
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=492d9308&i=' + $(this).data('imdbid'),
                    success: m => { // callback
                        const movieDetails = showMovieDetail(m);
                        $('.modal-body').html(movieDetails);
                    },
                    error: (e) => { // callback
                        console.log(e.responseText)
                    }
                })
            });
        },
        error: (e) => { // callback
            console.log(e.responseText)
        }
    });
}); // waspada cllback hell, jadi kita ganti jquery ke fetch. sebaiknya gunakan bawaan js yaitu fetch

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