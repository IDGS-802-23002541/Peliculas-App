export class Pelicula {
    constructor(id, titulo, anio, genero, director, calificacion = 0){
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
        this.director = director;
        this.calificacion = calificacion;
        this.status = 'none' //para las peliculas favoritas o no me gustan
    }
}