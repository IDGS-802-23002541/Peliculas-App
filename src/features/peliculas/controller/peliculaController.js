export const agregarPeli = (peliculas, peli) => {
    return [...peliculas, peli]; //agregamos una pelicula al arreglo
}

export const eliminarPeli = (peliculas, id) => {
    return peliculas.filter(peli => peli.id !== id); 
}

export const cambiarEstatus = (peliculas, status, id) => {
    return peliculas.map(peli =>
        peli.id === id
            ? { ...peli, status: status }
            : peli
    );
}

export const obtenerFavoritas = (peliculas) => {
    return peliculas.filter(peli => peli.status === 'favoritas');
}

export const obtenerNoMeGustan = (peliculas) => {
    return peliculas.filter(peli => peli.status === 'nogustan');
}

export const obtenerSinCatalogar = (peliculas) => {
    return peliculas.filter(peli => peli.status === 'none');
}