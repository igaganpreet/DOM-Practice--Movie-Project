const addMovieModal = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");
const startAddMovieButtton = document.querySelector("header button");
const cancelMovieModal = document.querySelector(".modal__actions").firstElementChild;
const addAddMovieModal = cancelMovieModal.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movies = [];




console.log(cancelMovieModal);
const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackDrop();

}
const toggleBackDrop = () => {
    backDrop.classList.toggle("visible");
}
const backDropClickHandler = () => {
    toggleMovieModal();
}
const cancelMovieModalClickHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}
const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}
const renderNewMovieElemet = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = ` 
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
     `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const addMovieModalClickHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || ratingValue < 1 || ratingValue > 5) {
        alert("please enter valid values");
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElemet(newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}

startAddMovieButtton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backDropClickHandler);
cancelMovieModal.addEventListener('click', cancelMovieModalClickHandler);
addAddMovieModal.addEventListener('click', addMovieModalClickHandler);