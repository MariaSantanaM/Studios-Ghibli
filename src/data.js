// Objetivo: Crear las funciones que nos permitan filtrar y ordenar los datos

export const filter = (arr, value) => {
  // return arr.filter ...
};

export const sort = (arr, value) => {
  // Estudiar cómo funciona el método sort de los arrays
  return arr.sort((a, b) => {
    // ¿Qué vamos a retornar para cada caso?
    if (value === "title") {
      // return ...
    } else if (value === "newest") {
      // return ...
    } else if (value === "oldest") {
      // return ...
    } else if (value === "best_score") {
      // return ...
    } else if (value === "worst_score") {
      // return ...
    }
  });
};
