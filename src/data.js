// Objetivo: Crear las funciones que nos permitan filtrar y ordenar los datos

export const filter = (arr, value) => {
  console.log(arr, value)
  return arr.filter(element => element.director ===value)
};

function filterDirector (){
  console.log("hola")
  return 5
}


filterDirector()



export const sort = (arr, value) => {
  console.log(arr, value)
  // Estudiar cómo funciona el método sort de los arrays
  //el metodo sort() ordena los elementos de un arreglo y devuelve el arreglo ordenado//
  return arr.sort((a, b) => {
    // ¿Qué vamos a retornar para cada caso?
    if (value === "title") {
      console.log(a.title.localeCompare(b.title))

      return a.title.localeCompare(b.title);
    

    } else if (value === "newest") {
       return b.release_date - a.release_date;

    } else if (value === "oldest") {
       return a.release_date - b.release_date;

    } else if (value === "best_score") {
      console.log(value)
       return b.rt_score - a.rt_score;
        
    } else if (value === "worst_score") {
       return a.rt_score - b.rt_score
    }
  });
};
