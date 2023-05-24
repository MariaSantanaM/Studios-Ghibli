// Aquí debes escribir la lógica que corresponde a tu proyecto, es decir,
// interactuar con el DOM, haciendo uso de las funciones declaradas en data.js

// Importar la data desde data.js
import data from "./ghibli.js";

// Importar la función que filtra y la función que ordena
import { filter, sort } from "./data.js";

// Obtener los elementos del DOM con los que vamos a interactuar
// por medio de sus IDs con el método getElementById,
// y guardarlos en variables para usarlos cuando sea necesario
// (recuerda que ya los debes haber creado en tu HTML)
const filmsContainer = document.getElementById("films-container");
const sortBySelect = document.getElementById("sort-by");
const filterByDirectorSelect = document.getElementById("filter-by-director");
const clearFiltersButton = document.getElementById("clear-filters");

// Obtener la data de las películas desde data.js
// y guardarla en una variable para usarla cuando sea necesario
const films = data.films;

// Esta función crea los elementos HTML que representan a las películas
// mapeando el array que se le pase como argumento
// y retornando un string con el HTML y los datos de cada película
const createFilms = (array) => {
  const filmsCards = array
    .map(
      (film) => `
        <div class="grid-item film-card flex flex-row">
            <img src="${film.poster}" alt="${film.title}"/>
            <div class="flex flex-col flex-1">
                <h3>${film.title}</h3>
                <p class="film-description">${film.description}</p>
                <div class="flex flex-row">
                    <p>Director: ${film.director}</p>
                    <p>Producer: ${film.producer}</p>
                </div>
                <div class="flex flex-row">
                    <p>Date: ${film.release_date}</p>
                    <p>RT Score: ${film.rt_score}</p>
                </div>
            </div>
        </div>
      `
    )
    .join("");
  // ¿Cómo añadimos los elementos de filmsCards al DOM?
  // return ...
};

// Llamar a la función createFilms para que se ejecute al cargar la página
createFilms(data.films);

// Añadir los event listeners a los elementos del DOM con los que vamos a interactuar
// y llamar a la función createFilms con la información (el arreglo) que necesite

sortBySelect.addEventListener("change", (event) => {
  const sortedFilms =
    sort(/* ¿Qué información está esperando la función sort? */);
  createFilms(sortedFilms);
});

filterByDirectorSelect.addEventListener("change", (event) => {
  const filteredFilms =
    filter(/* ¿Qué información está esperando la función filter? */);
  createFilms(filteredFilms);
});

clearFiltersButton.addEventListener("click", () => {
  createFilms(films);
});
