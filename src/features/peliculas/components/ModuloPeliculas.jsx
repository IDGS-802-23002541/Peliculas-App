import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import Footer from '../../../shared/Footer';
import Header from '../../../shared/Header';

import ListadoPeliculas from "./ListadoPeliculas";
import FormularioPeliculas from "./FormularioPeliculas";

import { PeliculasData } from "../data/dataset_pelis";

import {
    agregarPeli,
    cambiarEstatus,
} from "../controller/peliculaController";

function ModuloPeliculas() {
    const [peliculas, setPeliculas] = useState(PeliculasData);
    const [filtro, setFiltro] = useState('none');

    const handleAgregarPelicula = (nuevaPeli => {
        const pelicula = {
            ...nuevaPeli, status: 'none'
        }
        const nuevasPeliculas = agregarPeli(
            peliculas,
            pelicula
        );
        setPeliculas(nuevasPeliculas);
    })

     const handleFavorito = (id) => {
        const nuevasPeliculas = cambiarEstatus(
            peliculas,
            'favorita',
            id
        );
        setPeliculas(nuevasPeliculas);
    };


    const handleNoFavorito = (id) => {
        const nuevasPeliculas = cambiarEstatus(
            peliculas,
            'nofavorita',
            id
        );
        setPeliculas(nuevasPeliculas);
    };

     const peliculasFiltradas = peliculas.filter((pelicula) => {

        if (filtro === 'todas') {
            return true;
        }

        return pelicula.status === filtro;
    });

    return(
        <>
            <Header
                titulo="Módulo de Películas"
            />

            <Container>
                <FormularioPeliculas
                    onAgregarPeli={handleAgregarPelicula}
                />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        mb: 3,
                        flexWrap: 'wrap'
                    }}
                >
                    <Button
                        variant={filtro === 'none' ? 'contained' : 'outlined'}
                        onClick={() => setFiltro('none')}
                    >
                        Sin catalogar
                    </Button>
                    <Button
                        variant={filtro === 'favorita' ? 'contained' : 'outlined'}
                        onClick={() => setFiltro('favorita')}
                    >
                        Favoritas
                    </Button>
                    <Button
                        variant={filtro === 'nofavorita' ? 'contained' : 'outlined'}
                        onClick={() => setFiltro('nofavorita')}
                    >
                        No me gustan
                    </Button>
                    <Button
                        variant={filtro === 'todas' ? 'contained' : 'outlined'}
                        onClick={() => setFiltro('todas')}
                    >
                        Todas
                    </Button>
                </Box>

                <div className="movie-list">
                    <ListadoPeliculas
                        peliculas={peliculasFiltradas}
                        onFavorito={handleFavorito}
                        onNoFav={handleNoFavorito}
                    />
                </div>
            </Container>
            <Footer titulo='Módulo de Películas'/>
        </>
    )
  
}

export default ModuloPeliculas;